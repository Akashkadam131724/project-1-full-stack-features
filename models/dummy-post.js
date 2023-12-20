const mongoose = require("mongoose");

const dummyPostSchema = new mongoose.Schema({
  post: String,
});

const DummyPost = mongoose.model("DummyPost", dummyPostSchema);

module.exports = DummyPost;
