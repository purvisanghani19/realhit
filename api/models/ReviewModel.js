const mongoose = require("mongoose");

const ReviewModel = new mongoose.Schema({
  userName: {
    type: String,
    require: [true, "name is required"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
  },
  title: {
    type: String,
    maxLength: 100,
  },
  review: {
    type: String,
    require: [true, "review is empty"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

module.exports = mongoose.model("Review", ReviewModel);
