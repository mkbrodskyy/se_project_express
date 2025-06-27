const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { createUser, login } = require("./controllers/users"); // Add this line
const auth = require("./middlewares/auth");
const cors = require("cors");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(cors());
app.use(express.json());

// REMOVE this middleware in a later step (authorization will replace it)
// app.use((req, res, next) => {
//   req.user = {
//     _id: "5d8b8592978f8bd833ca8133",
//   };
//   next();
// });

// Add the signup route before the main router
app.post("/signup", createUser);
app.post("/signin", login);

// Public route example (if you have it)
// app.get("/items", getItems);

app.use(auth); // Protect all routes below this line

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
