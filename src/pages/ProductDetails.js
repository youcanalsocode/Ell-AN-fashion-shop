import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/productService"; // Use service to fetch product details
import "../assets/style/ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProductDetails(id);
      setProduct(response.data);
    };
    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>Material: {product.material}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
