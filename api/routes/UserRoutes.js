const express = require("express");
const user = express.Router();
const { UserRegister, UserLogin } = require("../controllers/UserController");

user.route("/register").post(UserRegister);
user.route("/login").post(UserLogin);

module.exports = user;
