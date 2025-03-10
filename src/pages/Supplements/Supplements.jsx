import { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import "./Supplements.css";
import Card from "../../components/Card/Card";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductList from "../../assets/ProductList"; // Ensure this file exists and exports an array

export default function Supplements() {
  const { cartItems, addToCart } = useContext(CartContext);

  function handleAddToCart(product) {
    console.log("Clicked Add to Cart for:", product);
    addToCart(product);
  }

  // Log cartItems whenever they change
  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <div className="SupplementsProductsPage">
      <div className="SupplementsProductsFilter">
        <ProductFilters />
      </div>
      <div className="SupplementsProductsContainer">
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
