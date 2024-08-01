import React, { useEffect, useState } from "react";
import banner from "../../img/main_banner.jpg";
import Gifbanner from "../../img/banner/Main_Banner_GIF.jpg";
import SecoundGifbanner from "../../img/banner/secound_GIF.jpg";
import thirdGifbanner from "../../img/banner/third_GIF.jpg";
import fourthGifbanner from "../../img/banner/fourth_GIF.jpg";
// import hoodies from "../../img/collection_img/Hoodie_Collection.jpg";
// import mug from "../../img/collection_img/mug_collection.jpg";
// import oversize from "../../img/collection_img/oversized_collection.jpg";
// import totebag from "../../img/collection_img/totebag_collation.jpg";
import imgs from "../../img/collection_img/Imgcontainer";
import right from "../../svg/right.svg";
import { RiShare2Line } from "react-icons/ri";
import addcartImg from "../../img/12.jpg";

import Container5 from "../Containers/Container5";
import Container4 from "../Containers/Container4";
import Banner from "../Containers/Banner";
import "./home.css";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);
  const [latestPro, setLatestPro] = useState({});

  console.log("latestPro---", latestPro);

  const getdata = async () => {
    try {
      const data = await axios.get("http://localhost:5500/product/get");
      // console.log("data", data);
      if (data.status == 200) {
        setProduct(data.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    if (Product.length > 1) {
      setLatestPro(Product[1]);
    }
  }, [Product]);

  const Viewproduct = (item) => {
    navigate("/view-product", { state: { product: item } });
  };

  return (
    <>
      <main>
        {/*------------------banner start------------ */}
        <div className="banner-container   position-relative">
          <img src={banner} alt="bg-img" className="img-fluid banner-image" />
        </div>
        {/*------------------banner end------------ */}

        {/*------------------t-shirt container start------------ */}
        <div className="container py-4 py-sm-5 ">
          <div className="row g-2 g-md-3 row-cols-2 row-cols-lg-4">
            {imgs?.map((item, index) => (
              <div role="button" key={index} className="col">
                <div className="card_media">
                  <div className="card_img">
                    <img src={item.img} alt="hoodies" className="w-100" />
                  </div>
                  <span className="text-uppercase fw-bold py-2 d-block">
                    {item.name}
                    <img
                      src={right}
                      alt="right arrow"
                      width={16}
                      className="mx-1"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*------------------t-shirt container end------------ */}

        <div className="container-fluid bg-black text-center text-white text-uppercase fw-semibold fs-2 py-4 ">
          be real,talk real
        </div>

        {/*------------------add-to-cart start----------------- */}
        <div className="container-lg py-4">
          <div className="row row-cols-1 row-cols-md-2 my-3">
            <div className="cart-parent-container">
              <img
                src={`http://localhost:5500${latestPro.Img}`}
                alt="person in t-shirt"
                className=" rounded-3 img-fluid cart-child-image "
              />
            </div>
            <div>
              <span className="text-uppercase fw-semibold realhit py-2 d-block">
                RealHit
              </span>
              <h4 className="fw-bold fs-1 py-2">{latestPro.name}</h4>
              <div className="gap-4 d-flex ">
                <span className="text-decoration-line-through">Rs.1299.00</span>
                <span className="fw-bold">Rs.{latestPro.price}.00</span>
                <span className=" badge border rounded-5 border text-black  ">
                  sale
                </span>
              </div>
              <p className="py-2 m-0 font-sans" style={{ fontSize: "14px" }}>
                Tax included.{" "}
                <a href="#" className="text-black ">
                  Shipping
                </a>{" "}
                calculated at checkout.
              </p>

              <div className=" ">
                <span className="d-block font-sans">color</span>
                <div className="d-flex flex-wrap gap-2">
                  {latestPro?.color?.map((item, index) => (
                    <button className="btn px-3  px-sm-4  border-black rounded-0 bg-black text-white text-uppercase ">
                      {item}
                    </button>
                  ))}
                  {/* <button className="btn px-3  px-sm-4  border-black rounded-0  text-uppercase">
                    navy blue
                  </button>
                  <button className="btn px-3  px-sm-4  border-black rounded-0  text-uppercase">
                    red
                  </button> */}
                </div>
              </div>
              <div className="my-3">
                <span className="d-block font-sans ">size</span>
                <div className="d-flex flex-wrap gap-2">
                  {latestPro?.size?.map((item, index) => (
                    <button className="btn px-3  px-sm-4  border-black rounded-0 bg-black text-white text-uppercase ">
                      {item}
                    </button>
                  ))}
                  {/* <button className="btn px-4  fs-semibold border-black rounded-0  text-uppercase">
                    m
                  </button> */}
                </div>
              </div>
              <div className="my-3">
                <span
                  className="d-block font-sans"
                  style={{ fontSize: "15px", color: "black" }}
                >
                  Quantity
                </span>
                <div className="btn py-2 px-2 fs-semibold  border-black rounded-0  text-black text-uppercase gap-4">
                  <span role="button" className="px-3 py-3 ">
                    -
                  </span>
                  <span className="px-3 py-3 ">1</span>
                  <span role="button" className="px-3 py-3">
                    +
                  </span>
                </div>
              </div>

              <div className="d-flex flex-column">
                <button className="btn w-100 py-2 pt-2 pb-2 my-1  border-black rounded-0 text-black">
                  Add to cart
                </button>
                <button className="btn w-100 py-2 pt-2 pb-2 my-1 border-none  rounded-0 text-black shadow p-3 mb-5 bg-white  ">
                  Buy Now
                </button>
              </div>

              <div className="d-flex justify-content-between">
                <a href="#" className="text-black text link-underline-light">
                  <span>
                    share <RiShare2Line />
                  </span>
                </a>
                <div className="text-black text link-underline-light">
                  <span
                    className="px-sm-4"
                    role="button"
                    onClick={() => Viewproduct(latestPro._id)}
                  >
                    view full details
                    <img
                      src={right}
                      alt="right arrow"
                      width={12}
                      className="mx-1"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------ add-to-cart end----------------- */}

        {/*------------------- Main_Banner_GIF start----------------------- */}
        <Banner srcImg={Gifbanner} />
        {/*------------------- Main_Banner_GIF end----------------------- */}

        {/*------------------t-shirt container start------------ */}
        <Container5 data={Product} />
        {/*------------------t-shirt container end------------ */}

        {/*------------------- secound_GIF start----------------------- */}
        <Banner srcImg={SecoundGifbanner} />
        {/*------------------- secound_GIF end----------------------- */}

        {/*------------------secound t-shirt container start------------ */}
        <Container4 />
        {/*------------------secound t-shirt container end------------ */}

        {/*------------------- third_GIF start----------------------- */}
        <Banner srcImg={thirdGifbanner} />
        {/*------------------- third_GIF end----------------------- */}

        {/*------------------Hoddie container start------------ */}
        <Container5 data={Product} />
        {/*------------------Hoddie container end------------ */}

        {/*------------------- fourth_GIF start----------------------- */}
        <Banner srcImg={fourthGifbanner} />
        {/*------------------- fourth_GIF end----------------------- */}

        {/*------------------sweatshirts container start------------ */}
        <Container4 />
        {/*------------------sweatshirts container end------------ */}
      </main>
    </>
  );
};

export default Home;
