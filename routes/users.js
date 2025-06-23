const express = require("express");
const { createUser, getUsers, getUser } = require("../controllers/users");

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:userId", getUser);

module.exports = router;
