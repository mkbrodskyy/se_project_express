const express = require("express");
const { likeItem, dislikeItem } = require("../controllers/items");
const router = express.Router();

router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", dislikeItem);

module.exports = router;
