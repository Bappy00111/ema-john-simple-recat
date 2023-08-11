import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
        const savedCart = []
        // step 1 
        for(const id in storedCart){
            // step 2 
           const addedProduct =  products.find(product => product.id === id)
            // step 3 
           if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            // step 4 added saved card 
            savedCart.push(addedProduct)
           }  
        //    console.log(addedProduct)         
        }
        // step 5 set the state 
        setCart(savedCart)
    },[products])
    

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleProduct={handleProduct}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart
                    cart={cart}

                ></Cart>
            </div>

        </div>
    );
};

export default Shop;