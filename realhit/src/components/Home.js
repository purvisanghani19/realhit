import React from "react";
import banner from "../img/main_banner.jpg";
import Gifbanner from "../img/banner/Main_Banner_GIF.jpg";
import SecoundGifbanner from "../img/banner/secound_GIF.jpg";
import thirdGifbanner from "../img/banner/third_GIF.jpg";
import fourthGifbanner from "../img/banner/fourth_GIF.jpg";
import hoodies from "../img/collection_img/Hoodie_Collection.jpg";
import mug from "../img/collection_img/mug_collection.jpg";
import oversize from "../img/collection_img/oversized_collection.jpg";
import totebag from "../img/collection_img/totebag_collation.jpg";
import right from "../svg/right.svg";
import { RiShare2Line } from "react-icons/ri";
import addcartImg from "../img/12.jpg";
import tshirt1 from "../img/tshirt_colleaction/1.jpg";
import tshirt2 from "../img/tshirt_colleaction/2.jpg";
import tshirt3 from "../img/tshirt_colleaction/3.jpg";
import tshirt4 from "../img/tshirt_colleaction/4.jpg";
import tshirt5 from "../img/tshirt_colleaction/5.jpg";
import tshirt6 from "../img/tshirt_colleaction/6.jpg";
import tshirt7 from "../img/tshirt_colleaction/7.jpg";
import tshirt8 from "../img/tshirt_colleaction/8.jpg";
import tshirt9 from "../img/tshirt_colleaction/9.jpg";
import tshirt10 from "../img/tshirt_colleaction/10.jpg";

