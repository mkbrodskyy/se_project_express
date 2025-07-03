const express = require("express");
const {
  likeItem,
  dislikeItem,
  addItem,
  getItems,
  deleteItem,
} = require("../controllers/items");
const auth = require("../middlewares/auth"); // Import auth

const router = express.Router();

router.get("/", getItems); // Public route

router.use(auth); // Protect all routes below

router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", dislikeItem);
router.post("/", addItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
