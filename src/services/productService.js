import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";
export const fetchProducts = async () => {
  return axios.get(`${API_BASE_URL}/products`);
};

export const fetchProductDetails = async (productId) => {
  return axios.get(`${API_BASE_URL}/products/${productId}`);
};
