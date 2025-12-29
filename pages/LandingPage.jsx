import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-hero">
        <div className="overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Performance Car"
          className="landing-image"
        />
        <div className="hero-content">
          <h1 className="landing-title">AUTOHUB</h1>
          <p className="landing-subtitle">DEFINING AUTOMOTIVE LUXURY</p>
          <button className="get-started-btn" onClick={() => navigate("/products")}>
            ENTER THE SHOWROOM
          </button>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;