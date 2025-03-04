import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import hero from "../../assets/hero.jpg";

export default function Home() {
  return (
    <div className="homeContent">
      <di className="heroSection">
        <img src={hero} alt="Banner" />
        <h1>we provide world's most truseted medicines </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum aliquam tempore corporis reiciendis voluptatum in repudiandae? Maiores dolor odit soluta eius, quia, excepturi fugit quis facilis placeat, omnis qui.</p>
      </di>
      <div className="scrollingContainer">Scrolling Content</div>
      <div className="midContent">Mid content</div>
      <div className="endContent">End content</div>
    </div>
  );
}
