import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import { TfiClose } from "react-icons/tfi";
import { PiUserCircleLight } from "react-icons/pi";
import cart from "../../svg/cart.svg";
import logo from "../../logo/The_Realhit_Store_Logo_L.png";
import "./Navbar.css";
import "animate.css";
import { NavLink } from "react-router-dom";
import { CartContex, LoginContex } from "../../contexts/Context";
import UseAvatar from "./UseAvatar";
import { logoutUser } from "../../api/RefreshToken";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const context = useContext(CartContex);
  const {
    userDetails,
    setuserDetails,
    setFormState,
    setTokenlocal,
    setUserType,
    userType,
    Tokenlocal,
  } = useContext(LoginContex);

  const logouthandlerbtn = () => {
    logoutUser();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("usertype");
    setuserDetails("");
    setTokenlocal("");
    setUserType("");
  };

  const newname = userDetails ? userDetails?.name?.charAt(0) : "";

  useEffect(() => {}, [userDetails, Tokenlocal]);

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
              <NavLink to="/">
                <IoCloseOutline
                  className="text-white fs-3 mx-3 "
                  onClick={() => setOpen(false)}
                />
              </NavLink>
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
                      <NavLink
                        to="/"
                        className="text-decoration-none link-light"
                      >
                        <li className="list-list-group-item py-2">Home</li>
                      </NavLink>

                      <NavLink
                        to="/colleaction/tshirt"
                        className="text-decoration-none link-light"
                      >
                        <li className="list-list-group-item py-2">T-shirts</li>
                      </NavLink>
                      <NavLink
                        to="/colleaction/oversized-t-shirt"
                        className="text-decoration-none link-light"
                      >
                        <li className="list-list-group-item py-2">
                          oversized t-shirts
                        </li>
                      </NavLink>

                      <NavLink
                        to="/colleaction/hoodies"
                        className="text-decoration-none link-light"
                      >
                        <li className="list-list-group-item py-2">hoodies</li>
                      </NavLink>

                      <NavLink
                        to="/colleaction/sweatshirts"
                        className="text-decoration-none link-light"
                      >
                        <li className="list-list-group-item py-2">
                          sweatshirts
                        </li>
                      </NavLink>
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

              <NavLink to="/">
                <img
                  src={logo}
                  width={225}
                  height={38}
                  alt="logo"
                  className="logo_img"
                />
              </NavLink>
              <div className="d-flex align-items-center gap-2">
                <NavLink to="/">
                  <CiSearch
                    className="text-white fs-3 animation"
                    onClick={() => setOpen(true)}
                  />
                </NavLink>
                <NavLink to="/cart">
                  <div className="">
                    <img
                      src={cart}
                      width={45}
                      height={45}
                      alt="cart"
                      className="animation position-relative d-block"
                    />
                    {context?.AddtoCart.length > 0 && (
                      <p
                        className="badge badge-pill bg-danger position-absolute"
                        style={{ top: "27px", right: "79px" }}
                      >
                        {context?.AddtoCart.length}
                      </p>
                    )}
                  </div>
                </NavLink>

                <div className="nav-item dropdown">
                  {Tokenlocal ? (
                    <div
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      // className="border-0  bg-success fs-bold rounded-5 d-flex justify-content-center align-items-center text-uppercase "
                      // style={{ padding: "7px 14px", fontSize: "16px" }}
                    >
                      {/* {newname[0]} */}
                      <UseAvatar name={newname} />
                    </div>
                  ) : (
                    <PiUserCircleLight
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="text-white fs-2 nav-link dropdown-toggle"
                    />
                  )}

                  {Tokenlocal ? (
                    <ul className="dropdown-menu dropdown-menu-end mt-2">
                      {userDetails.usertype === "admin" ? (
                        <li>
                          <NavLink
                            to="/admin-profile"
                            className="dropdown-item bg-white text-black"
                            type="button"
                          >
                            Admin Profile
                          </NavLink>
                        </li>
                      ) : (
                        <li>
                          <NavLink
                            to="/user-profile"
                            className="dropdown-item bg-white text-black"
                            type="button"
                          >
                            User Profile
                          </NavLink>
                        </li>
                      )}

                      <li>
                        <NavLink
                          to="/register"
                          className="dropdown-item bg-white text-black"
                          type="button"
                        >
                          Order Details
                        </NavLink>
                      </li>
                      <div className="dropdown-divider"></div>
                      <li>
                        <NavLink
                          to="/"
                          className="dropdown-item bg-white text-black "
                          type="button"
                          onClick={() => logouthandlerbtn()}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  ) : (
                    <ul className="dropdown-menu dropdown-menu-end mt-2">
                      <li>
                        <NavLink
                          to="/login"
                          className="dropdown-item bg-white text-black"
                          type="button"
                          onClick={() => setFormState("login")}
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/register"
                          className="dropdown-item bg-white text-black"
                          type="button"
                          onClick={() => setFormState("register")}
                        >
                          Sign up
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
