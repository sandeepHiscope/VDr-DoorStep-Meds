import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        V-Commerce
      </Link>

      <nav className="navBar">
        <Link to="/products" className="navlink">
          Products
        </Link>
        <Link to="/healtProducts" className="navlink">
        HealtProducts
        </Link>
        <Link to="/supplements" className="navlink">
        Supplements
        </Link>
        <Link to="/products" className="navlink">
          Products
        </Link>
        <Link to="/cart" className="navlink">
          <button>🛒</button>
        </Link>
      </nav>
    </div>
  );
}
