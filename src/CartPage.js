
import { useSelector} from "react-redux";
import CartItem from "./CartItem";

function CartPage() {
  const cart = useSelector((st) => st.cart);
  const products = useSelector((st) => st.products);


  if (Object.keys(cart).length < 1) return <h1>No items in your cart</h1>

  const qty = Object.values(cart).reduce((prev, curr) => prev + curr);

  if(!qty) return <h1>No items in your cart</h1>
  
  const itemsArr = Object.entries(cart);
  const total = itemsArr
    .map(([id, qty]) => products[id].price * qty)
    .reduce((prev, curr) => prev + curr);

    const taxes = +(total * .0795).toFixed(2)

  return (
    <div className="container">
      <h1 className="my-3">Shopping Cart</h1>
      <div className="row">
        <div className="col-8">
          <div className="container">
            <ul class="list-group list-group-flush">
              {itemsArr.map(([id, qty]) => ( qty ?
                <li class="list-group-item">
                  <CartItem key={id} id={id} qty={qty} />
                </li>
                : null
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="container shadow p-3">
              <h3>Order Summary</h3>
            <div className="container p-2 text-start">
                
              <p>Total Items: {qty}</p>
              <p>Subtotal: ${total}</p>
              <p>Taxes: ${taxes}</p>
              <p>Total: ${(total + taxes).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
