import { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

// Provide Context
export  function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]); // Adds new product to the cart
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId)); // Removes a product from cart
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
