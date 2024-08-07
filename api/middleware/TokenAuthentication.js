const jwt = require("jsonwebtoken");
const secretkey = process.env.JWT_API_KEY;

const authenticate = (req, res, next) => {
  const authheader = req.headers["authorization"];

  //for bearer token------------------
  const token = authheader && authheader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  try {
    const decode = jwt.verify(token, secretkey);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(400).send("Invalid Token");
  }
};

module.exports = authenticate;
