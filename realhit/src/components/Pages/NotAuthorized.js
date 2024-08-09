import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotAuthorized = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex flex-column align-items-center  ">
        <div
          className="d-flex flex-column align-items-center "
          style={{ margin: "120px 0px" }}
        >
          <h1>403 - Not Authorized</h1>
          <p style={{ padding: "22px 0px" }}>
            You do not have permission to access this page.
          </p>
          <div>
            <button
              onClick={() => navigate(-1)}
              className="btn w-100 py-2 pt-2 pb-2 my-1 border-none  rounded-0 text-black shadow p-3  bg-white  "
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotAuthorized;
