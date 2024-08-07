import React, { useEffect, useState } from "react";
import { LoginContex } from "../Context";
import {
  getUserdetails,
  setUserdetails,
  getToken,
  setToken,
  getUsertype,
  setUsertype,
} from "../../utils/localStorageHelper";
import { useLocation } from "react-router-dom";

const AuthState = (props) => {
  const [userDetails, setuserDetails] = useState(() => getUserdetails());
  const [Tokenlocal, setTokenlocal] = useState(() => getToken());
  const [userType, setUserType] = useState(() => getUsertype());

  useEffect(() => {
    if (userDetails && Tokenlocal) {
      setUserdetails(userDetails);
      setToken(Tokenlocal);
      setUsertype(userType);
    }
  }, [userDetails, Tokenlocal, userType]);

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
        value={{
          setuserDetails,
          userDetails,
          formState,
          setFormState,
          setTokenlocal,
          setUserType,
          userType,
          Tokenlocal,
        }}
      >
        {props.children}
      </LoginContex.Provider>
    </>
  );
};

export default AuthState;
