import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    //shortcut of condition: product.quantity=product.quantity||1;
    total = total + product.price*product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = total * 5 / 100;
  const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h5>Order Summary</h5>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;