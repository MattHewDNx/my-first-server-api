// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Read the connection string from the environment variables
    const connectionString = process.env.DATABASE_URI;
    
    // Check if the variable is loaded
    if (!connectionString) {
      console.error('DATABASE_URI is not defined in .env file');
      process.exit(1);
    }

    await mongoose.connect(connectionString);
    
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection FAILED:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;