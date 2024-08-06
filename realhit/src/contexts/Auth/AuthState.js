import React, { useEffect, useState } from "react";
import { LoginContex } from "../Context";
import { getUserdetails, setUserdetails } from "../../utils/localStorageHelper";
import { useLocation } from "react-router-dom";

const AuthState = (props) => {
  const [userDetails, setuserDetails] = useState(() => getUserdetails());

  useEffect(() => {
    if (userDetails) {
      setUserdetails(userDetails);
    }
  }, [userDetails]);

  //for register & login form to render------
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [formState, setFormState] = useState(
    isLoginPage ? "login" : "register"
  );
  //for register & login form to render end------

  return (
    <>
      <LoginContex.Provider
        value={{ setuserDetails, userDetails, formState, setFormState }}
      >
        {props.children}
      </LoginContex.Provider>
    </>
  );
};

export default AuthState;
