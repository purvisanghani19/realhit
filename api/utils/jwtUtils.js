const jwt = require("jsonwebtoken");
const secretkey = process.env.JWT_API_KEY;
const refresKey = process.env.REFRESH_TOKEN_SECRET;

const generateAccessToken = (user) => {
  console.log("user---------------------", user);
  return jwt.sign(user, secretkey, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  });
};

const generateRefreshAccessToken = (user) => {
  return jwt.sign(user, refresKey, {
    expiresIn: process.env.JWT_RFRESH_EXPIRES_IN,
  });
};

module.exports = { generateAccessToken, generateRefreshAccessToken };
