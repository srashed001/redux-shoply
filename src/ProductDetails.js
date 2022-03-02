import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((st) => st.products[id]);
  const dispatch = useDispatch();
  const item = useSelector((st) => st.cart[id]) ?? 0;

  function add() {
    dispatch({ type: "ADD", id });
  }

  function remove() {
    dispatch({ type: "REMOVE", id });
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col text-start">
          <h1>{product.name.toUpperCase()}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
        <div className="col">
          <div className="row justify-content-center">
            <img src={product.image_url} alt={product.name} style={{width: '300px'}} />
          </div>
          <div className="row">
            <div>
              <p>Cart: {item} </p>
              <button className="btn btn-primary m-1" onClick={add}>
                <i class="bi bi-plus-circle"></i>
              </button>
              <button className="btn btn-danger m-1" onClick={remove}>
                <i class="bi bi-dash-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
