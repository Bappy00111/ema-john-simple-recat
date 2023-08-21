import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    // console.log(cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        // step one 
        // product.quantity = product.quantity || 1;

        // step two 
        if (product.quantity === 0) {
            product.quantity = 1;
        }


        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2 className='order-name'>Order summery</h2>
            <p>selected items : {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping Charge: $ {totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: $ {grandTotal}</p>
            <button className='btn-clear'>
                Clear Cart
                <Link> <span > <FontAwesomeIcon icon={faTrash} /></span></Link>
            </button>
           
                <button className='btn-order'> proced ChakOut
                    <Link to='/chakout'> <FontAwesomeIcon icon={faArrowCircleRight} /></Link>
                </button>
            
        </div>

    );
};

export default Cart;