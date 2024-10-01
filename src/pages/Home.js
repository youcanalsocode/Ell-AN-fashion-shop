import React from "react";
import HeroSection from "../components/HeroSection";
import "../assets/style/Home.css";
const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <section className="featured-collections">
        <h2>Latest Collections</h2>
        {/* You can dynamically display products or collections here */}
      </section>
    </div>
  );
};

export default Home;
