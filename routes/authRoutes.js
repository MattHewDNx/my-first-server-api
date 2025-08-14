// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for POST /api/auth/register
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser); // Add this line

module.exports = router;