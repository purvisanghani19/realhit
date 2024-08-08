import React, { useContext, useEffect, useState } from "react";
import regImg from "../../img/AuthImg/register.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { LoginContex } from "../../contexts/Context";
import { toast } from "react-toastify";
import "./register.css";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/RefreshToken";
const RegisterModel = () => {
  const [open, setOpen] = useState(false);
  const {
    setuserDetails,
    formState,
    setFormState,
    setTokenlocal,
    setUserType,
  } = useContext(LoginContex);
  const navigate = useNavigate();

  const [Register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...Register, [name]: value });
  };
  const handleLoginchange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...Login, [name]: value });
  };

  const GetRegister = async (e) => {
    e.preventDefault();
    if (!Register.name) {
      return toast.error("name required");
    } else if (!Register.email) {
      return toast.error("email required");
    } else if (!Register.password) {
      return toast.error("password required");
    }

    try {
      const data = await axios.post(
        "http://localhost:5500/user/register",
        Register
      );
      console.log("data---", data);
      if (data.status === 201) {
        toast.success(data.data.message);
        setuserDetails(data.data.result);
        // navigate("/");
      }
    } catch (error) {
      console.log("error.response.data", error);
      if (error.response.status === 409) {
        toast.error(error.response.data);
      }
    }
  };

  const GetLogin = async (e) => {
    e.preventDefault();
    if (!Login.email) {
      return toast.error("email required");
    } else if (!Login.password) {
      return toast.error("password required");
    }

    try {
      const data = await api.post("/user/login", Login);
      console.log("data-----------------", data);
      const accessToken = data.data.token;
      console.log("accessToken-----", accessToken);
      if (data.status === 200) {
        toast.success(data.data.message);
        setuserDetails(data.data.user.name);
        setUserType(data.data.user.usertype);
        setTokenlocal(accessToken);
        navigate("/");
        setLogin(null);
      }
    } catch (error) {
      console.log("error.response.data", error.response.status);
      if (error.response.status === 401) {
        toast.error(error.response.data.result);
      }
    }
  };

  return (
    <>
      <div className="py-2">
        <div
          className="container d-flex flex-column flex-sm-row align-items-center my-5  rounded-1 border-0"
          style={{ backgroundColor: "#EEF7FF" }}
        >
          <div className="bg-white d-none d-lg-flex my-4 py-5 mx-4 p-0">
            <img
              src={regImg}
              alt="regimg"
              className="my-5 p-0"
              // style={{ width: "450px", height: "400px" }}
            />
          </div>

          <div className="w-100 px-2 py-4">
            <div className="py-4">
              <nav className="d-flex justify-content-center text-black gap-lg-2 gap-5">
                <NavLink
                  className={({ isActive }) =>
                    `w-25 d-flex justify-content-center ${
                      isActive ? "active" : ""
                    } no-underline`
                  }
                  to="/register"
                >
                  <h4 onClick={() => setFormState("register")}>Register</h4>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `w-25 d-flex justify-content-center ${
                      isActive ? "active" : ""
                    } no-underline`
                  }
                  to="/login"
                >
                  <h4 onClick={() => setFormState("login")}>Login</h4>
                </NavLink>
              </nav>

              {/* <hr className="w-50 m-0" style={{ color: "#eb5b00" }} /> */}
            </div>

            {formState === "register" ? (
              <>
                <h3 className="fw-semibold py-3">Sign up or create account.</h3>
                <form onSubmit={GetRegister}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control  border-0 shadow-none p-3 bg-white text-black "
                      aria-describedby="emailHelp"
                      placeholder=" Name"
                      autoComplete="username"
                      onChange={handlechange}
                      name="name"
                      value={Register.name}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control border-0 shadow-none p-3 "
                      aria-describedby="emailHelp"
                      placeholder=" Email Address"
                      autoComplete="email"
                      name="email"
                      onChange={handlechange}
                      value={Register.email}
                    />
                  </div>
                  <div className="mb-3 position-relative">
                    <input
                      type={open ? "text" : "password"}
                      className="form-control border-0 shadow-none p-3 "
                      placeholder=" Password"
                      autoComplete="current-password"
                      name="password"
                      value={Register.password}
                      onChange={handlechange}
                    />
                    <div
                      className="position-absolute end-0 mx-3"
                      style={{ top: "20px" }}
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <FaEyeSlash className="fs-5 mb-5" />
                      ) : (
                        <FaEye className="fs-5 mb-5" />
                      )}
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-end">
                    <label className="form-check-label">Forgot password?</label>
                  </div>
                  <button type="submit" className="submitbtn  w-50">
                    Create a Account
                  </button>
                </form>
              </>
            ) : (
              <>
                <h3 className="fw-semibold py-3">
                  Welcome back Please Login to your Account.
                </h3>
                <form onSubmit={GetLogin}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control border-0 shadow-none p-3 "
                      aria-describedby="emailHelp"
                      placeholder=" Email Address"
                      autoComplete="email"
                      name="email"
                      onChange={handleLoginchange}
                      value={Login.email}
                    />
                  </div>
                  <div className="mb-3 position-relative">
                    <input
                      type={open ? "text" : "password"}
                      className="form-control border-0 shadow-none p-3 "
                      placeholder=" Password"
                      autoComplete="current-password"
                      name="password"
                      value={Login.password}
                      onChange={handleLoginchange}
                    />
                    <div
                      className="position-absolute end-0 mx-3"
                      style={{ top: "20px" }}
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <FaEyeSlash className="fs-5 mb-5" />
                      ) : (
                        <FaEye className="fs-5 mb-5" />
                      )}
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-end">
                    <label className="form-check-label">Forgot password?</label>
                  </div>
                  <button type="submit" className="submitbtn  w-50">
                    Create a Account
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModel;
