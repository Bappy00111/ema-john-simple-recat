import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json()

    const storedCart = getShoppingCart()
    const saveCart = [];
    // console.log(storedCart)

    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id)
        // console.log(addedProduct)
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
    }
    return saveCart;
}

export default cartProductsLoader;