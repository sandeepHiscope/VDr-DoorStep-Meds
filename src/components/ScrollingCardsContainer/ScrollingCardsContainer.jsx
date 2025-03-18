import React, { useRef, useEffect, useContext } from "react";
import { CartContext } from "../../CartContext";
// import WishlistButton from "../WishlistButton/WishlistButton";
import "./ScrollingCardsContainer.css";
import ProductList from "../../assets/ProductList";

export default function ScrollingCardsContainer() {
  const { addToCart } = useContext(CartContext);
  const containerRef = useRef(null);
  const autoScrollInterval = useRef(null);
  let isHovering = false;

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(() => {
      if (!isHovering && containerRef.current) {
        containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth / 2
        ) {
          setTimeout(() => {
            containerRef.current.scrollLeft = 0;
          }, 500);
        }
      }
    }, 2000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
  };

  return (
    <div className="scrollingCardsContainer">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        ◀
      </button>
      <div className="cards-container" ref={containerRef}>
        {ProductList.map((product, index) => (
          <div
            className="scrollingcard"
            key={index}
            onMouseEnter={() => {
              isHovering = true;
              stopAutoScroll();
            }}
            onMouseLeave={() => {
              isHovering = false;
              startAutoScroll();
            }}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="card-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)} className="addToCartButton">🛒 Add to Cart</button>
              {/* <WishlistButton product={product} /> */}
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
}
