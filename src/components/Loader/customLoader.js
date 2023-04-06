import { getShoppingCart } from "../../utilities/fakeDb";


const cartProductLoader = async () => {
  const loadedProduct = await fetch('products.json');
  const products = await loadedProduct.json();
  
  // if cart data is in database, we have to use async  await

  // get data from local storage
  const storedCart = getShoppingCart();
  const savedCart = [];
  
  // get the id and local storage stored data in object format thats why we use for in loop
  for (const id in storedCart) {
    // get the product using id from fetching data
    const addedProducts = products.find(pd => pd.id === id);
    console.log(addedProducts);
    // if the product is available in addedProducts we have to set the quantity
    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      savedCart.push(addedProducts);
    }
  }
  return savedCart;
}
export default cartProductLoader;