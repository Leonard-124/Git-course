
import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Simple E-commerce Website</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;

