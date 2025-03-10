import { useContext } from "react";
import { CartContext } from "../../CartContext";
import "./HealtProducts.css";
import Card from "../../components/Card/Card";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductList from "../../assets/ProductList";

export default function HealtProducts() {
  const { cartItems, addToCart } = useContext(CartContext);

  function handleAddToCart(product) {
    console.log("Clicked Add to Cart for:", product); // Debug log
    addToCart(product);
    console.log("Cart after adding:", cartItems); // Debug log
  }

  return (
    <div className="healtProductsFullScreen">
      <div className="healtProductsProductsPage">
        <div className="healtProductsProductsFilter">
          <ProductFilters />
        </div>
        <div className="healtProductsProductsContainer">
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
    </div>
  );
}
