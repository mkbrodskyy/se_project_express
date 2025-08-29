const router = require("express").Router();

const userRouter = require("./users");
const itemsRouter = require("./clothingItem");

// Mount route handlers
router.use("/users", userRouter);
router.use("/items", itemsRouter);

// Handle requests to non-existent routes

const NotFoundError = require("../errors/NotFoundError");

router.use((req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;
