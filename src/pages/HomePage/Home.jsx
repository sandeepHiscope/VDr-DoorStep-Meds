import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import ScrollingCardsContainer from "../../components/ScrollingCardsContainer/ScrollingCardsContainer";
import "./Home.css";
import hero from "../../assets/hero.jpg";

export default function Home() {
  return (
    <div className="homeContent">
      {/* <hr /> */}
      <div className="heroSection">
        <img src={hero} alt="Banner" />
        <h1>Your Health Is Our Priority </h1>
        <h2>Trusted Medicines Delivere to Your Doorstep</h2>
        {/* <p>Shop with confidence knowing that our medicines are sourced from trusted manufacturers and delivered with care.</p> */}
        
      </div>
      <div className="scrollingContainer">
      <ScrollingCardsContainer/>

      </div>
      <div className="midContent">Mid content</div>
   
    </div>
  );
}
