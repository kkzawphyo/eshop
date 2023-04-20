import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slide.css";

const images = [
  "uploads/slide1.jpg",
  "uploads/slide2.jpg",
  "uploads/slide3.jpg",
  "uploads/slide4.jpg",
  "uploads/slide4.jpg",
];

const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
  }

function Slideshow() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} alt="ecommerce" className="home__image"/>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
