import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500",
  withCredentials: true, // This allows cookies to be sent with requests
});

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const response = await api.post("/user/refresh");
    const newAccessToken = response.data.accessToken;
    api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
    return newAccessToken;
  } catch (error) {
    // Handle error, possibly redirect to login page

    console.error("Failed to refresh access token:", error);
    return null;
  }
};

// Axios request interceptor
api.interceptors.request.use(
  (config) => {
    const token = api.defaults.headers.common["Authorization"];
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios response interceptor to handle 401 errors (unauthorized)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest); // Retry the original request with the new token
      }
    }

    return Promise.reject(error);
  }
);

export default api;
