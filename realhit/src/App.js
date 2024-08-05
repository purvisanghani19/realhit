import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/login" element={<Cart />}></Route> */}
        <Route path="/register" element={<RegisterModel />}></Route>
        <Route path="/view-product" element={<ViewProductDetails />}></Route>
        <Route path="/colleaction/tshirt" element={<Tshirts />}></Route>
        <Route path="/colleaction/hoodies" element={<Hoddies />}></Route>
        <Route
          path="/colleaction/sweatshirts"
          element={<Sweatshirts />}
        ></Route>
        <Route
          path="colleaction/oversized-t-shirt"
          element={<OversizeTshirt />}
        ></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
