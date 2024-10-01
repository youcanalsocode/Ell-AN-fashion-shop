import axios from "axios";

const API_URL = "https://api.example.com/auth"; // Replace with actual API

export const signIn = async (email, password) => {
  return axios.post(`${API_URL}/signin`, { email, password });
};

export const signUp = async (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};
