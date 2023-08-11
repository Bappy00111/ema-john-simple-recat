import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import RevewItem from '../RevewItem/RevewItem';
import './OrderRewiew.css'
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const saveCart = useLoaderData()
    const [cart,setCart] = useState(saveCart)


    const handleRemoveFromCart = (id) =>{
        const reamingItem = cart.filter(product => product.id !== id)
        // console.log(reamingItem)
        setCart(reamingItem)
        removeFromDb(id)
    }


    return (
        <div className='shop-container'>
            <div className='orderRevew-container'>
                {
                    cart.map(product => <RevewItem
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></RevewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;