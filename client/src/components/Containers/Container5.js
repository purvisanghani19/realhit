import React from "react";
import { useNavigate } from "react-router-dom";
import { imgApi } from "../../api/BaseApi";

const Container5 = ({ data }) => {
  const navigate = useNavigate();

  const Viewproduct = (item) => {
    navigate("/view-product", { state: { product: item } });
  };

  const navigatetopages = () => {
    data?.map((item) => {
      item.category === "tshirt"
        ? navigate("/colleaction/tshirt")
        : navigate("/colleaction/hoodies");
    });
  };

  return (
    <>
      {/*------------------t-shirt container start------------ */}
      <div className="container py-4 ">
        <div className="row row-cols-2 row-cols-lg-5 gx-2 gy-4 gx-lg-3 gy-lg-5 px-lg-4 pb-5">
          {data?.slice(0, 10).map((item, index) => {
            return (
              <div
                role="button"
                onClick={() => Viewproduct(item._id)}
                className="col"
                key={index}
              >
                <div className="img-container">
                  <img
                    src={`${imgApi}${item.Img}`}
                    alt={item.name}
                    className="img-fluid rounded-1"
                  />
                  <span className="badge border rounded-5 text-black bg-white position-absolute bottom-0 start-0">
                    Sale
                  </span>
                </div>
                <div>
                  <p className="fw-semibold m-0 tshirt_font py-2">
                    {item.name}
                  </p>
                  <div className="d-flex gap-3">
                    <span className="text-decoration-line-through ">
                      Rs. 1,400.00
                    </span>
                    <span className="fw-bold">Rs. {item.price}.00 </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <span
            onClick={
              navigatetopages
              // item.category === "tshirt"
              //   ? navigate("/colleaction/tshirt")
              //   : navigate("/colleaction/hoodies")
            }
            role="button"
            className="fw-semibold btn_bg "
          >
            View all
          </span>
        </div>
      </div>
      {/*------------------t-shirt container end------------ */}
    </>
  );
};

export default Container5;
