import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      return existingItem
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          )
        : [...prevCart, { ...item, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevCart) =>
      prevCart
        .map((cartItem) => (cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }

  const toggleWishlist = (product) => {
    setWishlistItems((prevWishlist) => {
      const isAlreadyWishlisted = prevWishlist.some((item) => item.id === product.id);
      if (isAlreadyWishlisted) {
        return prevWishlist.filter((item) => item.id !== product.id);
        
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  function moveToCartFromWishlist(item) {
    addToCart(item);
    setWishlist((prevWishlist) => prevWishlist.filter((wishItem) => wishItem.id !== item.id));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, wishlistItems, toggleWishlist , moveToCartFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
}
