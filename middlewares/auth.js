const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const { UNAUTHORIZED } = require("../utils/errors");

// Authentication middleware to verify JWT tokens
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  // Check if authorization header exists and starts with "Bearer "
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(UNAUTHORIZED).send({ message: "Authorization required" });
  }

  // Extract token from "Bearer <token>" format
  const token = authorization.replace("Bearer ", "");

  let payload;
  try {
    // Verify and decode the JWT token
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(UNAUTHORIZED).send({ message: "Authorization required" });
  }

  // Add user ID to request object for use in protected routes
  req.user = payload;
  return next();
};
