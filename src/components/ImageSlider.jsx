import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

// Replace with your images
import img1 from "/images/Slider1.jpg";
import img2 from "/images/Slider2.jpg";
import img3 from "/images/Slider3.jpg";
import img4 from "/images/Slider4.jpg";
import img5 from "/images/Slider5.jpg";

const images = [img1, img2, img3, img4, img5];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slider">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="slider-content">
          <div className="rating">
            Google: <span className="text-black">⭐⭐⭐⭐⭐</span> (4.4)
          </div>
          <h1>Brewed to Inspire</h1>
          <p>Your perfect spot for coffee, creativity, and relaxation.</p>
          <button onClick={scrollToMenu}>Explore menu</button>
        </div>

        <div className="nav-buttons">
          <span onClick={goToPrevious} className="arrow">&#10094;</span>
          <span onClick={goToNext} className="arrow">&#10095;</span>
        </div>

        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
