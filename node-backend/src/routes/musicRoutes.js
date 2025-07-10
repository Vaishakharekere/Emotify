const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getMusicRecommendations,
  addToHistory,
  getTrendingSongs,
} = require('../controllers/musicController');

// Public routes
router.get('/trending', getTrendingSongs);

// Protected routes
router.post('/recommendations', protect, getMusicRecommendations);
router.post('/history', protect, addToHistory);

module.exports = router;
