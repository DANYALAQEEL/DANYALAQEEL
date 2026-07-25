const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    let uri = process.env.MONGODB_URI;
    if (!uri) {
      console.log("No MONGODB_URI found in env. Starting MongoMemoryServer for testing...");
      const { MongoMemoryServer } = require("mongodb-memory-server");
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
      console.log("MongoMemoryServer started at:", uri);
    }

    await mongoose.connect(uri);

    console.log("MongoDB Connected");

  } catch (error) {

    console.error("DB Connection Error:", error);

  }

};

module.exports = connectDB;