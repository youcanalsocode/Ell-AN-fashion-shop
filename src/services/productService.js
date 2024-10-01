import axios from "axios";

const API_BASE_URL = "http://localhost:5000";
export const fetchProducts = async () => {
  return axios.get(`${API_BASE_URL}`);
};

export const fetchProductDetails = async (productId) => {
  return axios.get(`${API_BASE_URL}/${productId}`);
};
