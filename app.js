const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
const { createUser, login } = require("./controllers/users");

const app = express();
const { PORT = 3001 } = process.env;

// Connect to MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

// Enable CORS for frontend communication
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// Public authentication routes
app.post("/signup", createUser);
app.post("/signin", login);

// Protected API routes
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
