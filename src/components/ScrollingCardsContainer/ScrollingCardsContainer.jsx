import React, { useRef, useEffect } from "react";
import "./ScrollingCardsContainer.css";
import hero from "../../assets/hero.jpg";
import allmedicines from "../../assets/allmedicines.jpg";
import tablets from "../../assets/tablets.jpg";
import capsules from "../../assets/capsules.jpg";
import x from "../../assets/x.jpg";

const products = [
  { id: 1, name: "Paracetamol", image: hero, description: "Pain reliever", price: "50" },
  { id: 2, name: "Ibuprofen", image: allmedicines, description: "Anti-inflammatory", price: "75" },
  { id: 3, name: "Amoxicillin", image: tablets, description: "Antibiotic", price: "120" },
  { id: 4, name: "Cetirizine", image: capsules, description: "Allergy relief", price: "40" },
  { id: 5, name: "Metformin", image: x, description: "Diabetes control", price: "90" },
  { id: 6, name: "Omeprazole", image: hero, description: "Acid reflux treatment", price: "110" },
  { id: 7, name: "Aspirin", image: hero, description: "Pain reliever", price: "30" },
  { id: 8, name: "Losartan", image: hero, description: "Blood pressure control", price: "140" },
  { id: 9, name: "Atorvastatin", image: hero, description: "Lowers cholesterol", price: "160" },
  { id: 10, name: "Azithromycin", image: x, description: "Antibiotic", price: "180" },
];

const loopProducts = [...products, ...products];

export default function ScrollingCardsContainer() {
  const containerRef = useRef(null);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          setTimeout(() => { containerRef.current.scrollLeft = 0; }, 500);
        }
      }
    }, 2000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
  };

  const resetAutoScroll = () => {
    stopAutoScroll();
    setTimeout(startAutoScroll, 5000);
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      resetAutoScroll();
    }
  };

  return (
    <div className="scrollingCardsContainer">
      <button className="scroll-btn left" onClick={() => scroll("left")}>◀</button>
      <div className="cards-container" ref={containerRef}>
        {loopProducts.map((product, index) => (
          <div className="scrollingcard" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="card-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll("right")}>▶</button>
    </div>
  );
}