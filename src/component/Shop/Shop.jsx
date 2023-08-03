import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleProduct =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
       }

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
                <h2>order summery</h2>
                <h4>selected items : {cart.length}</h4>
            </div>
            
        </div>
    );
};

export default Shop;