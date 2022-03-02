
import { useSelector, useDispatch } from "react-redux";

function CartItem({ id, qty }) {
  const item = useSelector((st) => st.products[id]);
  const dispatch = useDispatch();


  function add() {
    dispatch({ type: "ADD", id });
  }

  function remove() {
    dispatch({ type: "REMOVE", id });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 text-start">
          <img
            src={item.image_url}
            alt={item.name}
            style={{ width: "100px" }}
            className='d-block mb-2'
          />
          <button className="btn btn-primary m-1" onClick={add}>
            <i class="bi bi-plus-circle"></i>
          </button>
          <button className="btn btn-danger m-1" onClick={remove}>
            <i class="bi bi-dash-circle"></i>
          </button>
        </div>
        <div className="col text-end">
          <p>{item.name.toUpperCase()}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {qty}</p>
          <p>Total: {item.price * qty}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
