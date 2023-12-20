const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kadamakash131724:6qy1eSGupLMWDUeN@project-1-full-features.pwjigtr.mongodb.net/project-1?retryWrites=true&w=majority"
    );
    console.log("connecting to project Db");
  } catch (e) {
    console.log(err.message);
  }
};

module.exports = connectDB;
// kadamakash131724
//6qy1eSGupLMWDUeN
