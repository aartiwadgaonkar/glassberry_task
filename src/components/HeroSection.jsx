import React from 'react';

const HeroSection = () => {

  const sectionStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/iga-swiatek-leadimg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    color: '#fff',
    textAlign: 'left', 
    padding: '0 20px', 
  };

  const textContainerStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    color: 'black',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const cornerImageStyle = {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    padding: '10px',
  };

  const cornerImageImgStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  return (
    <section style={sectionStyle}>
      <div style={textContainerStyle}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
          Ring the Sound of Opportunity,<p> Move 1,000+1,000 Lives Forward</p>
        </h1>
        <button 
          style={buttonStyle} 
          className="cta-button"
        >
          Read More
        </button>
      </div>
      <div style={cornerImageStyle}>
        <img
          src="https://www.example.com/your-image.jpg"
          alt="Corner Image"
          style={cornerImageImgStyle}
        />
      </div>
    </section>
  );
};

export default HeroSection;
