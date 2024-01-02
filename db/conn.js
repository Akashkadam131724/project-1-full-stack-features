const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.log(err.message);
  }
};

module.exports = connectDB;
// kadamakash131724
//6qy1eSGupLMWDUeN
