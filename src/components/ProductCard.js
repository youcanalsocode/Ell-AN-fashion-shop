import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`} className="details-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
