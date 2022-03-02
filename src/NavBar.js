import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'

function NavBar() {
  const cart = useSelector((st) => st.cart);
  const cartTotal = Object.values(cart).length > 0 ? Object.values(cart).reduce((prev, curr) => prev + curr) : 0

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand"  exact to="/">
         Shoply
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-inline ">
            <NavLink className="nav-link ms-4" exact to="/cart">
              <i
                class="bi bi-cart position-relative"
                style={{ fontSize: "50px" }}
              >
                <span style={{ fontSize: '16px'}} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cartTotal}
                  <span class="visually-hidden">shopping cart</span>
                </span>
              </i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
