import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <img src="/images/logo.png" alt="Dyu Art Cafe" className="footer-logo" />
          <h2 className="footer-heading">Escape the Koramangala hustle</h2>
          <a href="https://goo.gl/maps/UzzQJY1tErLmkJvW6" target="_blank" rel="noopener noreferrer" className="get-direction">
            Get Direction
          </a>
        </div>

        <div className="footer-info">
          <div className="footer-block">
            <h4>Opening hours:</h4>
            <p>Mon – Sun: 10:00 AM – 10:30 PM</p>
          </div>
          <div className="footer-block">
            <h4>Phone:</h4>
            <p>+91-96113 19774</p>
            <p>+91-98956 74244</p>
          </div>
          <div className="footer-block">
            <h4>Location:</h4>
            <p>Dyu Art Café<br />23 MIG, KHB Colony<br />Koramangala 5th Block,<br />Bangalore, Karnataka 560095, IN</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="https://www.instagram.com/dyuartcafe/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/dyuartcafe/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <p className="footer-credit">
            © 2024 — Designed By Pixelizt - <a href="#">Message Us</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
