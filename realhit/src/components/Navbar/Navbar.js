import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import { TfiClose } from "react-icons/tfi";
import cart from "../../svg/cart.svg";
import logo from "../../logo/The_Realhit_Store_Logo_L.png";
import "./Navbar.css";
import "animate.css";
import { GoCheck } from "react-icons/go";
// import tshirt6 from "../img/tshirt_colleaction/6.jpg";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar bg-black py-sm-4 px-sm-4 px-1  ">
        <div className="container-fluid text-white">
          {open ? (
            <div className="w-100 d-flex justify-content-center align-items-center fade_in_input animate__animated animate__fadeInDown animate__faster">
              <input
                type="email"
                className="form-control border-white  w-50 sm-w-100 p-2 bg-transparent rounded-0 border-2 text-white"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <a href="#">
                <IoCloseOutline
                  className="text-white fs-3 mx-3 "
                  onClick={() => setOpen(false)}
                />
              </a>
            </div>
          ) : (
            <>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <CiMenuBurger className="text-white fs-3 animation " />
              </a>

              {/* -----------------------------sidebar------------------------ */}
              <div
                className="offcanvas offcanvas-start bg-black text-white "
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="py-5 px-4">
                  {/* <button
                    type="button"
                    className="btn-close text-reset "
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button> */}
                  <a
                    href="#"
                    type="button"
                    className="link-light"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <TfiClose className="fs-4 custom-close-icon " />
                  </a>
                </div>
                <div className="offcanvas-body py-3 px-4">
                  <div>
                    <ul className="text-uppercase list-unstyled fs-5 ">
                      <a href="# " className="text-decoration-none link-light">
                        <li className="list-list-group-item py-2">Home</li>
                      </a>
                      <a href="# " className="text-decoration-none link-light">
                        <li className="list-list-group-item py-2">T-shirts</li>
                      </a>
                      <a href="# " className="text-decoration-none link-light">
                        <li className="list-list-group-item py-2">
                          oversized t-shirts
                        </li>
                      </a>
                      <a href="# " className="text-decoration-none link-light">
                        <li className="list-list-group-item py-2">hoodies</li>
                      </a>
                      <a href="# " className="text-decoration-none link-light">
                        <li className="list-list-group-item py-2">
                          sweatshirts
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>

                <div className="offcanvas-footer py-3 px-4">
                  <span>
                    <SiInstagram className="fs-5 mx-2" />
                  </span>
                  <span>
                    <GrYoutube className="fs-4 mx-2" />
                  </span>
                </div>
              </div>

              <a href="/">
                <img
                  src={logo}
                  width={225}
                  height={38}
                  alt="logo"
                  className="logo_img"
                />
              </a>
              <div className="d-flex align-items-center gap-2">
                <a href="#">
                  <CiSearch
                    className="text-white fs-3 animation"
                    onClick={() => setOpen(true)}
                  />
                </a>
                <a href="/cart">
                  <img
                    src={cart}
                    width={45}
                    height={45}
                    alt="cart"
                    className="animation"
                  />
                </a>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* <div className="position-absolute w-25 custom_hight end-0 z-1  ">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          Toggle top offcanvas
        </button>

        <div
          className="offcanvas offcanvas-top position-absolute top-0 h-auto rounded-bottom-4 bg-black text-white"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header p-4">
            <span id="offcanvasTopLabel">
              <GoCheck /> Item added to your cart
            </span>
            <button
              type="button"
              className="btn-close btn-close-white "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-4">
            <div className="d-flex ">
              <img
                // src={tshirt6}
                alt="add to cart"
                className="img-fluid w-25 h-25 rounded-3"
              />
              <div className="text-white px-3">
                <h6>Aaj Chalegi Daaru Hoodie</h6>
                <h6>color:white</h6>
                <h6>size:s</h6>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <button
                style={{ letterSpacing: "1px" }}
                className="border border-light w-100 mt-3 py-2  bg-transparent text-white"
              >
                view cart(2)
              </button>
              <button
                style={{
                  letterSpacing: "1px",
                  backgroundColor: "#EBF4F6",
                  color: "#0000FF",
                }}
                className="border-0 w-100 mt-2 py-2  "
              >
                checkout
              </button>
              <a href="#" className="text-white mt-2">
                <span>contiune shopping</span>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
