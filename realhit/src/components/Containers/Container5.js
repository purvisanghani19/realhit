import React from "react";

const Container5 = ({ data }) => {
  console.log("data", data);
  return (
    <>
      {/*------------------t-shirt container start------------ */}
      <div className="container py-4 ">
        <div className="row row-cols-2 row-cols-lg-5 gx-2 gy-4 gx-lg-3 gy-lg-5 px-lg-4 pb-5">
          {data?.slice(0, 10).map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="img-container">
                  <img
                    src={`http://localhost:5500${item.Img}`}
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
          <span role="button" className="fw-semibold btn_bg ">
            View all
          </span>
        </div>
      </div>
      {/*------------------t-shirt container end------------ */}
    </>
  );
};

export default Container5;
