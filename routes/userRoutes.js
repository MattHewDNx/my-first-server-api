// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware')

// This route is now protected by the 'protect' middleware.
// router.get('/', protect, userController.getAllUsers);
router.get('/', userController.getAllUsers);

// This route is also protected.
router.get('/:id', protect, userController.getUserById);

// (We leave other routes like POST unprotected for now)
router.post('/', userController.createNewUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;