import { useState } from "react";
import { AddedItems } from "./AddedItems.component";

interface CartOrderProps {
  itemsId: string[]
}

export const CartOrder = (props : CartOrderProps) => {
  const [clearCart, setClearCart] = useState(false);

  const removeCartItem = () => {
    localStorage.removeItem("cartItems");
    setClearCart(true);
  };

  return (
    <div style={{height: "100%"}}>
      <div className="text-white" style={{backgroundColor: "grey", height: "130px"}}>
        <h4 className="text-black fw-bold">My Cart</h4>
        <button className="btn btn-danger text-white float-end" onClick={removeCartItem}>Clear Cart</button>
      </div>
        <AddedItems idOfItem={props.itemsId} clearCart={clearCart} />
    </div>
  )
}
