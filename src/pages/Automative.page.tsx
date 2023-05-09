import { useState, useEffect } from "react";
import { AllItems } from '../components/AllItems.component'

interface Item {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  category: string;
  imageUrl: string;
}

interface AutomativeProps {
  category: string;
}

const Automative = ({ category }: AutomativeProps) => {
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
      <h1>Automative Items</h1>
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

export default Automative;
