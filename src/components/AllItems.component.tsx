    type AllItemProps = {
    id: string;
    productName: string;
    description: string;
    unitPrice: number;
    category: string;
    imageUrl: string;
    itemAddToCart: (itemId: string) => void;
  }
  
  

  export const AllItems : React.FC<AllItemProps> = (props) => {    
    const handleAddToCart = () => {
      props.itemAddToCart(props.id);
      console.log(props.id)
    }
    
    return (
      <div className="d-flex justify-content-center pt-3">
        <div className="card bg-light w-75" key={props.id}>
          <div className="row no-gutters">
            <div className="col-md-2 text-center pt-5">
              <img src={props.imageUrl} className="card-img" alt="Product Image" style={{ width: "100px", height: "100px" }} />
            </div>
            <div className="col-md-8 card-body">
              {/* <div className="card-body"> */}
                <h5 className="card-title">{props.productName}</h5>
                <p>Category: {props.category}</p>
                <p className="card-text">Description: {props.description}</p>
              {/* </div> */}
            </div>
            <div className="card-text d-flex flex-column col-md-2 align-items-center justify-content-center">
              <p className="card-text text-danger font-weight-bold" style={{fontSize: "20px"}}>P {props.unitPrice}</p>
              <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }


