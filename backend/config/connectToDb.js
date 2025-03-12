let mongoose = require("mongoose");
require('dotenv').config()

let connectToDb = async () => {
  try {
    return await mongoose.connect(process.env.MONGODB_URl);
  } catch (error) {
    throw new Error(`Connection failed: ${error.message}`);
  }
};

module.exports = connectToDb;
