// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const emotionRoutes = require('./routes/emotionRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize environment variables
dotenv.config();

// Express app setup
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('🎧 Emotify API is running...');
});

app.use('/api/emotions', emotionRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
