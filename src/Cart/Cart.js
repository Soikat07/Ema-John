import React from 'react';
import Product from '../components/Product/Product';
import './Cart.css'
const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = total * 5 / 100;
  const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h5>Order Summary</h5>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;