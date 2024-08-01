import React from "react";
import { useNavigate } from "react-router-dom";

const ProductContainer = ({ Products, title }) => {
  console.log("product----", Products);

  const navigate = useNavigate();
  const Viewproduct = (item) => {
    console.log("item", item);
    navigate("/view-product", { state: { product: item } });
    window.scrollTo(0, 35);
  };
  return (
    <>
      <div className="container-lg m-0 py-4 px-0">
        <h4 className="fst-italic fw-semibold text-uppercase py-3 ">{title}</h4>
        <div className="row row-cols-2 row-cols-lg-4 gx-2 gy-4 gx-lg-3 gy-lg-5 pb-5">
          {Products?.map((item, index) => (
            <div
              role="button"
              onClick={() => Viewproduct(item._id)}
              key={index}
              className="col"
            >
              <div className="img-container">
                <img
                  src={`http://localhost:5500${item.Img}`}
                  alt="blue tshirt"
                  className="img-fluid rounded-1"
                />
                <span className="badge border rounded-5 text-black bg-white position-absolute bottom-0 start-0">
                  Sale
                </span>
              </div>
              <div>
                <p className="fw-semibold m-0 tshirt_font py-2">{item.name}</p>
                <div className="d-flex gap-3">
                  <span className="text-decoration-line-through ">
                    Rs. 1,400.00
                  </span>
                  <span className="fw-bold">Rs. {item.price}.00 </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
