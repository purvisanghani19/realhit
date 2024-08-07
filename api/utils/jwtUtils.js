const jwt = require("jsonwebtoken");
const secretkey = process.env.JWT_API_KEY;

const generateAccessToken = (user) => {
  return jwt.sign(user, secretkey, { expiresIn: "30m" });
};

module.exports = generateAccessToken;
