import React, { useEffect, useState } from "react";
import { LoginContex } from "../Context";
import { getUserdetails, setUserdetails } from "../../utils/localStorageHelper";

const AuthState = (props) => {
  const [userDetails, setuserDetails] = useState(() => getUserdetails());

  console.log("userDetails----------", userDetails);

  useEffect(() => {
    if (userDetails) {
      setUserdetails(userDetails);
    }
  }, [userDetails]);

  return (
    <>
      <LoginContex.Provider value={{ setuserDetails, userDetails }}>
        {props.children}
      </LoginContex.Provider>
    </>
  );
};

export default AuthState;
