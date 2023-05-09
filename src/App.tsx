import { SearchItem } from './components/SearchItem.component'
import { useState, useEffect, ReactElement } from 'react'
import Sidenav from './components/Sidenav.component'
import { CartOrder } from './components/CartOrder.component'
import { AllItems } from './components/AllItems.component'
import Groceries from './pages/Groceries.page'
import Lifestyle from './pages/Lifestyle.page'
import Cloths from './pages/Cloths.page'
import Automative from './pages/Automative.page'
import Gadgets from './pages/Gadgets.page'
import Furniture from './pages/Furniture.page'
import Toys from './pages/Toys.page'
import "./global.css"


interface Item {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  category: string;
  imageUrl: string;
}

function App(): ReactElement {
  const [ itemData, setItemData ] = useState<Item[]>( [] )
  const [ selectedCategory, setSelectedCategory ] = useState<string>( "" )
  const [ searchItemsQuery, setSearchItemsQuery ] = useState<string>( "" )
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addItemToCart = (itemId: string) => {
    setCartItems([...cartItems, itemId]);
  }
  
  const searchResults = itemData.filter( ( item ) =>
    item.productName.toLowerCase().includes( searchItemsQuery.toLowerCase() )
  );
  
  useEffect(() => {
    setSelectedCategory( window.location.hash.substring( 1 ) );
    console.log(selectedCategory)
  }, [selectedCategory])
  
  useEffect( () => {
    fetch( 'items.json' )
      .then( response => response.json() )
      .then( data => setItemData( data ) )
      .catch( error => console.error( error ) );
  }, [] )


  return (
    <>
      <header className='bg-dark text-white p-5 fw-bold' style={{ fontSize: 24 }}>Online Shopping Store</header>
      <div className='d-flex justif-content-between'>
        <div className='col-lg-2'>
          <Sidenav setSelectedCategory={setSelectedCategory}/>
        </div>
        <div className='col-lg-8'>
          <SearchItem setSearchItemsQuery={setSearchItemsQuery} />
          {selectedCategory === "groceries" ? <Groceries category="groceries" key={selectedCategory}/> : null}
          {selectedCategory === "lifestyle" ? <Lifestyle category="lifestyle" key={selectedCategory} /> : null}
          {selectedCategory === "cloths" ? <Cloths category="cloths" key={selectedCategory} /> : null}
          {selectedCategory === "automative" ? <Automative category="automative" key={selectedCategory}/> : null}
          {selectedCategory === "gadgets" ? <Gadgets category="gadgets" key={selectedCategory} /> : null}
          {selectedCategory === "furniture" ? <Furniture category="furniture" key={selectedCategory} /> : null}
          {selectedCategory === "toys" ? <Toys category="toys"  key={selectedCategory}/> : null}
          {selectedCategory === "all-items" ? (
            <>
              {searchItemsQuery === "" ?
                itemData
                  .sort( ( lowest, highest ) => highest.unitPrice - lowest.unitPrice )
                  .map( ( item ) => (
                    <AllItems
                      key={item.id}
                      id={item.id}
                      productName={item.productName}
                      description={item.description}
                      unitPrice={item.unitPrice}
                      category={item.category}
                      imageUrl={item.imageUrl}
                      itemAddToCart={addItemToCart}
                    />
                  ) )
                :
                searchResults.map( ( item ) => (
                  <AllItems
                    id={item.id}
                    productName={item.productName}
                    description={item.description}
                    unitPrice={item.unitPrice}
                    category={item.category}
                    imageUrl={item.imageUrl}
                    key={item.id}
                    itemAddToCart={addItemToCart}
                  />
                ) )
              }

            </>
          ) : null}
        </div>
        <div className='col-lg-2'>
          <CartOrder  itemsId={cartItems}/>
        </div>
      </div>
    </>
  )
}

export default App
