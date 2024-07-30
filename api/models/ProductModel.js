const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Why no name?"],
  },
  price: {
    type: Number,
    required: true,
  },
  sale: Boolean,
  color: {
    type: [String],
    default: ["red", "black"],
  },
  // Img: {
  //   type: String,
  // },
  size: {
    type: String,
    enum: ["s", "m", "l", "xl", "xxl"],
  },
  category: String,
});

module.exports = mongoose.model("product", ProductModel);
