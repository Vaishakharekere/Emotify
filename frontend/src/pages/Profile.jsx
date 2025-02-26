import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  // Example subscription plans
  const plans = [
    { id: 1, name: 'Basic', price: '$9.99/month', benefits: ['Access to basic features'] },
    { id: 2, name: 'Premium', price: '$19.99/month', benefits: ['Access to premium features', 'Priority support', 'Ad-free experience'] },
    { id: 3, name: 'Ultimate', price: '$29.99/month', benefits: ['All premium benefits', 'Exclusive content', '24/7 support'] },
  ];

  useEffect(() => {
    // Fetch user data from local storage
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedProfilePicture = localStorage.getItem('profilePicture');

    if (storedName && storedEmail) {
      setName(storedName);
      setEmail(storedEmail);
      setProfilePicture(storedProfilePicture || 'https://via.placeholder.com/150');
    }
  }, []);

  return (
    <>
      <Container className="text-center mt-5">
        <h1>Profile Page</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="mt-4 shadow" style={{ maxWidth: '400px', margin: 'auto' }}>
              <Card.Img variant="top" src={profilePicture} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Email: {email}</Card.Text>
                <Button variant="primary">Edit Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* Subscription Section */}
      <Container fluid className="text-center mt-5 px-3">
        <h2>Subscription Plans</h2>
        <Row className="justify-content-center mx-0">
          {plans.map((plan) => (
            <Col key={plan.id} xs={12} md={6} lg={4} className="mb-4">
              <Card className="shadow text-center" style={{ maxWidth: '350px', margin: 'auto' }}>
                <Card.Body>
                  <Card.Title className="fw-bold">{plan.name}</Card.Title>
                  <Card.Text className="fs-5 text-primary">{plan.price}</Card.Text>
                  <ul className="text-start">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  <Button variant="success" className="mt-3 w-100">Subscribe</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;