type totalItemsProps = {
  totalAmount: number;
  totalItems: number
}

export const TotalItems = ( props: totalItemsProps ) => {
  return (
    <>
      {props.totalAmount ?
        (

          <div className="p-4 text-white" style={{ backgroundColor: "grey" }}>
            <p>Total Items: {props.totalItems}</p>
            <p>Total Items: {props.totalAmount}</p>
            <button className="btn btn-success w-100">Checkout</button>
          </div>
        )
        : ""}
    </>
  )
}
