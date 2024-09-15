import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Card } from "react-bootstrap";
import { BsPlus, BsX } from "react-icons/bs";
import ReadMore from "./ReadMore";

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleShow2 = () => setShowModal2(true);
  const handleShow3 = () => setShowModal3(true);
  const handleShow4 = () => setShowModal4(true);
  const handleClose = () => setShowModal(false);
  const handleClose2 = () => setShowModal2(false);
  const handleClose3 = () => setShowModal3(false);
  const handleClose4 = () => setShowModal4(false);

  return (
    <>
      <Container className="p-3" id="services">
        <Row>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <Card className="text-center p-3 border-0">
              <h1>Service Offering</h1>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
                onClick={handleShow}
                className="rounded-button d-flex align-items-center justify-content-center"
              >
                <BsPlus className="me-2" />
                <span>Open</span>
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <Card className="text-center p-3 border-0">
              <h1>Explore Industries</h1>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
                onClick={handleShow2}
                className="rounded-button d-flex align-items-center justify-content-center"
              >
                <BsPlus className="me-2" />
                <span>Open</span>
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <Card className="text-center p-3 border-0">
              <h1>Our</h1>
              <h1>Platforms</h1>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
                onClick={handleShow3}
                className="rounded-button d-flex align-items-center justify-content-center"
              >
                <BsPlus className="me-2" />
                <span>Open</span>
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <Card className="text-center p-3 border-0">
              <h1>Navigate Your Next</h1>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
                onClick={handleShow4}
                className="rounded-button d-flex align-items-center justify-content-center"
              >
                <BsPlus className="me-2" />
                <span>Open</span>
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <ReadMore />
    
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body
          style={{
            position: "relative", 
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.infosys.com/content/dam/infosys-web/en/home/images/digital_img.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "50px",
            height: "100%",
            border: "none", 
          }}
        >
          <Button
            variant="light"
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent", 
              border: "none", 
              color: "white", 
              borderRadius: "50%",
              padding: "0.5rem", 
              zIndex: 2, 
            }}
          >
            <BsX style={{ fontSize: "1.5rem" }} /> 
          </Button>
          <Row
            style={{
              position: "relative",
              zIndex: 2, 
              color: "white", 
              height: "100%", 
              alignItems: "flex-start", 
            }}
          >
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" 
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Bring the power of AI to build a deeply</h3>
                <p>
                  Infosys Nia is helping organizations succeed with
                  enterprise-grade artificial intelligence by simplifying
                  complex tasks and amplifying capabilities to allow the
                  enterprise to reinvent itself and do things it could never do
                  before.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" 
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Explore platforms</h3>
                <p>EdgeVerve</p>
                <p>Infosys Finacle</p>
                <p>Infosys Nia</p>
                <p>Panaya</p>
                <p>Infosys Equinox</p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
     
      <Modal show={showModal2} onHide={handleClose2} centered>
        <Modal.Body
          style={{
            position: "relative", // Ensure the button can be positioned absolutely relative to this container
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.infosys.com/content/dam/infosys-web/en/home/images/truly-strategic-partner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "50px",
            height: "100%",
            border: "none", // Remove default border if present
          }}
        >
          <Button
            variant="light"
            onClick={handleClose2}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent", // Transparent background
              border: "none", // No border
              color: "white", // White icon color
              borderRadius: "50%", // Rounded button
              padding: "0.5rem", // Adjust button size
              zIndex: 2, // Ensure the button is above the overlay
            }}
          >
            <BsX style={{ fontSize: "1.5rem" }} /> {/* White close icon */}
          </Button>
          <Row
            style={{
              position: "relative",
              zIndex: 2, // Ensure text is above the overlay
              color: "white", // White text for better readability
              height: "100%", // Make text row take the full height
              alignItems: "flex-start", // Align items to the top
            }}
          >
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" // Align content to the top
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Bring the power of AI to build a deeply</h3>
                <p>
                  Infosys Nia is helping organizations succeed with
                  enterprise-grade artificial intelligence by simplifying
                  complex tasks and amplifying capabilities to allow the
                  enterprise to reinvent itself and do things it could never do
                  before.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" // Align content to the top
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Explore platforms</h3>
                <p>EdgeVerve</p>
                <p>Infosys Finacle</p>
                <p>Infosys Nia</p>
                <p>Panaya</p>
                <p>Infosys Equinox</p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    
      <Modal show={showModal3} onHide={handleClose3} centered>
        <Modal.Body
          style={{
            position: "relative", 
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.infosys.com/content/dam/infosys-web/en/home/images/automated-production.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "50px",
            height: "100%",
            border: "none", 
          }}
        >
          <Button
            variant="light"
            onClick={handleClose3}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent", 
              border: "none", 
              color: "white", 
              borderRadius: "50%",
              padding: "0.5rem",
              zIndex: 2, 
            }}
          >
            <BsX style={{ fontSize: "1.5rem" }} /> 
          </Button>
          <Row
            style={{
              position: "relative",
              zIndex: 2, 
              color: "white", 
              height: "100%", 
              alignItems: "flex-start", 
            }}
          >
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" 
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Bring the power of AI to build a deeply</h3>
                <p>
                  Infosys Nia is helping organizations succeed with
                  enterprise-grade artificial intelligence by simplifying
                  complex tasks and amplifying capabilities to allow the
                  enterprise to reinvent itself and do things it could never do
                  before.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" 
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Explore platforms</h3>
                <p>EdgeVerve</p>
                <p>Infosys Finacle</p>
                <p>Infosys Nia</p>
                <p>Panaya</p>
                <p>Infosys Equinox</p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
   
      <Modal show={showModal4} onHide={handleClose4} centered>
        <Modal.Body
          style={{
            position: "relative", 
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/responsive/newdesign/navigate-next.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "50px",
            height: "100%",
            border: "none", 
          }}
        >
          <Button
            variant="light"
            onClick={handleClose4}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent", 
              border: "none", 
              color: "white", 
              borderRadius: "50%",
              padding: "0.5rem",
              zIndex: 2, 
            }}
          >
            <BsX style={{ fontSize: "1.5rem" }} /> 
          </Button>
          <Row
            style={{
              position: "relative",
              zIndex: 2,
              color: "white", 
              height: "100%", 
              alignItems: "flex-start",
            }}
          >
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" 
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Bring the power of AI to build a deeply</h3>
                <p>
                  Infosys Nia is helping organizations succeed with
                  enterprise-grade artificial intelligence by simplifying
                  complex tasks and amplifying capabilities to allow the
                  enterprise to reinvent itself and do things it could never do
                  before.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-start" 
              style={{
                padding: "20px",
              }}
            >
              <div>
                <h3>Explore platforms</h3>
                <p>EdgeVerve</p>
                <p>Infosys Finacle</p>
                <p>Infosys Nia</p>
                <p>Panaya</p>
                <p>Infosys Equinox</p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Services;
