import React, { useState } from 'react';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import Cart from '../Cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakeDb';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
 
const Order = () => {
  
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const removeCartHandler = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }
  const deleteCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map(product => (
          <Review
            product={product}
            key={product.id}
            removeCartHandler={removeCartHandler}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart} deleteCartHandler={deleteCartHandler}>
          <Link className='link' to="/checkout">
            <button className="btn-checkout">
              <span>Proceed Checkout</span>
              <FontAwesomeIcon icon={faCheckToSlot}/>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;