const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    Number,
    require: [true, "password is required"],
  },

  mobileNo: {
    type: Number,
  },
});

module.exports = mongoose.model("user", UserModel);
