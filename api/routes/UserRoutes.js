const express = require("express");
const user = express.Router();
const {
  UserRegister,
  UserLogin,
  UserDetails,
  RefreshToken,
  Logout,
} = require("../controllers/UserController");
const { HashPassword, ComparePass } = require("../middleware/BcryptPassword");
const {
  authenticate,
  authenticateRefreshToken,
} = require("../middleware/TokenAuthentication");

user.route("/register").post(HashPassword, UserRegister);
user.route("/login").post(ComparePass, UserLogin);
user.route("/refresh").get(authenticateRefreshToken, RefreshToken);
user.route("/logout").post(Logout);
user.route("/get-user-details/:id").get(authenticate, UserDetails);

module.exports = user;
