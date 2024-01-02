require("dotenv").config();
const express = require("express");
const connectDB = require("./db/conn");
const app = express();
const homeRouter = require("./routes/home");
const postRouter = require("./routes/posts");

app.use("/", homeRouter);

app.use("/posts", postRouter);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
  });
});
