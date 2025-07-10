const express = require('express');
const router = express.Router();
const { protect } = require('./../middleware/');

const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUserHistory,
} = require('../controllers/userController');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.get('/history', protect, getUserHistory);

module.exports = router;
