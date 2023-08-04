import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;

    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2 className='order-name'>Order summery</h2>
            <p>selected items : {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal}</p>
            <button className='btn-clear'>
                Clear Cart
                <span > <FontAwesomeIcon icon={faTrash} /></span>
            </button>
            <button className='btn-order'>
                Review Order
                <span > <FontAwesomeIcon icon={faArrowCircleRight} /></span>
            </button>
        </div>

    );
};

export default Cart;