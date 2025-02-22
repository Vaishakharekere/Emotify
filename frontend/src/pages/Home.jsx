import React from "react";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { TbCameraSelfie } from "react-icons/tb";
import { MdKeyboardVoice } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import Navbar from '../pages/nav';

// Replace ExampleCarouselImage with actual image components or imports
const ExampleCarouselImage = ({ text }) => (
  <div style={{ height: '300px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5>{text}</h5>
  </div>
);

function BorderExample() {
  return (
    
    <>
    <Navbar/>
    
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>Camera</Card.Header>
          <Card.Body>
            <TbCameraSelfie size={24} className="me-2" />
          </Card.Body>
        </Card>

        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Header>Voice</Card.Header>
          <Card.Body>
            <MdKeyboardVoice size={24} className="me-2" />
          </Card.Body>
        </Card>

        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Chat</Card.Header>
          <Card.Body>
            <BsChatDotsFill size={24} className="me-2" />
          </Card.Body>
        </Card>
      </div>

      <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default BorderExample;