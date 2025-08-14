// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Paste your connection string here.
    // IMPORTANT: Replace <username> and <password> with the user you created in Atlas.
    const connectionString = 'mongodb+srv://matthew:Wewey15@cluster0.8e04pl0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    
    await mongoose.connect(connectionString);
    
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection FAILED:', error.message);
    process.exit(1); // Exit the application if the connection fails
  }
};

module.exports = connectDB;