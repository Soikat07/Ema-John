import React from 'react';
import './Product.css'
const Product = (props) => {
  const { img, name, price, seller,ratings } = props.product;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h6>{name}</h6>
        <p className='product-price'>Price: ${price}</p>
        <p>Manucfacturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
        <button className='btn-cart'>Add to Cart</button>
    </div>
  );
};

export default Product;