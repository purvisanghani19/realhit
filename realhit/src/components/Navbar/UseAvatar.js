import React from "react";
import randomColor from "randomcolor";

const UseAvatar = ({ name = "Guest" }) => {
  const color = randomColor({
    luminosity: "dark",
    format: "rgba",
  });
  return (
    <>
      <div
        style={{
          width: "38px",
          height: "38px",
          backgroundColor: color,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {name}
      </div>
    </>
  );
};

export default UseAvatar;
