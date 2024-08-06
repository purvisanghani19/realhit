const express = require("express");
const user = express.Router();
const { UserRegister, UserLogin } = require("../controllers/UserController");
const { HashPassword, ComparePass } = require("../middleware/BcryptPassword");

user.route("/register").post(HashPassword, UserRegister);
user.route("/login").post(ComparePass, UserLogin);

module.exports = user;
