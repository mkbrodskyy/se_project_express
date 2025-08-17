const router = require("express").Router();

const userRouter = require("./users");
const itemsRouter = require("./clothingItem");

const { NOT_FOUND } = require("../utils/errors");

// Mount route handlers
router.use("/users", userRouter);
router.use("/items", itemsRouter);

// Handle requests to non-existent routes
router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
