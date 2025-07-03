const express = require("express");
const {
  getCurrentUser,
  updateCurrentUser,
} = require("../controllers/users");
const auth = require("../middlewares/auth"); // Import auth

const router = express.Router();

router.use(auth); // Protect all routes below

router.get("/me", getCurrentUser);
router.patch("/me", updateCurrentUser);

module.exports = router;
