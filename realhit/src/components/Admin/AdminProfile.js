import React, { useContext } from "react";
import { LoginContex } from "../../contexts/Context";

const AdminProfile = () => {
  const { userType } = useContext(LoginContex);
  console.log("userType------------------", userType);
  return (
    <>
      <div>admin profile</div>
    </>
  );
};

export default AdminProfile;
