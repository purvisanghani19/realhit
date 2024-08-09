import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginContex } from "../contexts/Context";
import { toast } from "react-toastify";

const UserRoutes = () => {
  const { userDetails, Tokenlocal } = useContext(LoginContex);
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(null); // State to manage route access

  useEffect(() => {
    if (!Tokenlocal) {
      toast.warning("Please Login first !");
      navigate("/login");
    } else if (Tokenlocal && userDetails?.name !== "user") {
      navigate("/not-authorized");
    } else if (Tokenlocal && userDetails?.name === "user") {
      setIsAllowed(true); // User is authenticated and authorized
    }
  }, [userDetails, Tokenlocal, navigate]);

  if (isAllowed === null) {
    return null; // or a loading spinner if you want to show one while redirecting
  }

  return <Outlet />;
};

export default UserRoutes;
