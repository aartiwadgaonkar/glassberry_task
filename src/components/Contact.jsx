import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/Contact.css";

import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <Container className="contact-us-section py-5">
          <Row>
            <Col md={6} className="d-flex flex-column mt-5">
              <h1 className="text-center mb-4">
                Let's help you navigate your next
              </h1>
              <Button variant="dark" className="w-50 mb-4">
                Contact Us
              </Button>
            </Col>

            <Col md={6}>
              <section className="container my-5">
                <h2>Contact Us</h2>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your message"
                    />
                  </Form.Group>
                  <Button
                    variant="dark"
                    style={{ marginTop: "1rem" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </section>
            </Col>
          </Row>
          <Footer />
        </Container>
      </section>
    </>
  );
};

export default Contact;
