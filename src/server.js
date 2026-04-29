require('dotenv').config(); // MUST BE FIRST
const mongoose = require("mongoose");
const app=require('./app');

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

console.log("Starting server...");

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });