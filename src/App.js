
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div id="home">
          <Home />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
