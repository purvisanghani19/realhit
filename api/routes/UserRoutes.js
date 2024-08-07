const express = require("express");
const user = express.Router();
const {
  UserRegister,
  UserLogin,
  UserDetails,
} = require("../controllers/UserController");
const { HashPassword, ComparePass } = require("../middleware/BcryptPassword");
const authenticate = require("../middleware/TokenAuthentication");

user.route("/register").post(HashPassword, UserRegister);
user.route("/login").post(ComparePass, UserLogin);
user.route("/get-user-details/:id").get(authenticate, UserDetails);

module.exports = user;
