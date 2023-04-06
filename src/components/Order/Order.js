import React, { useState } from 'react';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakeDb';
const Order = () => {
  
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const removeCartHandler = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {
          cart.map(product => <Review
            product={product}
            key={product.id}
          removeCartHandler={removeCartHandler}
          />)
        }
      </div>
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;