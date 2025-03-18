import React from "react";
import "./Card.css";
// import WishlistButton from "../WishlistButton/WishlistButton";
// import img from "../../assets/x.png"

export default function Card({
  image,
  name,
  description,
  price,
  addToCart,
  // product,
}) {
  return (
    <div className="card">
      <img className="img" src={image} alt={name} />
      <h3 className="title">{name}</h3>
      <p className="description"> {description}</p>
      <p className="price"> ${price}</p>

      <div className="buttonsContainer">
        <button className="addToCart" onClick={addToCart}>
          Ad to Cart
        </button>
        {/* <WishlistButton product={product} /> */}
        {/* 🤍❤️ */}
      </div>
    </div>
  );
}
