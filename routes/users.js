const express = require("express");
const { getCurrentUser, updateCurrentUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const { validateUserInfoBody } = require("../middlewares/validation");

const router = express.Router();

// Apply authentication middleware to all routes in this router
router.use(auth);

// User profile routes
router.get("/me", getCurrentUser);
router.patch("/me", validateUserInfoBody, updateCurrentUser);

module.exports = router;
