import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import { Container, Button, Carousel } from "react-bootstrap";
import { FaCamera, FaMicrophone, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TopNav, BottomNav } from '../pages/nav'; // Import named exports

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const navigate = useNavigate();

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev); // Toggle login state for demonstration
  };

  return (
    <div>
      {/* Top Navigation */}
      <TopNav isLoggedIn={isLoggedIn} navigate={navigate} />

      {/* Main Content */}
      <Container className="text-center my-5">
        <h1>Welcome to Emotify</h1>
        <p>Experience music that matches your emotions.</p>

        <div className="mt-4 text-center">
  {isLoggedIn ? (
    <div className="d-flex justify-content-center gap-3">
      <Button variant="primary" className="btn-lg d-flex align-items-center gap-2">
        <FaCamera size={28} /> Camera
      </Button>
      <Button variant="success" className="btn-lg d-flex align-items-center gap-2">
        <FaMicrophone size={28} /> Voice
      </Button>
      <Button variant="warning" className="btn-lg d-flex align-items-center gap-2">
        <FaComments size={28} /> Chat
      </Button>
    </div>
  ) : (
    <p className="text-muted">Please login to access voice, camera features.</p>
  )}
</div>


        {/* Carousel */}
        <Carousel className="mt-4">
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src="https://i.pinimg.com/474x/a4/d9/53/a4d95318f57a312066fbfe3c85079716.jpg"alt="First slide" />
            <Carousel.Caption>
              <h3>Get Started with Emotify</h3>
              <p>Let Emotify play music that matches your emotions.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="https://i.pinimg.com/474x/1f/6f/c0/1f6fc036744b7ba4ca73b21c9bddfd8b.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h3>AI-Powered Music Selection</h3>
              <p>Our AI analyzes your mood to curate the perfect playlist.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://i.pinimg.com/474x/c7/e5/62/c7e5622cf852922dd5fb285288802ea2.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Connect and Enjoy</h3>
              <p>Seamless music streaming with Spotify integration.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Login Toggle Button for Testing */}
        <div className="mt-4">
          <Button onClick={handleLoginToggle}>
            {isLoggedIn ? "Logout" : "Start"}
          </Button>
        </div>
      </Container>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default LandingPage;
