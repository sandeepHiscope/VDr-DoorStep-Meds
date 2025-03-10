import { useState, createContext } from "react"; // Import necessary hooks
import "./Products.css";
import Card from "../../components/Card/Card";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductList from "../../assets/ProductList";

// 1️⃣ Create a context to store cart data globally
export const CartContext = createContext(); 

export default function Products() {
  // 2️⃣ Create a state to hold cart items
  const [cartItem, setcartItem] = useState([]); 

  // 3️⃣ Function to add an item to the cart
  function addToCart(product) {
    setcartItem([...cartItem, product]); // Update the state with new product
    console.log("Added to cart:", product);
  }

  return (
    // 4️⃣ Wrap the components with CartContext.Provider to share cart data
    <CartContext.Provider value={{ cartItem, addToCart }}> 
        <div className="productsPageProductsPage">
          <div className="productsPageProductsFilter">
            <ProductFilters /> {/* Filters for products */}
          </div>
          <div className="productsPageProductsContainer">
            {ProductList.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                addToCart={() => addToCart(product)} // Pass function to add items
              />
            ))}
          </div>
        </div>
    </CartContext.Provider>
  );
}
