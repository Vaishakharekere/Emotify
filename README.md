# 🎵 Emotify - Emotion Based Music Recommender

**Emotify** is a real-time emotion-driven music recommendation platform that detects a user's facial emotion and curates music accordingly. Built with a focus on intuitive UI, intelligent backend, and real-time processing, Emotify bridges the gap between mood and music.



---

## 📌 Features

- 🎭 **Facial Emotion Detection** (Live Camera Feed)
- 🎶 **Real-time Music Recommendations** based on emotion
- 👤 **User Authentication & Profiles**
- 📈 **Interactive Dashboard** with session and emotion logs
- 💽 **Spotify/Youtube API Integration** for track streaming
- ☁️ **Cloud-based Backend** (Firebase/Supabase Integration)
- 📱 **Mobile-Responsive UI** with modern design

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js + Tailwind CSS
- Webcam.js / TensorFlow.js (for emotion recognition)
- Framer Motion for animations

### 🔹 Backend
- Node.js + Express (API Services)
- Firebase / Supabase (Auth & Storage)
- MongoDB / Firestore (User & Log Data)

### 🔹 ML/AI
- Pre-trained CNN Model for Emotion Detection
- Real-time inference using TensorFlow.js

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js >= 16
- Python (for model training - optional)
- Firebase/Supabase credentials
- Webcam enabled

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/emotify.git
cd emotify

# Install dependencies
npm install

# Run the app
npm run dev
