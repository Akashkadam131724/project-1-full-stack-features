const express = require("express");
const getPosts = require("../controllers/dummy-post");
const router = express.Router();

router.get("/", getPosts);

module.exports = router;
