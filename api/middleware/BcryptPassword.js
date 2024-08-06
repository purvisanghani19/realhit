const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const HashPassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.send(400).json({ result: "Password is required" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(password, salt);
    next();
  } catch (error) {
    throw new error();
  }
};

const ComparePass = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ result: "Email and password are required" });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ result: "Email Invalid" });
    }

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(401).json({ result: "Password Invalid" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("User login error:", error);
    res.status(500).json({ result: "Server error" });
  }
};

module.exports = { HashPassword, ComparePass };
