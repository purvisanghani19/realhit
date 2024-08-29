import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LoginContex } from "../contexts/Context";
import { toast } from "react-toastify";
import { getProductData } from "../utils/localStorageHelper";

const UserRoutes = () => {
  const { userDetails, Tokenlocal } = useContext(LoginContex);

  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(null); // State to manage route access
  const location = useLocation();

  useEffect(() => {
    const localproductdata = getProductData();

    if (!Tokenlocal) {
      toast.warning("Please Login first user!");
      navigate("/login");
    } else if (Tokenlocal && userDetails?.usertype !== "user") {
      navigate("/not-authorized");
    } else if (Tokenlocal && userDetails?.usertype === "user") {
      if (location.pathname === "/gp" && localproductdata.length === 0) {
        toast.warning(
          "Your cart is empty. Please add items to the cart before proceeding."
        );
        navigate("/cart");
      } else {
        setIsAllowed(true);
      }
    }
  }, [userDetails, Tokenlocal, location.pathname, navigate]);

  if (isAllowed === null) {
    return null; // or a loading spinner if you want to show one while redirecting
  } else {
    return <Outlet />;
  }
};

export default UserRoutes;
