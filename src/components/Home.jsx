import React from "react";
import { Carousel } from "react-bootstrap";
import HeroSection from "./HeroSection";
import Next from "./TheNext";
import "../css/Home.css";

const Home = () => {
  const slides = [
    {
      imgSrc:
        "https://www.infosys.com/content/dam/infosys-web/en/global-resource/24/banner/reimagining-cloud-strategy-ai-first-enterprises-lead.jpg",
      title: "Cloud Survey Report 2024",
    },
    {
      imgSrc:
        "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/accelerate-digital-workplace-transformation-lead.jpg",
      title:
        "Infosys and The Financial Times unveil the 'FT Money Machine' Through Immersive Extended Reality Experience",
    },
    {
      imgSrc:
        "https://www.infosys.com/content/dam/infosys-web/en/global-resource/24/banner/ai-amplified-marketing-suite-lead.jpg",
      title: "Launched Infosys Aster. The AI Amplified Marketing Suite",
    },
  ];

  return (
    <div className="home-container" id="#home">
      <Carousel controls={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.imgSrc}
              alt={slide.title}
            />
            <Carousel.Caption className="carousel-caption">
              <div className="carousel-text">{slide.title}</div>
              <div className="carousel-button-container">
                <button className="carousel-button">Know More</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <HeroSection />
      <Next />
    </div>
  );
};

export default Home;
