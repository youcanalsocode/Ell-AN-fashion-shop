import React from "react";
import "../assets/style/HeroSection.css";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Elle&an</h1>
        <p>Discover your fusion of style</p>
        <a href="/shop" className="shop-now-btn">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
