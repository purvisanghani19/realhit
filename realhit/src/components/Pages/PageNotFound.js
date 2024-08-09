import React from "react";
import pageNotfound from "../../Lotties/404.json.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container d-flex flex-column align-items-center w-100 h-100">
        <div>
          <Player
            autoplay
            loop
            src={pageNotfound}
            className=" w-50 h-50"
          ></Player>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div>page not found</div>
          <div>
            <button
              onClick={() => navigate(-1)}
              className="btn w-100 py-2 pt-2 pb-2 my-1 border-none  rounded-0 text-black shadow p-3 mb-5 bg-white  "
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
