import React from "react";
import tshirt1 from "../../img/tshirt_colleaction/1.jpg";
import tshirt2 from "../../img/tshirt_colleaction/2.jpg";
import tshirt3 from "../../img/tshirt_colleaction/3.jpg";
import tshirt4 from "../../img/tshirt_colleaction/4.jpg";
import tshirt5 from "../../img/tshirt_colleaction/5.jpg";
import tshirt6 from "../../img/tshirt_colleaction/6.jpg";
import tshirt7 from "../../img/tshirt_colleaction/7.jpg";
import tshirt8 from "../../img/tshirt_colleaction/8.jpg";
import { useNavigate } from "react-router-dom";
import { imgApi } from "../../api/BaseApi";

const Container4 = ({ data }) => {
  // console.log("data", data);
  const navigate = useNavigate();

  const Viewproduct = (item) => {
    navigate("/view-product", { state: { product: item } });
  };

  return (
    <>
      {/*------------------sweatshirts container start------------ */}
      <div className="container-lg py-4">
        <div className="row row-cols-2 row-cols-lg-4 gx-2 gy-4 gx-lg-3 gy-lg-5 px-lg-4 pb-5">
          {data?.slice(0, 10).map((item, index) => {
            return (
              <div
                role="button"
                onClick={() => Viewproduct(item._id)}
                key={index}
                className="col"
              >
                <div className="img-container">
                  <img
                    src={`${imgApi}${item.Img}`}
                    alt="blue tshirt"
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
      </div>
      {/*------------------sweatshirts container end------------ */}
    </>
  );
};

export default Container4;
