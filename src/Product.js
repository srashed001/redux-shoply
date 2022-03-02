import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function Product({ id }) {
  const dispatch = useDispatch();
  const product = useSelector((st) => st.products[id]);

  function add() {
    dispatch({ type: "ADD", id });
  }

  function remove() {
    dispatch({ type: "REMOVE", id });
  }

  return (
    <div className="d-flex justify-content-center">
      <div class="card m-3 w-50 d-flex justify-content-center shadow p-1">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={product.image_url}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body text-end">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">{product.price}</p>
              <button className="btn btn-primary m-1" onClick={add}>
                <i class="bi bi-plus-circle"></i>
              </button>
              <button className="btn btn-danger m-1" onClick={remove}>
                <i class="bi bi-dash-circle"></i>
              </button>
              <NavLink exact to={`/products/${id}`}>
                <p class="card-text">
                  <small class="text-muted">More Details</small>
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
