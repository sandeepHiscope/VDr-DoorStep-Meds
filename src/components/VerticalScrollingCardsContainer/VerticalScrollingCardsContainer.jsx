import React, { useRef, useEffect } from "react";
import "./VerticalScrollingCardsContainer.css";
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

export default function VerticalScrollingCardsContainer() {
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
        containerRef.current.scrollBy({ top: 250, behavior: "smooth" });
        if (containerRef.current.scrollTop >= containerRef.current.scrollHeight / 2) {
          setTimeout(() => { containerRef.current.scrollTop = 0; }, 500);
        }
      }
    }, 3000);
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
      const scrollAmount = 250;
      containerRef.current.scrollBy({ top: direction === "up" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      resetAutoScroll();
    }
  };

  return (
    <div className="VerticalScrollingCardsContainer">
      <div className="Verticalcards-container-left" ref={containerRef}>
        {loopProducts.map((product, index) => (
          <div className="Verticalscrollingcard" key={index}>
            <img src={product.image} alt={product.name} className="Verticalproduct-image" />
            <div className="Verticalcard-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>₹{product.price}</p>
            </div>
          </div>
        ))}
        <button className="Verticalscroll-btn up" onClick={() => scroll("up")}>▶</button>
        <button className="Verticalscroll-btn down" onClick={() => scroll("down")}>▶</button>
      </div>
      
      
    </div>
  );
}
