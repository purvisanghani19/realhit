import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ViewProductDetails from "./components/Containers/ViewProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/view-product" element={<ViewProductDetails />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
