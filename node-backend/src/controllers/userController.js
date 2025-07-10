const User=require('../models/User');
const jwt=require('jsonwebtoken');
const History=require('../models/History');

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
};
const registerUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check if user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      const user = await User.create({
        username,
        email,
        password,
      });
  
      if (user) {
        res.status(201).json({
          _id: user._id,
          username: user.username,
          email: user.email,
          preferences: user.preferences,
          profilePicture: user.profilePicture,
          token: generateToken(user._id),
        });
      } else {
        res.status(400).json({ message: 'Invalid user data' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // @desc    Auth user & get token
  // @route   POST /api/users/login
  // @access  Public
  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
  
      // Check if user exists and password matches
      if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          preferences: user.preferences,
          profilePicture: user.profilePicture,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // @desc    Get user profile
  // @route   GET /api/users/profile
  // @access  Private
  const getUserProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      if (user) {
        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          preferences: user.preferences,
          profilePicture: user.profilePicture,
        });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // @desc    Update user profile
  // @route   PUT /api/users/profile
  // @access  Private
  const updateUserProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      if (user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        
        if (req.body.preferences) {
          user.preferences = req.body.preferences;
        }
        
        if (req.body.profilePicture) {
          user.profilePicture = req.body.profilePicture;
        }
        
        if (req.body.password) {
          user.password = req.body.password;
        }
  
        const updatedUser = await user.save();
  
        res.json({
          _id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
          preferences: updatedUser.preferences,
          profilePicture: updatedUser.profilePicture,
          token: generateToken(updatedUser._id),
        });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // @desc    Get user history
  // @route   GET /api/users/history
  // @access  Private
  const getUserHistory = async (req, res) => {
    try {
      const history = await History.find({ user: req.user._id })
        .sort({ timestamp: -1 })
        .limit(req.query.limit ? Number(req.query.limit) : 20);
  
      res.json(history);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    getUserHistory,
  };