const PlaceModel = require("../models/OrderPlaceModel");
const UserModel = require("../models/UserModel");
const crypto = require("crypto");
const {
  generateAccessToken,
  generateRefreshAccessToken,
} = require("../utils/jwtUtils");
const jwt = require("jsonwebtoken");
const refresKey = process.env.REFRESH_TOKEN_SECRET;
const moment = require("moment");
const nodemailer = require("nodemailer");

const UserRegister = async (req, res) => {
  const { email, password, name, usertype } = req.body;

  // for admin usertype admin in postman
  const userdbtype = usertype === "admin" ? "admin" : "user";
  if (!email || !password) {
    return res.status(401).json({ result: "require email" });
  } else if (!password) {
    return res.status(401).json({ result: "require password" });
  }

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
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
    // const refreshToken = generateRefreshAccessToken(userinfo);

    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true, //accsessible only on web server  ---// Prevents JavaScript from accessing the cookie
    //   // sameSite: "strict",
    //   secure: true, //https
    //   sameSite: "None", //cross site cookie
    //   maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry :set to match to refresh token
    // });

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
  console.log("id", id);

  try {
    const userdata = await UserModel.findById(id);
    if (!userdata) res.status(200).json({ userdata });
  } catch (error) {
    res.status(404).send(error);
  }
};

const UserPlaceOrder = async (req, res) => {
  const { userId, items, totalAmount, shippingAddress } = req.body;

  // Validate required fields--------------------
  if (!userId) {
    return res.status(400).json({ result: "User ID is required" });
  }
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ result: "Items detail is required" });
  }
  if (!totalAmount) {
    return res.status(400).json({ result: "Total amount is required" });
  }
  if (!shippingAddress) {
    return res.status(400).json({ result: "Shipping address is required" });
  } else if (!shippingAddress.address) {
    return res.status(400).json({ result: "Shipping address is required" });
  } else if (!shippingAddress.city) {
    return res.status(400).json({ result: "city is required" });
  } else if (!shippingAddress.state) {
    return res.status(400).json({ result: "state is required" });
  } else if (!shippingAddress.postalCode) {
    return res.status(400).json({ result: "postalCode is required" });
  } else if (!shippingAddress.country) {
    return res.status(400).json({ result: "country is required" });
  }

  function generateOrderNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  try {
    const orderdetails = new PlaceModel({
      userId,
      items,
      totalAmount,
      shippingAddress,
      orderNumber: generateOrderNumber(),
    });
    const result = await orderdetails.save();

    //invoice send to use email using nodemailer----------------------------------------

    //date formate-------
    function formateDate(date) {
      return moment(date).format("DD-MM-YYYY");
    }
    const now = new Date(orderdetails.orderDate);

    //user details------
    const useremail = await UserModel.findById(userId);

    // console.log("formateDate(now)----", formateDate(now));
    const usermail = useremail.email;
    const orderdate = formateDate(now);
    const username = useremail.name;

    // mail to user------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_ADMIN,
        pass: process.env.EMAIL_PASS,
      },
    });

    // // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: usermail,
      subject: "🎉 Hooray! Your Order is Placed – Here’s the Scoop!",

      html: `
      <p>Hi there, ${username}!</p>
      <p>Thank you for your order!</p>
      <p>Your order number is ${result.orderNumber}, will update you once its shipped.</p>
      <p>Order date :${orderdate}</p>
      <p>Best regards,<br/>Realhit</p>
    `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Order placed successfully Check Your Email For Confirmation",
      result: result.orderNumber,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ result: "Internal server error" });
  }
};

module.exports = {
  UserRegister,
  UserLogin,
  UserDetails,
  RefreshToken,
  Logout,
  UserPlaceOrder,
};
