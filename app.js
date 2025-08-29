require("dotenv").config();
const express = require("express");
const { errors } = require("celebrate");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimiter = require("./middlewares/rateLimiter");
const mainRouter = require("./routes/index");
const { createUser, login } = require("./controllers/users");
const errorHandler = require("./middlewares/error-handler");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const {
  validateUserBody,
  validateAuthentication,
} = require("./middlewares/validation");

const app = express();

// Security HTTP headers
app.use(helmet());

// Rate limiting
app.use(rateLimiter);
const { PORT = 3001 } = process.env;

// Connect to MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Connected to DB");
  })
  .catch(console.error);

// Enable CORS for frontend communication
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// Enable request logging
app.use(requestLogger);

// Crash test route for code review (remove after review)
app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

// Public authentication routes
app.post("/signup", validateUserBody, createUser);
app.post("/signin", validateAuthentication, login);

// Protected API routes
app.use("/", mainRouter);

// Enable error logging
app.use(errorLogger);

// Celebrate error handler
app.use(errors());

// Centralized error handling middleware (must be last)
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
