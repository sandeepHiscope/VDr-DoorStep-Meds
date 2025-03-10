import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import "./Products.css";
import Card from "../../components/Card/Card";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductList from "../../assets/ProductList";

export default function Products() {
  const { cartItems, addToCart } = useContext(CartContext);

  function handleAddToCart(product) {
    console.log("Clicked Add to Cart for:", product); // Debug log 
    addToCart(product);
    console.log("Cart after adding:", cartItems); // Debug log
  }

  return (
    <div className="productsPageProductsPage">
      <div className="productsPageProductsFilter">
        <ProductFilters />
      </div>
      <div className="productsPageProductsContainer">
        {ProductList.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            addToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
