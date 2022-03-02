import productList from '../data.json'

const {products} = productList

function productsReducer(state = products, action){
    switch(action.type){
        default:
            return state
    }

}

export default productsReducer