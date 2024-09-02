import axios from "axios";

const BaseApi = axios.create({
  // baseURL: "http://localhost:5500",
  baseURL: "https://realhit-backend.onrender.com",
  withCredentials: true, // This allows cookies to be sent with requests
});

const imgApi = "https://realhit-backend.onrender.com";
// const imgApi = "http://localhost:5500";

export { BaseApi, imgApi };
