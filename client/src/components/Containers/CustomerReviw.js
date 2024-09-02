import axios from "axios";
import React, { useState } from "react";
import { MdUploadFile } from "react-icons/md";
import { toast } from "react-toastify";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import buffer from "../../Lotties/Buffer.json";
import { BaseApi } from "../../api/BaseApi";

const CustomerReviw = ({ productId }) => {
  const [open, setopen] = useState(false);

  const [Review, setReview] = useState({
    title: "",
    review: "",
    userName: "",
    email: "",
    productId: productId,
  });

  const [Loding, setLoding] = useState(false);

  const handleReview = (e) => {
    const { name, value } = e.target;
    setReview({ ...Review, [name]: value });
  };

  const openbox = () => {
    setopen(!open);
    window.scrollTo(0, 970);
  };
  const validateFields = () => {
    if (!Review.userName) {
      return toast.error("name is required");
    } else if (!Review.email) {
      return toast.error("email is required");
    } else if (!Review.review) {
      return toast.error("review is required");
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();
    setLoding(!Loding);

    validateFields();

    try {
      const review = await BaseApi.post("/review/post", Review);
      // console.log("review----------", review);
      if (review.status === 200) {
        toast.success(review.data.message);
        setReview({
          title: "",
          review: "",
          userName: "",
          email: "",
          productId: productId,
        });
        setopen(!open);
        window.scrollTo(0, 0);
        setLoding(false);
      }
    } catch (error) {
      console.log("error", error.message);
      toast.error(error.message);
    }
  };

  const canclereview = () => {
    setopen(!open);
    setReview({
      title: "",
      review: "",
      userName: "",
      email: "",
      productId: productId,
    });
  };

  return (
    <>
      <div className="py-3">
        <div className="text-center fs-3 fw-bold py-3">Customer Reviews</div>
        <div className="d-flex flex-column flex-md-row d-inline align-items-center justify-content-center align-content-center">
          <p className="p-0 m-0">Be the first to write a review</p>
          <div
            className="vr d-none d-md-block mx-3"
            style={{ height: "50px" }}
          ></div>
          {open ? (
            <button
              className="btn px-4 px-sm-5 my-4 my-md-0  border-black rounded-0 bg-black text-white "
              onClick={canclereview}
            >
              Cancle review
            </button>
          ) : (
            <button
              className="btn px-4 px-sm-5 my-4 my-md-0  border-black rounded-0 bg-black text-white "
              onClick={() => openbox()}
            >
              write a review
            </button>
          )}
        </div>

        {open && (
          <div className="d-flex flex-column align-items-center py-4 border-top my-2 w-100">
            <div className="w-50">
              <h4>Write a Review</h4>

              <p>Review Title(100)</p>
              <input
                type="text"
                className="form-control "
                id="reviewtitle"
                placeholder="Give your review a title"
                name="title"
                value={Review.title}
                onChange={handleReview}
              />

              <p className="py-3 m-0">Review</p>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="write a comment here"
                name="review"
                value={Review.review}
                onChange={handleReview}
              ></textarea>

              <p className="py-3 m-0">Picture/Video (optional)</p>
              <div
                role="button"
                className="border w-25 d-flex justify-content-center"
              >
                <MdUploadFile
                  className="fs-1 m-4"
                  style={{ color: "#31363F" }}
                />
              </div>

              <p className="py-3 m-0 fw-semibold">
                Name (displayed publicly like John Smith )
              </p>
              <input
                type="text"
                className="form-control"
                id="reviewtitle"
                placeholder="enter your name(public)"
                name="userName"
                value={Review.userName}
                onChange={handleReview}
              />

              <p className="py-3 m-0 fw-semibold">Email</p>
              <input
                type="text"
                className="form-control "
                id="reviewtitle"
                placeholder="enter your email(private)"
                name="email"
                value={Review.email}
                onChange={handleReview}
              />

              <p className="py-3">
                How we use your data: We’ll only contact you about the review
                you left, and only if necessary. By submitting your review, you
                agree to Judge.me’s <a href="#">terms and conditions </a>and
                <a href="#"> privacy policy</a>
              </p>

              <div className="d-flex gap-2 position-relative">
                <button
                  onClick={canclereview}
                  className="btn px-3 px-sm-4 my-4 my-md-0  border-black rounded-0 "
                >
                  Cancel review
                </button>

                {/* <div
                  style={{
                    position: "absolute",
                    left: "100px",
                    height: "20px",
                  }}
                >
                  <Player
                    autoplay
                    className="player"
                    loop
                    src={buffer}
                    // style={{ height: "90px", width: "120px" }}
                  />
                </div> */}

                <button
                  onClick={submitReview}
                  className="btn px-3 px-sm-4 my-4 my-md-0 border-black rounded-0 bg-black text-white "
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {Loding ? <span>Loding</span> : <span>Submit review</span>}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerReviw;
