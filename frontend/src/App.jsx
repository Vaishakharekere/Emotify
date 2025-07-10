import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/auth';
import Profile from './pages/Profile';
import History from './pages/History'; // Import Profile page
import { TopNav, BottomNav } from './pages/nav';

const App = () => {
  return (
    <BrowserRouter>
      <TopNav isLoggedIn={true} navigate={() => {}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} /> // Add profile route
        <Route path="/history" element={<History />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default App;
