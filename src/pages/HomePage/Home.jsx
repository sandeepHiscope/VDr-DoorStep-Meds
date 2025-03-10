import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import ScrollingCardsContainer from "../../components/ScrollingCardsContainer/ScrollingCardsContainer";
import VerticalScrollingCardsContainer from "../../components/VerticalScrollingCardsContainer/VerticalScrollingCardsContainer";
import "./Home.css";
import hero from "../../assets/hero.jpg";

export default function Home() {
  return (
    <div className="homeContent">
      {/* <hr /> */}
      <div className="homeheroSection">
        <img src={hero} alt="homeBanner" />
        <h1>Your Health, Our Priority </h1>
        <h2>Trusted Medicines Delivere to Your Doorstep</h2>
        {/* <p>Shop with confidence knowing that our medicines are sourced from trusted manufacturers and delivered with care.</p> */}
      </div>
      <div className="homescrollingContainer">
        <ScrollingCardsContainer />
      </div>
      <hr />
      <div className="homemidContent">
        <>
        <div id="about-us" className="homeabout-us">
            <h2>Your Trusted Online Pharmacy</h2>
            <p className="about-description">
              At <strong>VDr</strong>, we make healthcare
              simple and accessible. With our
              <strong> doorstep delivery service</strong>, you no longer need to
              step out to buy medicines. We provide a wide range of{" "}
              <strong>
                genuine medicines, wellness products, and health essentials
              </strong>
              , ensuring fast and secure delivery to your home.
            </p>

            <div className="about-features">
              <div className="feature-box">
                <h3>🚚 Fast Delivery</h3>
                <p>Get your medicines delivered quickly and hassle-free.</p>
              </div>
              <div className="feature-box">
                <h3>🛒 Easy Ordering</h3>
                <p>
                  Upload prescriptions, place orders, and receive refill
                  reminders.
                </p>
              </div>
              <div className="feature-box">
                <h3>🔒 100% Genuine</h3>
                <p>
                  We ensure only verified and high-quality medicines reach you.
                </p>
              </div>
            </div>

            <p className="about-tagline">
              Your health is our priority! Shop now for a{" "}
              <strong>safe, affordable, and convenient</strong> pharmacy
              experience.
            </p>
            <a href="[Your Store Link]" className="shop-now-btn">
              Shop Now
            </a>
          </div>
          <VerticalScrollingCardsContainer />
        </>
      </div>
    </div>
  );
}
