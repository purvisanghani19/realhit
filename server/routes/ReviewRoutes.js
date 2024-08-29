const express = require("express");
const review = express.Router();

const UserReview = require("../controllers/ReviewController");

review.route("/post").post(UserReview);

module.exports = review;
