const express = require("express");
const {
  likeItem,
  dislikeItem,
  addItem,
  getItems,
  deleteItem,
} = require("../controllers/items");
const auth = require("../middlewares/auth");

const router = express.Router();

// Public route - anyone can view items
router.get("/", getItems);

// Apply authentication middleware to all routes below
router.use(auth);

// Protected routes - require authentication
router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", dislikeItem);
router.post("/", addItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
