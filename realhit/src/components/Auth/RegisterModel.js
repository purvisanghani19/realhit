import React, { useContext, useState } from "react";
import regImg from "../../img/AuthImg/register.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { LoginContex } from "../../contexts/Context";
import { toast } from "react-toastify";
import "./register.css";

const RegisterModel = () => {
  const [open, setOpen] = useState(false);
  const authContex = useContext(LoginContex);

  const [Register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...Register, [name]: value });
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
        authContex.setuserDetails(data.data.result);
      }
    } catch (error) {
      console.log("error.response.data", error.response.data);
      if (error.response.status === 409) {
        toast.error(error.response.data);
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
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModel;
