import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginContex } from "../contexts/Context";
import { toast } from "react-toastify";

const AdminRoutes = ({ componant }) => {
  const { userType, Tokenlocal } = useContext(LoginContex);
  const [isAllowed, setIsAllowed] = useState(null); // State to manage route access
  const navigate = useNavigate();

  useEffect(() => {
    if (!Tokenlocal) {
      toast.warning("Please Login first !");
      navigate("/login");
    } else if (Tokenlocal && userType !== "admin") {
      navigate("/not-authorized");
    } else if (Tokenlocal && userType === "admin") {
      setIsAllowed(true); // User is authenticated and authorized
    }
  }, [userType, Tokenlocal, navigate]);

  if (isAllowed === null) {
    return null; // or a loading spinner if you want to show one while redirecting
  }

  return <Outlet />;
};

export default AdminRoutes;
