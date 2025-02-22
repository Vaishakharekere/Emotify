import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UnderlineExample() {
  return (
    <Nav variant="underline" defaultActiveKey="/home" className="align-items-center">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/history">History</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/library">Library</Nav.Link>
      </Nav.Item>
      <Nav.Item className="ms-auto"> {/* Pushes search bar to the right */}
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav.Item>
    </Nav>
  );
}

export default UnderlineExample;