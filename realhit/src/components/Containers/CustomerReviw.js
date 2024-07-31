import React, { useState } from "react";
import { MdUploadFile } from "react-icons/md";

const CustomerReviw = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="">
        <div className="text-center fs-3 fw-bold py-3">Customer Reviews</div>
        <div className="d-flex flex-column flex-md-row d-inline align-items-center justify-content-center align-content-center">
          <p className="p-0 m-0">Be the first to write a review</p>
          <div
            className="vr d-none d-md-block mx-3"
            style={{ height: "50px" }}
          ></div>
          <button
            className="btn px-4 px-sm-5 my-4 my-md-0  border-black rounded-0 bg-black text-white "
            onClick={() => setopen(!open)}
          >
            write a review
          </button>
        </div>
      </div>

      {open && (
        <div className="d-flex flex-column align-items-center py-4 border-top my-2 w-100 animate__animated animate__fadeInDown animate__faster">
          <div className="w-50">
            <h4>Write a Review</h4>

            <p>Review Title(100)</p>
            <input
              type="text"
              className="form-control "
              id="reviewtitle"
              placeholder="Give your review a title"
            />

            <p className="py-3 m-0">Review</p>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="write a comment here"
            ></textarea>

            <p className="py-3 m-0">Picture/Video (optional)</p>
            <div
              role="button"
              className="border w-25 d-flex justify-content-center"
            >
              <MdUploadFile className="fs-1 m-4" style={{ color: "#31363F" }} />
            </div>

            <p className="py-3 m-0 fw-semibold">
              Name (displayed publicly like John Smith )
            </p>
            <input
              type="text"
              className="form-control"
              id="reviewtitle"
              placeholder="enter your name(public)"
            />

            <p className="py-3 m-0 fw-semibold">Email</p>
            <input
              type="text"
              className="form-control "
              id="reviewtitle"
              placeholder="enter your email(private)"
            />

            <p className="py-3">
              How we use your data: We’ll only contact you about the review you
              left, and only if necessary. By submitting your review, you agree
              to Judge.me’s <a href="#">terms and conditions </a>and
              <a href="#"> privacy policy</a>
            </p>

            <div className="d-flex gap-2">
              <button className="btn px-3 px-sm-4 my-4 my-md-0  border-black rounded-0 ">
                Cancel review
              </button>

              <button className="btn px-3 px-sm-4 my-4 my-md-0  border-black rounded-0 bg-black text-white ">
                Submit review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerReviw;
