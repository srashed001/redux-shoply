 import {Switch, Route} from "react-router-dom"
import CartPage from "./CartPage"
import ProductDetails from "./ProductDetails"
import ProductPage from "./ProductPage"

function Routes(){

    return (
        <Switch>
            <Route exact path='/'>
                <ProductPage />
            </Route>
            <Route exact path='/products/:id'>
                <ProductDetails />
            </Route>
            <Route exact path='/cart'>
                <CartPage />
            </Route>
            <Route>
                <h1>Page Not Found</h1>
            </Route>
        </Switch>
    )

}

export default Routes