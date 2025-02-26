import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar"; // Import Navbar
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaHome, FaMusic, FaSearch, FaHistory, FaUser } from "react-icons/fa"; 
import Logo from '../assets/logo.png'; // Import logo image

const TopNav = ({ isLoggedIn, navigate }) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand href="#"><img src={Logo} alt="Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />Emotify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        {!isLoggedIn ? (
          <Button variant="primary" onClick={() => navigate("/auth")}>Register</Button>
        ) : (
          <Button variant="danger" onClick={() => navigate("/profile")} aria-label="Profile">
            <FaUser /> Profile
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const BottomNav = () => {
  return (
    <Navbar fixed="bottom" bg="black" variant="drak" color="#E7BCF1" className="justify-content-between py-2">
      <Nav className="me-auto gap-5">
        <Nav.Link href="#home" className="text-light"><FaHome size={24} /></Nav.Link>
        <Nav.Link href="#library" className="text-light"><FaMusic size={24} /></Nav.Link>
        <Nav.Link href="#search" className="text-light"><FaSearch size={24} /></Nav.Link>
        <Nav.Link href="/history" className="text-light"><FaHistory size={24} /></Nav.Link>
      </Nav>

      {/* Search Bar */}
      <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
};

// Export components as named exports
export { TopNav, BottomNav };
