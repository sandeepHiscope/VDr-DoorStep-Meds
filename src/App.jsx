import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Products from "./pages/ProductsPage/Products";
import HealtProducts from "./pages/HealtProducts/HealtProducts";
import Supplements from "./pages/Supplements/Supplements";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/Cart/CartPage";
import "./App.css";
import { CartProvider } from "./CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="wholeContent">
        <Header />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/healtProducts" element={<HealtProducts />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/cart" element={<CartPage />} /> {/* Ensure CartPage is correct */}
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
