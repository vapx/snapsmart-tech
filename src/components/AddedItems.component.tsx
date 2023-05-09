import { useEffect, useState } from "react";
import { TotalItems } from "./TotalItems.component";

type AllItemProps = {
  id: string;
  productName: string;
  description: string;
  unitPrice: number; 
  category: string;
  imageUrl: string;
}

type IdProps = {
  idOfItem: string[],
  clearCart: boolean
}

export const AddedItems = (props: IdProps) => {
  const [savedData, setSavedData] = useState<AllItemProps[]>([]);
  const [totalUnitPrice, setTotalUnitPrice] = useState<number>(0);

  useEffect(() => {
    const sum = savedData.reduce((acc, item) => acc + item.unitPrice, 0);
    setTotalUnitPrice(sum);
  }, [savedData]);

  useEffect(() => {
    const fetchData = async (id: string) => {
      const response = await fetch(`items.json`);
      const data: AllItemProps[] = await response.json();
      const filteredData = data.filter(item => item.id === id);
      return filteredData[0];
    };

    const fetchAllData = async () => {
      const promises = props.idOfItem.map(id => fetchData(id));
      const data = await Promise.all(promises);
      setSavedData(data);
    };

    fetchAllData();
  }, [props.idOfItem]);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(savedData));
  }, [savedData]);
  
  useEffect(() => {
    console.log("clear", props.clearCart)
    if (props.clearCart) {
      localStorage.removeItem("cartItems");
      setSavedData([]);
      window.location.reload();
    }
  }, [props.clearCart]);
  
  return (
    <>
      {savedData.reverse().map(itemsSaved => (
        <div className="card bg-light p-5" key={itemsSaved.id}>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={itemsSaved.imageUrl}
                className="card-img"
                alt="Product Image"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="col-lg-6">
              <h5 className="card-title">{itemsSaved.productName}</h5>
              <p
                className="card-text text-danger font-weight-bold"
                style={{ fontSize: "12px" }}
              >
                P {itemsSaved.unitPrice}
              </p>
              <button>-</button>
              <span>"count"</span>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
      <TotalItems totalItems={savedData.length} totalAmount={totalUnitPrice}/>
    </>
  );
};
