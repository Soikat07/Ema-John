import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakeDb';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
//get data from json file
  useEffect(() => {
    fetch('products.json')
    .then(res =>res.json())
    .then(data =>setProducts(data))
  }, [])
  // get data from local storage
    useEffect(() => {
    const storedCart = getShoppingCart();
    const savedProductArray = [];
    // step 1: get id
    for (const id in storedCart) {

    //step 2: get the product by using id  
      const savedProducts = products.find(product => product.id === id);
      if (savedProducts) {
        //step 3: get the quantity of the product
        const quantity = storedCart[id];
        savedProducts.quantity = quantity;
        // step 4: push the products into the array
        savedProductArray.push(savedProducts);
      }
      // console.log(savedProducts);
    }
    // step 5: set the new carts array into the cart
    setCart(savedProductArray);

    }, [products])
  
  const handleAddToCart = product => {
    let newCart = [];
    const exits = cart.find(pd => pd.id === product.id);
    if (!exits) {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    else {
      exits.quantity = exits.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exits];
    }
    setCart(newCart);
    addToDb(product.id)
  }

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          products.map(product => <Product product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;