import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Products from "./pages/ProductsPage/Products";
import HealtProducts from "./pages/HealtProducts/HealtProducts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Supplements from "./pages/Supplements/Supplements";
import "./App.css";

export default function App() {
  return (
    <div className="wholeContent">
      <Header />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/healtProducts" element={<HealtProducts/>} />
          <Route path="/supplements" element={<Supplements/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}