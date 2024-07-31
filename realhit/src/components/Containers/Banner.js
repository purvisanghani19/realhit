import React from "react";

const Banner = ({ srcImg }) => {
  return (
    <>
      <div className="container-fluid parent-container m-0 p-0 d-flex justify-content-center align-items-center">
        <img src={srcImg} alt="Responsive Image" className="child-image" />
      </div>
    </>
  );
};

export default Banner;
