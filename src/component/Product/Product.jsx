import React from 'react';
import './Product.css'

const Product = (props) => {
   const {img,name,seller,quantity,id,price,ratings} = props.product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;