import "./home.css";
const Home = () => {
  return (
    <>
      {/*------------------banner start------------ */}
      <div className="banner-container   position-relative">
        <img src={banner} alt="bg-img" className="img-fluid banner-image" />
      </div>
      {/*------------------banner end------------ */}

      {/*------------------t-shirt container start------------ */}
      <div className="container py-4 py-sm-5 ">
        <div className="row g-2 g-md-3 row-cols-2 row-cols-lg-4">
          <div className="col">
            <div className="card_media">
              <div className="card_img">
                <img src={hoodies} alt="hoodies" className="w-100" />
              </div>
              <span className="text-uppercase fw-bold py-2 d-block">
                hoodies
                <img
                  src={right}
                  alt="right arrow"
                  width={16}
                  className="mx-1"
                />
              </span>
            </div>
          </div>
          <div className="col">
            <div className="card_media">
              <div className="card_img ">
                <img src={oversize} alt="hoodies" className="w-100" />
              </div>
              <span className="text-uppercase fw-bold py-2 d-block">
                oversize t-shirt
                <img
                  src={right}
                  alt="right arrow"
                  width={16}
                  className="mx-1"
                />
              </span>
            </div>
          </div>
          <div className="col">
            <div className="card_media">
              <div className="card_img d-flex ">
                <img src={mug} alt="hoodies" className="w-100" />
              </div>
              <span className="text-uppercase fw-bold py-2 d-block">
                mug
                <img
                  src={right}
                  alt="right arrow"
                  width={16}
                  className="mx-1"
                />
              </span>
            </div>
          </div>
          <div className="col">
            <div className="card_media">
              <div className="card_img d-flex">
                <img src={totebag} alt="hoodies" className="w-100" />
              </div>
              <span className="text-uppercase fw-bold py-2 d-block">
                tote bag
                <img
                  src={right}
                  alt="right arrow"
                  width={16}
                  className="mx-1"
                />
              </span>
            </div>
          </div>
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
              src={addcartImg}
              alt="person in t-shirt"
              className=" rounded-3 img-fluid cart-child-image "
            />
          </div>
          <div>
            <span className="text-uppercase fw-semibold realhit py-2 d-block">
              RealHit
            </span>
            <h4 className="fw-bold fs-1 py-2">Okaiii Okaiii Tshirt</h4>
            <div className="gap-4 d-flex ">
              <span className="text-decoration-line-through">Rs.1299.00</span>
              <span className="fw-bold">Rs.799.00</span>
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
                <button className="btn px-3  px-sm-4  border-black rounded-0 bg-black text-white text-uppercase ">
                  black
                </button>
                <button className="btn px-3  px-sm-4  border-black rounded-0  text-uppercase">
                  navy blue
                </button>
                <button className="btn px-3  px-sm-4  border-black rounded-0  text-uppercase">
                  red
                </button>
              </div>
            </div>
            <div className="my-3">
              <span className="d-block font-sans ">size</span>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn px-4  fs-semibold  border-black rounded-0 bg-black text-white text-uppercase">
                  s
                </button>
                <button className="btn px-4  fs-semibold border-black rounded-0  text-uppercase">
                  m
                </button>
                <button className="btn px-4  fs-semibold border-black rounded-0  text-uppercase">
                  l
                </button>
                <button className="btn px-4  fs-semibold border-black rounded-0  text-uppercase">
                  xl
                </button>
                <button className="btn px-4  fs-semibold  border-black rounded-0  text-uppercase">
                  xxl
                </button>
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
              <button className="btn w-100 py-2 pt-2 pb-2 my-1  border-black rounded-0 text-black ">
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
              <a href="#" className="text-black text link-underline-light">
                <span className="px-sm-4">
                  view full details
                  <img
                    src={right}
                    alt="right arrow"
                    width={12}
                    className="mx-1"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*------------------ add-to-cart end----------------- */}

      {/*------------------- Main_Banner_GIF start----------------------- */}
      <div className="container-fluid parent-container m-0 p-0 d-flex justify-content-center align-items-center">
        <img src={Gifbanner} alt="Responsive Image" className="child-image" />
      </div>
      {/*------------------- Main_Banner_GIF end----------------------- */}

      {/*------------------t-shirt container start------------ */}
      <div className="container py-4 ">
        <div className="row row-cols-2 row-cols-lg-5 gx-2 gy-4 gx-lg-3 gy-lg-5 px-lg-4 pb-5">
          <div className="col">
            <div className="img-container">
              <img
                src={tshirt1}
                alt="blue tshirt"
                className="img-fluid rounded-1"
              />
              <span className="badge border rounded-5 text-black bg-white position-absolute bottom-0 start-0">
                Sale
              </span>
            </div>
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through ">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src={tshirt2}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover "
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt3}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt4}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt5}
              alt="blue tshirt "
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt6}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt7}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt8}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt9}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt10}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />{" "}
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------t-shirt container end------------ */}

      {/*------------------- secound_GIF start----------------------- */}
      <div className="container-fluid parent-container m-0 p-0 d-flex justify-content-center align-items-center">
        <img
          src={SecoundGifbanner}
          alt="Responsive Image"
          className="child-image"
        />
      </div>
      {/*------------------- secound_GIF end----------------------- */}

      {/*------------------secound t-shirt container start------------ */}
      <div className="container-lg py-4 ">
        <div className="row row-cols-2 row-cols-lg-4 gx-2 gy-4 gx-lg-3 gy-lg-5 px-lg-4 pb-5">
          <div className="col">
            <div className="img-container">
              <img
                src={tshirt1}
                alt="blue tshirt"
                className="img-fluid rounded-1"
              />
              <span className="badge border rounded-5 text-black bg-white position-absolute bottom-0 start-0">
                Sale
              </span>
            </div>
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through ">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src={tshirt2}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover "
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt3}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt4}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt5}
              alt="blue tshirt "
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt6}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt7}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt8}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------secound t-shirt container end------------ */}

      {/*------------------- third_GIF start----------------------- */}
      <div className="container-fluid parent-container m-0 p-0 d-flex justify-content-center align-items-center">
        <img
          src={thirdGifbanner}
          alt="Responsive Image"
          className="child-image"
        />
      </div>
      {/*------------------- third_GIF end----------------------- */}

      {/*------------------Hoddie container start------------ */}
      <div className="container py-5">
        <div className="row row-cols-2 row-cols-lg-5 gx-2 gy-4 gx-lg-3 gy-lg-5 px-lg-4 pb-5">
          <div className="col">
            <div className="img-container">
              <img
                src={tshirt1}
                alt="blue tshirt"
                className="img-fluid rounded-1"
              />
              <span className="badge border rounded-5 text-black bg-white position-absolute bottom-0 start-0">
                Sale
              </span>
            </div>
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through ">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src={tshirt2}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover "
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt3}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt4}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt5}
              alt="blue tshirt "
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt6}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt7}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt8}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt9}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt10}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />{" "}
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <span role="button" className="fw-semibold btn_bg ">
            View all
          </span>
        </div>
      </div>
      {/*------------------Hoddie container end------------ */}

      {/*------------------- fourth_GIF start----------------------- */}
      <div className="container-fluid parent-container m-0 p-0 d-flex justify-content-center align-items-center">
        <img
          src={fourthGifbanner}
          alt="Responsive Image"
          className="child-image"
        />
      </div>
      {/*------------------- fourth_GIF end----------------------- */}

      {/*------------------sweatshirts container start------------ */}
      <div className="container-lg py-4">
        <div className="row row-cols-2 row-cols-lg-4 gx-2 gy-4 gx-lg-3 gy-lg-5 px-lg-4 pb-5">
          <div className="col">
            <div className="img-container">
              <img
                src={tshirt1}
                alt="blue tshirt"
                className="img-fluid rounded-1"
              />
              <span className="badge border rounded-5 text-black bg-white position-absolute bottom-0 start-0">
                Sale
              </span>
            </div>
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through ">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src={tshirt2}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover "
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt3}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt4}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt5}
              alt="blue tshirt "
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt6}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt7}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={tshirt8}
              alt="blue tshirt"
              className="img-fluid rounded-2 object-fit-cover"
            />
            <div>
              <p className="fw-semibold m-0 tshirt_font py-2">
                Nightmares Skull Oversized Tshirt
              </p>
              <div className="d-flex gap-3">
                <span className="text-decoration-line-through">
                  Rs. 1,400.00
                </span>
                <span className="fw-bold">Rs. 1,199.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------sweatshirts container end------------ */}
    </>
  );
};

export default Home;
