const UserModel = require("../models/UserModel");

const UserRegister = async (req, res) => {
  const { email, password, name, usertype } = req.body;

  // const userdbtype = usertype === "admin" || "user";
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
      // usertype: userdbtype,
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
    const { password, ...userWithoutPassword } = req.user._doc;

    // if (req.email === "admin@gmail.com") {
    //   res.status(200).json({
    //     message: "User logged in successfully",
    //     user: { ...userWithoutPassword, usertype: "admin" },
    //   });
    // } else {
    //   res.status(200).json({
    //     message: "User logged in successfully",
    //     user: userWithoutPassword,
    //   });
    // }

    if (req.user.email === "admin@gmail.com") {
      userWithoutPassword.usertype = "admin"; // Add usertype as 'admin'
    }

    res.status(200).json({
      message: "User logged in successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { UserRegister, UserLogin };
