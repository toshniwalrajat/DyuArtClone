// src/components/AboutCafe.jsx
import React from 'react';
import './AboutCafe.css';

function AboutCafe() {
  // Smooth scroll to the menu section
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-cafe-wrapper">
      <div className="about-cafe-content">
        <div className="about-cafe-image">
          <img src="/images/waffle-pour.avif" alt="Waffle sprinkle" />
        </div>
        <div className="about-cafe-text">
          <img src="/images/logo.png" alt="Dyu Art Cafe logo" className="about-cafe-logo" />
          <h2>Eat, Drink & Ideate</h2>
          <p>
            Dyu Art Cafe, located in the vibrant neighborhood of Koramangala in Bangalore, is a space where art, food,
            and coffee come together. We aim to create an atmosphere that’s both lively and peaceful, blending energy
            with relaxation. Whether you’re enjoying a delicious meal, sipping on expertly brewed coffee, or soaking in
            the creative vibes, Dyu Art Cafe is the place to be.
          </p>
          <p className="location-heading">Location:</p>
          <p className="location">
            Dyu Art Café<br />
            23 MIG, KHB Colony<br />
            Koramangala 5th Block,<br />
            Bangalore, Karnataka 560095, IN
          </p>
          <button className="explore-menu-btn" onClick={scrollToMenu}>
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutCafe;
