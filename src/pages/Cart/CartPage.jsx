import { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { cartItems = [], removeFromCart, wishlist = [], moveToCartFromWishlist } = useContext(CartContext);

  useEffect(() => {
    console.log("Cart Page Loaded. Cart Items:", cartItems);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>

      {/* Cart Items Section */}
      <div className="scroll-container">
        {cartItems.length === 0 ? (
          <h2 className="cart-empty">Your cart is empty.</h2>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div>
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">
                    ₹{item.price} x {item.quantity} = <strong>₹{item.price * item.quantity}</strong>
                  </p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="cart-remove">Remove</button>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary Section */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <span>Total Price:</span>
          <span>₹{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
        </div>
      )}

      {cartItems.length > 0 && <button className="cart-checkout">Proceed to Checkout</button>}

      
    </div>
  );
}
