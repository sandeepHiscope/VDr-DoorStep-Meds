import { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    console.log("Cart Page Loaded. Cart Items:", cartItems);
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return <h1 className="cart-empty-message">🛒 Your cart is empty.</h1>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>
      <div className="cart-content">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-price">₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
              </div>
            </div>
            <div className="cart-actions">
              <button onClick={() => removeFromCart(item.id)} className="cart-remove-button">➖</button>
              <span className="cart-quantity">{item.quantity}</span>
              <button onClick={() => addToCart(item)} className="cart-add-button">➕</button>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <span>Total Price:</span>
          <span>₹{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
        </div>
        <button className="cart-checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}
