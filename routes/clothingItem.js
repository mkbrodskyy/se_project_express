const express = require("express");
const {
  likeItem,
  dislikeItem,
  addItem,
  getItems,
  deleteItem,
} = require("../controllers/items");
const auth = require("../middlewares/auth");
const { validateCardBody, validateId } = require("../middlewares/validation");

const router = express.Router();

// Public route - anyone can view items
router.get("/", getItems);

// Apply authentication middleware to all routes below
router.use(auth);

// Protected routes - require authentication
router.put("/:itemId/likes", validateId, likeItem);
router.delete("/:itemId/likes", validateId, dislikeItem);
router.post("/", validateCardBody, addItem);
router.delete("/:itemId", validateId, deleteItem);

module.exports = router;
