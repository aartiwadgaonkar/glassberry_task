import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="bg-dark navbar-dark custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-auto">
          <p>Infosys</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" smooth={true} duration={500}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" smooth={true} duration={500}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" smooth={true} duration={500}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" smooth={true} duration={500}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
