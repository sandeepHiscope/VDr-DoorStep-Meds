import React from "react";
import "./Home.css";
import heroImg from "../../assets/capsules.jpg";
import { Link } from "react-router-dom";
import ScrollingCardsContainer from "../../components/ScrollingCardsContainer/ScrollingCardsContainer";
export default function Home() {

  return (
    <div className="HomepageContent">
      <section className="heroSection">
        <h1 id="heroTitle">Your Health, Our Priority</h1>
        <h2 id="subTitle">Trusted Medicines Delivered to Your Doorstep</h2>
        <div className="searchBox">
          <input type="text" placeholder="Search for medicines..." />
        </div>
        <img src={heroImg} alt="heroImg" id="heroImg" />
      </section>

      <section className="categoriesSection">
        <h2>Popular Categories</h2>
        <div className="categoryGrid">
          <Link to="/products"className="categoryItem">Doctor's Prescribed</Link>
          <Link to="/health-products" className="categoryItem">
            Cold, Fever & Pain Relief
          </Link>
          <Link to="/supplements" className="categoryItem">
            Diabetes & Hypertension
          </Link>
          <Link to="/supplements" className="categoryItem">
            Vitamins & Supplements
          </Link>
          <Link to="/supplements" className="categoryItem">
            Medical Devices
          </Link>
          <Link to="/category/pain-relievers" className="categoryItem">
            Pain Relievers
          </Link>
          <Link to="/category/cold-flu" className="categoryItem">
            Anti oxydents
          </Link>
          <Link to="/category/vitamins" className="categoryItem">
            Vitamins
          </Link>
          <Link to="/category/prescriptions" className="categoryItem">
            Prescriptions
          </Link>
          <Link to="/category/diabetes-care" className="categoryItem">
            Diabetes Care
          </Link>
          <Link to="/category/heart-health" className="categoryItem">
            Heart Health
          </Link>
          <Link to="/category/skin-care" className="categoryItem">
            Skin Care
          </Link>
        </div>
      </section>

      <section className="productsSection">
        <h2>Featured Products</h2>
        <div className="productGrid">
          <ScrollingCardsContainer />
        </div>
      </section>

      <section className="servicesSection">
        <h2>Our Services</h2>
        <div className="serviceGrid">
          <Link to="/services/customer-support" className="serviceItem">
            24/7 Customer Support
          </Link>
          <Link to="/services/delivery" className="serviceItem">
            Fast & Secure Delivery
          </Link>
          <Link to="/services/pharmacy" className="serviceItem">
            Certified Pharmacy
          </Link>
          <Link to="/services/consultation" className="serviceItem">
            Online Consultation
          </Link>
        </div>
      </section>

      <section className="testimonialsSection">
        <h2>What Our Customers Say</h2>
        <div className="testimonialGrid">
          <div className="testimonialItem">
            "Great service and fast delivery!" - John D.
          </div>
          <div className="testimonialItem">
            "The best pharmacy experience online." - Sarah M.
          </div>
          <div className="testimonialItem">
            "Reliable and affordable medicines." - Emily R.
          </div>
        </div>
      </section>

      <section className="contactSection">
        <h2>Contact Us</h2>
        <p>Email: support@sotamedicines.com | Phone: +123 456 7890</p>
      </section>
    </div>
  );
}
