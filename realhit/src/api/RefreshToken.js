import { jwtDecode } from "jwt-decode";
// import BaseApi from "./BaseApi";

// // Function to refresh the access token
// const refreshAccessToken = async () => {
//   try {
//     const response = await BaseApi.post("/user/refresh");
//     const newAccessToken = response.data.accessToken;
//     const decodedToken = jwtDecode(newAccessToken);
//     isTokenExpired(decodedToken.exp);

//     BaseApi.defaults.headers.common[
//       "Authorization"
//     ] = `Bearer ${newAccessToken}`;

//     return newAccessToken;
//   } catch (error) {
//     // Handle error, possibly redirect to login page
//     window.location.href = "/login";
//     console.error("Failed to refresh access token:", error);
//     return null;
//   }
// };

// //functior to check token Expiry---------------------------
// let refreshTimeout;
// export const isTokenExpired = (tokenExpiry) => {
//   if (!tokenExpiry) return true;
//   try {
//     const currentTime = Math.floor(Date.now() / 1000);
//     const delay = (tokenExpiry - currentTime - 60) * 1000;
//     if (refreshTimeout) {
//       clearTimeout(refreshTimeout);
//     }

//     if (delay > 0) {
//       refreshTimeout = setTimeout(async () => {
//         await refreshAccessToken();
//       }, delay);
//     }
//   } catch (error) {
//     console.error("Error decoding token:", error);
//     return true;
//   }
// };

// // Axios request interceptor
// BaseApi.interceptors.request.use(
//   (config) => {
//     const token = BaseApi.defaults.headers.common["Authorization"];
//     if (token) {
//       config.headers["Authorization"] = token;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Axios response interceptor to handle 401 errors (unauthorized)
// BaseApi.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newAccessToken = await refreshAccessToken();
//       if (newAccessToken) {
//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//         return BaseApi(originalRequest); // Retry the original request with the new token
//       } else {
//         await logoutUser(); // Clear cookies, state, etc.
//         window.location.href = "/login"; // Redirect to login page
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export const logoutUser = async () => {
//   try {
//     await BaseApi.post("/user/logout"); // Backend API to clear cookies
//     BaseApi.defaults.headers.common["Authorization"] = null;
//     clearTimeout(refreshTimeout); // Clear the token refresh timeout
//     // Clear any stored state or tokens in the frontend
//     // Redirect to login
//     window.location.href = "/login";
//   } catch (error) {
//     console.error("Failed to log out:", error);
//   }
// };

// export default BaseApi;
