import { useContext } from "react";
import { CartContext } from "../../CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Function to remove an item from the cart
  function handleRemoveFromCart(index) {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-details">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div>
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(index)}
                className="cart-remove-button"
              >
                ❌ Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="cart-checkout-button">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
