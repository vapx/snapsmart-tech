import { useState, useEffect } from "react";
import { AllItems } from '../components/AllItems.component'

interface Item {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  category: string;
  imageUrl: string;
  setItemsId: (id: string) => void
}

interface Props {
  category: string;
}

const Groceries = ({ category }: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("items.json")
      .then((response) => response.json())
      .then((data: Item[] ) => {
        setItems(data.filter((item) => item.category === category));
      })
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div>
      <h1>Groceries Items</h1>
      {items
        .sort((lowest, highest) => highest.unitPrice - lowest.unitPrice)
        .map((item) => (
          <AllItems
            key={item.id}
            id={item.id}
            productName={item.productName}
            description={item.description}
            unitPrice={item.unitPrice}
            category={item.category}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  );
};

export default Groceries;
