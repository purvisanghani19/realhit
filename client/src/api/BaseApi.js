import axios from "axios";

const BaseApi = axios.create({
  // baseURL: "http://localhost:5500",
  baseURL: "https://realhit-backend.onrender.com",
  withCredentials: true, // This allows cookies to be sent with requests
});

export default BaseApi;
