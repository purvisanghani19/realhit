import React, { useContext, useEffect } from "react";
import axios from "axios";
import { LoginContex } from "../../contexts/Context";

const UserProfile = () => {
  const { Tokenlocal } = useContext(LoginContex);

  // useEffect(() => {
  //   const userDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5500/user/get-user-details`,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${Tokenlocal}`,
  //           },
  //           params: {
  //             // userId: userId, // Pass userId as a query parameter
  //           },
  //         }
  //       );

  //       console.log("User Details:", response.data);
  //     } catch (error) {
  //       console.log("errro", error);
  //     }
  //   };

  //   userDetails();
  // }, []);

  return <div>UserProfile</div>;
};

export default UserProfile;
