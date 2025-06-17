const express = require("express");
const { likeItem, dislikeItem, addItem, getItems, deleteItem } = require("../controllers/items");

const router = express.Router();

router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", dislikeItem);
router.post("/", addItem);
router.get("/", getItems);
router.delete("/:itemId", deleteItem);

module.exports = router;
