const mongoose = require("mongoose");

const DummyPost = require("../models/dummy-post");

const getPosts = async (req, res) => {
  try {
    const posts = await DummyPost.find();
    res.send({
      posts,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPosts;
