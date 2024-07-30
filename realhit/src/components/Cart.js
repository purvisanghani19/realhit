import React from "react";
import tshirt7 from "../img/tshirt_colleaction/7.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-baseline py-5 mt-md-4">
          <span className="fs-2 fw-bold">Your cart</span>
          <a className="text-dark">
            <span>Continue shopping</span>
          </a>
        </div>

        <div className="row">
          <div className="col-6 border-black">
            <div className="col ">PRODUCT</div>
          </div>
          <div className="col-6 border-black">
            <div className="row ">
              <div className="col-6 d-none d-md-block ">QUANTITY</div>
              <div className="col-6  d-none d-md-block">TOTAL</div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row gy-4">
          <div className="col-12 col-md-6  border-black">
            <div className="row">
              <div className="col-4 ">
                <img
                  src={tshirt7}
                  width={160}
                  height={250}
                  alt="blue tshirt"
                  className="img-fluid rounded-2 object-fit-cover"
                />
              </div>
              <div className="col-8 ">
                <div className="g-0">
                  <h6 className="fw-bold text-wrap">
                    Aaj Chalegi Daaru Hoodie
                  </h6>
                  <h6>Rs. 1,900.00</h6>
                  <h6>color:white</h6>
                  <h6>size:s</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  border-black">
            <div className="row py-3">
              <div className="col-6 border-black d-flex align-items-center gap-2 gap-md-2 gap-lg-4 ">
                <div className="btn py-2 px-2 fs-semibold  border-black rounded-0  text-black text-uppercase gap-4">
                  <span role="button" className="px-2 px-sm-3 py-2 py-sm-3 ">
                    -
                  </span>
                  <span className="px-2 px-sm-3 py-2 py-sm-3 ">1</span>
                  <span role="button" className="px-2 px-sm-3 py-2 py-sm-3">
                    +
                  </span>
                </div>
                <div className="">
                  <RiDeleteBin6Line className="" />
                </div>
              </div>
              <div className="col-6 border-black g-0">
                <div className="p-2 d-flex  flex-column flex-sm-row align-items-end justify-content-end justify-content-md-start  fw-bold">
                  <span className="d-block d-sm-inline">Rs.</span> 1,099.00
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-column justify-content-end align-items-center align-items-md-end py-5">
          <div className="d-flex gap-3">
            <span className="fw-bold">Estimated total</span>
            <span className="">Rs. 1,099.00</span>
          </div>
            <span className="py-3 text-center" >
              Tax included. Shipping and discounts calculated at checkout.
            </span>
            <button className="btn w-25 py-2 pt-2 pb-2 my-1 border-none  rounded-0 text-black shadow p-3 mb-5 bg-white py-2  ">
              Buy Now
            </button>
      
        </div>
      </div>
    </>
  );
};

export default Cart;
