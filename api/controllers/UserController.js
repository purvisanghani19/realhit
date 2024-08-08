const UserModel = require("../models/UserModel");
const {
  generateAccessToken,
  generateRefreshAccessToken,
} = require("../utils/jwtUtils");
const jwt = require("jsonwebtoken");
const refresKey = process.env.REFRESH_TOKEN_SECRET;

const UserRegister = async (req, res) => {
  const { email, password, name, usertype } = req.body;

  // let a = usertype === "admin" && "admin";
  const userdbtype = usertype === "admin" ? "admin" : "user";
  if (!email || !password) {
    return res.status(401).json({ result: "require email" });
  } else if (!password) {
    return res.status(401).json({ result: "require password" });
  }

  try {
    //cheack if email is already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json("Oops ! Email is already registered ");
    }

    // Create a new user--------
    const newUser = new UserModel({
      email,
      password,
      name,
      usertype: userdbtype,
    });
    console.log("newUser", newUser);
    const result = await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
      result,
    });
  } catch (error) {
    res.status(401).json(error.message);
    console.log("userRegister error", error);
  }
};

const UserLogin = async (req, res) => {
  try {
    const userinfo = {
      name: req.user._doc.name,
      usertype: req.user._doc.usertype,
      _id: req.user._doc._id,
    };
    //-------jwt token authentication----------
    const accessToken = generateAccessToken(userinfo);
    const refreshToken = generateRefreshAccessToken(userinfo);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, //accsessible only on web server  ---// Prevents JavaScript from accessing the cookie
      // sameSite: "strict",
      secure: true, //https
      sameSite: "None", //cross site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry :set to match to refresh token
    });

    res.status(200).json({
      message: "logged in successfully",
      user: userinfo,
      token: accessToken,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Internal Server Error");
  }
};

const RefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken)
      return res.status(401).send("Refresh token not provided");

    // Verify the refresh token
    const verifiedUser = jwt.verify(refreshToken, refresKey);
    if (!verifiedUser || typeof verifiedUser !== "object")
      return res.status(403).send("Invalid refresh token");

    // Fetch user details without password------------------------------------
    const checkuserToken = await UserModel.findById(verifiedUser._id).select(
      "-password"
    );
    if (!checkuserToken)
      return res.status(401).json({ message: "Unauthorized user" });

    // Ensure the payload is an object------------------------------------------------
    const userPayload = {
      _id: checkuserToken._id,
      name: checkuserToken.name,
      usertype: checkuserToken.usertype,
    };

    // Generate a new access token----------------------------------------------------
    const newAccessToken = generateAccessToken(userPayload);
    res.status(200).json({
      message: "Access token refreshed successfully",
      token: newAccessToken,
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    res.status(500).send("Internal Server Error");
  }
};

const Logout = (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.refreshToken) return res.status(204);

    res.clearCookie("refreshToken", {
      httpOnly: true, //accsessible only on web server
      sameSite: "strict",
      secure: true, //https
      // sameSite: "None", //cross site cookie
    });
    res.json({ message: "Cookie cleared" });
  } catch (error) {
    console.error("logout", error);
    res.status(500).send("Internal Server Error");
  }
};

const UserDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const userdata = await UserModel.findById(id);
    res.status(200).json({ userdata });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { UserRegister, UserLogin, UserDetails, RefreshToken, Logout };
