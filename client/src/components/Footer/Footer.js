import React from "react";
import logo from "../../logo/The_Realhit_Store_Logo_L.png";
import { SiInstagram } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import amex from "../../svg/footer/amex.svg";
import ipay from "../../svg/footer/ipay.svg";
import pay from "../../svg/footer/pay.svg";
import visa from "../../svg/footer/visa.svg";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid h-100 mx-0 px-0 ">
        {/* <div className="h-75 bg-danger border-0 ">
          <div
            class="accordion container-sm w-50 "
            id="accordionPanelsStayOpenExample"
          >
            <div class="accordion-item bg-danger border-0">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button bg-danger border-0 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  How soon will my order be dispatched after placing it?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body text-white">
                  Your order will be dispatched within 2-5 business days from
                  the date of placing the order. The delivery time will vary
                  based on the serviceability of your PIN code.
                </div>
              </div>
            </div>
            <div class="accordion-item bg-danger border-0">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed bg-danger border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item bg-danger border-0">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed bg-danger border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-fluid h-25 bg-black">
          <div className="container text-white py-5 d-flex flex-column text-center ">
            <div className="py-4">
              <a href="/">
                <img
                  src={logo}
                  width={225}
                  height={38}
                  alt="logo"
                  className="logo_img"
                />
              </a>
            </div>
            <div>
              <div className=" py-3">
                <span>
                  <SiInstagram className="fs-6 mx-3" />
                </span>
                <span>
                  <GrYoutube className="fs-5 mx-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid h-25 bg-black footer_border">
          <div className="container text-white py-5 d-flex flex-column text-center ">
            <div className="">
              <ul className="d-flex justify-content-center">
                <li className="list-unstyled">
                  <img src={amex} alt="American Express" className="mx-1" />
                </li>
                <li className="list-unstyled">
                  <img src={ipay} alt="ipay" className="mx-1" />
                </li>
                <li className="list-unstyled">
                  <img src={pay} alt="pay" className="mx-1" />
                </li>
                <li className="list-unstyled">
                  <img src={visa} alt="American Express" className="mx-1" />
                </li>
              </ul>
            </div>
            <div
              className="text-wrap mx-2"
              style={{ color: "#b1b1b1", fontSize: "13px" }}
            >
              © 2024, Realhitstore Powered by Merchit • Refund policy • Privacy
              policy • Terms of service • Shipping policy • Contact information
            </div>
            <div></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
