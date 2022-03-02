import {useSelector} from "react-redux";
import Product from "./Product";


function ProductPage(){

    const products = useSelector(st => st.products)

    return (
        <div>
            <h1 className="m-2">Product List</h1>
            {Object.keys(products).map(productId => <Product id={productId} key={productId}/>)}
        </div>
    )


}

export default ProductPage