import React from 'react';
import './RevewItem.css'
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const RevewItem = ({product,handleRemoveFromCart}) => {
    // console.log(product)
    return (
        <div className='revew-items'>
            <div className='product-container'>
                <img className='images' src={product.img} alt="" />
                <div className='text-container'>
                    <h3>{product.category}</h3>
                    <p>Price: ${product.price}</p>
                    <p>quantity:${product.quantity}</p>
                </div>
            </div>
            <Link><AiOutlineDelete onClick={()=>handleRemoveFromCart(product.id)} className='btn-delet'/></Link>
        </div>
    );
};

export default RevewItem;