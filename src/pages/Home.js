import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/style/Home.css";

// API base URL
const API_BASE_URL = "http://localhost:5000/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data); // Assumes products are returned as an array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      {/* Hero Carousel */}
      <Carousel className="hero-carousel">
        {products.slice(0, 3).map((product, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={product.image} // Use product image
              alt={product.name}
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Featured Collections Section */}
      <section className="featured-collections">
        <h2>Latest Collections</h2>
        <div className="collections-grid">
          {products.slice(3, 6).map((product, index) => (
            <div className="collection-item" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Sections */}
      <section className="shop-by-category">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {products.slice(6, 10).map((product) => (
            <Link to={`/product/${product.id}`} className="category-item" key={product.id}>
              <img src={product.image} alt={product.category} style={{ maxHeight: "300px", objectFit: "cover" }} />
              <p>{product.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
