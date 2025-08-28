const router = require("express").Router();

const userRouter = require("./users");
const itemsRouter = require("./clothingItem");

const { NOT_FOUND } = require("../utils/errors");

// Mount route handlers
router.use("/users", userRouter);
router.use("/items", itemsRouter);

// Handle requests to non-existent routes
const { NotFoundError } = require("../utils/not-found-error");
router.use((req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;
