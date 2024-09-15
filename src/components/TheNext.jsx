import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "../css/TheNext.css";

const Next = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/home/images/experience.jpg",
      title: "Experience",
      content: "Design-led transformation. From brand to experience",
      description:
        "Create unified digital experiences to enhance customer experience and build loyalty",
    },
    {
      id: 2,
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg",
      title: "Insight",
      content: "Do 100x more. Do it yourself",
      description: "Build an analytics-driven enterprise to monetize data.",
    },
    {
      id: 3,
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg",
      title: "Innovate ",
      content: "Bridge the physical and digital,with software and platforms",
      description:
        "Engineer digital-first proof and offerings to create new revenue streams",
    },
    {
      id: 4,
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/home/images/assure.jpg",
      title: "Accelerate",
      content: "Keep your core.keep innovating",
      description: "Find yor path to non-disruptive renewal of IT landscapes.",
    },
    {
      id: 5,
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/home/images/accelerate.jpg",
      title: "Assure",
      content: "Digital-trust.Assured",
      description:
        "      To be the catalyst for gr by solving complex cybersecurity problems, minimizing risks and building cyber resilience for your businesses across the globe",
    },
  ];

  return (
    <Container className="my-4">
      <Row className="text-center mb-4">
        <Col>
          <h2>The Next</h2>
          <p>
            We bring you powerful advantages to navigate your digital
            transformation
          </p>
        </Col>
      </Row>
      <Row className="d-none d-lg-flex mb-4">
        <Col lg={6} className="mb-4">
          <Card className="image-card">
            <Card.Img variant="top" src={cards[0].image} />
            <div className="overlay">
              <div className="text">
                <h5>{cards[0].title}</h5>
                <p>{cards[0].content}</p>
                <p>{cards[0].description}</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg={6}>
          <Row>
            {cards.slice(1).map((card) => (
              <Col xs={12} md={6} key={card.id} className="mb-4">
                <Card className="image-card">
                  <Card.Img variant="top" src={card.image} />
                  <div className="overlay">
                    <div className="text">
                      <h5>{card.title}</h5>
                      <p>{card.content}</p>
                      <span>{card.description}</span>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="d-none d-md-flex d-lg-none mb-4">
        {cards.map((card) => (
          <Col xs={12} sm={6} key={card.id} className="mb-4">
            <Card className="image-card">
              <Card.Img variant="top" src={card.image} />
              <div className="overlay">
                <div className="text">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="d-block d-sm-none">
        {cards.map((card) => (
          <Col xs={12} key={card.id} className="mb-4">
            <Card className="image-card">
              <Card.Img variant="top" src={card.image} />
              <div className="overlay">
                <div className="text">
                  <h5>{card.title}</h5>
                  <p>{card.content}</p>
                  <p>{card.description}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Next;
