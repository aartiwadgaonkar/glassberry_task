import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaArrowUp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Container className="p-2" id="footer">
      <Row>
        <Col xs={12} md={6} lg={2} className="mb-3">
          <div>
            <h3>
              <b>Company</b>
            </h3>
            <ul className="p-0">
              <li style={{ listStyle: "none" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Navigate your next
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Careers
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  ESG
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Investors
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Newsroom
                </a>
              </li>

              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Alumni
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <div>
            <h3>
              <b>Subsidiaries</b>
            </h3>
            <ul className="p-0">
              <li style={{ listStyle: "none" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  EdgeVerve Systems
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Infosys BPM
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Infosys Consulting
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Infosys Public Services
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <div>
            <h3>
              <b>Programs</b>
            </h3>
            <ul className="p-0">
              <li style={{ listStyle: "none" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Infosys Foundation
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Infosys Foundation USA
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Infosys Science Foundation
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Infosys Leadership Institute
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} lg={2} className="mb-3">
          <div>
            <h3>
              <b>Support</b>
            </h3>
            <ul className="p-0">
              <li style={{ listStyle: "none" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Terms of Use
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Privacy Statement
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Cookie Policy
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Safe Harbour Provision
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Site Map
                </a>
              </li>
              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Modern Slavery Statement
                </a>
              </li>

              <li style={{ listStyle: "none", marginTop: "1vh" }}>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Payment Guide for Suppliers
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} lg={2} className="mb-3">
          <div>
            <h3>
              <b>Connect with us</b>
            </h3>
            <div>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://twitter.com"
                className="me-2"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://facebook.com"
                className="me-2"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://linkedin.com"
                className="me-2"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://youtube.com"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Button
        variant="dark"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: visible ? "inline" : "none",
        }}
      >
        <FaArrowUp />
      </Button>
    </Container>
  );
}

export default Footer;
