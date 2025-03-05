import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import hero from "../../assets/hero.jpg";

export default function Home() {
  return (
    <div className="homeContent">
      {/* <hr /> */}
      <div className="heroSection">
        <img src={hero} alt="Banner" />
        <h1>Your Health, Our Priority </h1>
        <h2>Trusted Medicines Delivered to Your Doorstep</h2>
        <p>Shop with confidence knowing that our medicines are sourced from trusted manufacturers and delivered with care.</p>
        
      </div>
      <hr />
      <div className="scrollingContainer">Scrolling Content</div>
      <hr />
      <div className="midContent">Mid content</div>
      <hr />
      <div className="endContent">End content</div>
      <hr />
    </div>
  );
}
