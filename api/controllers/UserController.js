const UserModel = require("../models/UserModel");

const UserRegister = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email) {
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

    // Create a new user
    const newUser = new UserModel({ email, password, name });
    console.log("newUser", newUser);
    const result = await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
      result,
    });
  } catch (error) {
    res.status(400).json(error.message);
    console.log("userRegister error", error);
  }
};

const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(409).json({ result: "require email" });
  } else if (!password) {
    return res.status(409).json({ result: "require password" });
  }
  try {
    const logindata = await UserModel.findOne({ email });
    console.log("logindata------", logindata);

    if (!logindata) {
      return res.status(404).json({ result: "User not found" });
    }

    res.status(200).json({
      message: "User login successfully",
      logindata,
    });
  } catch (error) {
    res.status(400).json(error.message);
    console.log("userRegister error", error);
  }
};

module.exports = { UserRegister, UserLogin };
