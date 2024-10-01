import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { fetchProducts } from "../services/productService"; // Use the service to fetch products
import "../assets/style/Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts();
      setProducts(response.data);
      setFilteredProducts(response.data);

      // Generate categories dynamically
      const allCategories = [...new Set(response.data.map((p) => p.category))];
      setCategories(allCategories);
    };
    loadProducts();
  }, []);

  const handleFilterChange = (category) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  return (
    <div className="shop">
      <Filters categories={categories} onFilterChange={handleFilterChange} />
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
