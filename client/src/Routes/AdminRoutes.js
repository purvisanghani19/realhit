import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginContex } from "../contexts/Context";
import { toast } from "react-toastify";

const AdminRoutes = ({ componant }) => {
  const { userDetails, Tokenlocal } = useContext(LoginContex);
  const [isAllowed, setIsAllowed] = useState(null); // State to manage route access
  const navigate = useNavigate();

  useEffect(() => {
    if (!Tokenlocal) {
      toast.warning("Please Login first admin !");
      navigate("/login");
    } else if (Tokenlocal && userDetails?.name !== "admin") {
      navigate("/not-authorized");
    } else if (Tokenlocal && userDetails?.name === "admin") {
      setIsAllowed(true); // User is authenticated and authorized
    }
  }, [userDetails, Tokenlocal]);

  if (isAllowed === null) {
    return null; // or a loading spinner if you want to show one while redirecting
  }

  return <Outlet />;
};

export default AdminRoutes;
