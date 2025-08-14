const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
connectDB();
const app = express();
const PORT = 3000;

app.use(cors()); // Use the cors middleware
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Your global error handler from Day 74
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});