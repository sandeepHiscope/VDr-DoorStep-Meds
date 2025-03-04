import React from "react";
import "./Card.css";
// import img from "../../assets/x.png"

export default function Card({ image, name, description, price }) {
    
  return (
    <div className="card">
      <img className="img" src={image} alt={name} />
      <h3 className="title">{name}</h3>
      <p className="description"> {description}</p>
      <p className="price"> ${price}</p>

      <div className="buttonsContainer">
        <button className="addToCart">Ad to Cart</button>
        <button className="addToWishlist">🤍</button>
        {/* 🤍❤️ */}
      </div>
    </div>
  );
}
