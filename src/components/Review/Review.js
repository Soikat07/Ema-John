import React from 'react';
import './Review.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Review = ({ product, removeCartHandler }) => {
  
  const { id, img, price, quantity, name } = product;
  
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price:<span className="orange-text"> ${price}</span>
        </p>
        <p>
          Order Quantity:<span className="orange-text"> {quantity}</span>
        </p>
      </div>
      <button onClick={()=>removeCartHandler(id)} className="btn-delete">
        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Review;