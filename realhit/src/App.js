import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import ViewProductDetails from "./components/Containers/ViewProductDetails";
import Tshirts from "./components/Pages/Colleaction/Tshirts";
import PageNotFound from "./components/Pages/PageNotFound";
import Hoddies from "./components/Pages/Colleaction/Hoddies";
import Sweatshirts from "./components/Pages/Colleaction/Sweatshirts";
import OversizeTshirt from "./components/Pages/Colleaction/OversizeTshirt";
import RegisterModel from "../src/components/Auth/RegisterModel";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminRoutes from "./Routes/AdminRoutes";
import UserRoutes from "./Routes/UserRoutes";
import UserProfile from "./components/User/UserProfile";
import NotAuthorized from "./components/Pages/NotAuthorized";
import { LoginContex } from "./contexts/Context";
import { useContext } from "react";
import Checkout from "./components/Payment/Checkout.js";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/gp";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/register" element={<RegisterModel />}></Route>
        <Route path="/login" element={<RegisterModel />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/view-product" element={<ViewProductDetails />}></Route>
        <Route path="/colleaction/tshirt" element={<Tshirts />}></Route>
        <Route path="/colleaction/hoodies" element={<Hoddies />}></Route>
        <Route
          path="/colleaction/sweatshirts"
          element={<Sweatshirts />}
        ></Route>
        <Route
          path="/colleaction/oversized-t-shirt"
          element={<OversizeTshirt />}
        ></Route>

        <Route element={<AdminRoutes />}>
          <Route path="/admin-profile" element={<AdminProfile />}></Route>
        </Route>

        <Route path="/not-authorized" element={<NotAuthorized />}></Route>

        <Route element={<UserRoutes />}>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="/gp" element={<Checkout />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {!hideNavbarAndFooter && <Footer />}

      <ToastContainer />
    </>
  );
}

export default App;
