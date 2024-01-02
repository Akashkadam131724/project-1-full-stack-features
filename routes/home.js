const express = require("express");
const getHomePage = require("../controllers/home");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to home added dotenv");
});

router.get("/home", getHomePage);

module.exports = router;
