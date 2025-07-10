const History = require('../models/History');
const musicRecommendation = require('../services/musicRecommendation');

// @desc    Get music recommendations based on emotion
// @route   POST /api/music/recommendations
// @access  Private
const getMusicRecommendations = async (req, res) => {
  try {
    const { emotion, source } = req.body;
    
    if (!emotion || !source) {
      return res.status(400).json({ message: 'Emotion and source are required' });
    }

    // Get recommendations based on emotion
    const recommendations = await musicRecommendation.getRecommendationsByEmotion(
      emotion,
      req.user?.preferences?.genres || []
    );

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Save a song to user history
// @route   POST /api/music/history
// @access  Private
const addToHistory = async (req, res) => {
  try {
    const { songId, songName, artist, emotion, source } = req.body;

    if (!songId || !songName || !artist || !emotion || !source) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const historyEntry = await History.create({
      user: req.user._id,
      songId,
      songName,
      artist,
      emotion,
      source,
    });

    res.status(201).json(historyEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get trending songs
// @route   GET /api/music/trending
// @access  Public
const getTrendingSongs = async (req, res) => {
  try {
    // In a real application, this would be more sophisticated
    // For now, we'll just get the most played songs from history
    const trendingSongs = await History.aggregate([
      {
        $group: {
          _id: '$songId',
          count: { $sum: 1 },
          songName: { $first: '$songName' },
          artist: { $first: '$artist' },
          emotion: { $first: '$emotion' },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    res.json(trendingSongs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMusicRecommendations,
  addToHistory,
  getTrendingSongs,
};
