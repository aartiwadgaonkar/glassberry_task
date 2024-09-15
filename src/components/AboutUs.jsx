import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="about-us-section py-5" id="about">
      <Row className="text-center mb-4">
        <Col>
          <h2>About Us</h2>
          <p>
            A global leader in next-generation digital services and consulting
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={12} md={4}>
          <div className="statistic-box">
            <h3>56</h3>
            <p>countries where we have trusting clients</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="statistic-box">
            <h3>US$18.7 billion</h3>
            <p>total revenue (LTM)</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="statistic-box">
            <h3>24+</h3>
            <p>million training (hours) conducted for employees, globally</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
