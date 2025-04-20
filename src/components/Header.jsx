// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = () => {
    if (location.pathname === '/') {
      scrollToMenu();
    } else {
      sessionStorage.setItem('scrollToMenu', 'true');
      navigate('/');
    }
    handleLinkClick();
  };

  useEffect(() => {
    const scrollFlag = sessionStorage.getItem('scrollToMenu');
    if (scrollFlag === 'true') {
      sessionStorage.removeItem('scrollToMenu');
      setTimeout(() => {
        scrollToMenu();
      }, 300);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      {/* Left - Logo */}
      <div className="logo-container">
        <Link to="/" onClick={handleLinkClick}>
          <img src="/images/logo.png" alt="Dyu Art Cafe Logo" className="logo-image" />
        </Link>
      </div>

      {/* Right - Hamburger Icon */}
      {!isMobileMenuOpen && (
        <button className="mobile-menu-toggle custom-hamburger" onClick={toggleMobileMenu} aria-label="Open mobile menu">
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      )}

      {/* Desktop Nav */}
      <nav className="navigation desktop-nav">
        <button className="nav-link" onClick={handleMenuClick}>Menu</button>
        <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>Gallery</Link>
        <a
          href="https://www.swiggy.com/restaurants/dyu-art-cafe-koramangala-bangalore-263485"
          className="order-button desktop-only"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Now
        </a>
      </nav>

      {/* Mobile Nav Drawer */}
      <nav className={`navigation mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-top">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/images/logo.png" alt="Dyu Art Cafe Logo" className="mobile-logo" />
          </Link>
          <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close mobile menu">
            <IoMdClose size={28} />
          </button>
        </div>

        <div className="mobile-nav-links">
          <button className="nav-link" onClick={handleMenuClick}>Menu</button>
          <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>Gallery</Link>
          <a
            href="https://www.google.com/maps/place/Dyu+Art+Cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={handleLinkClick}
          >
            Get Direction
          </a>
          <a
            href="https://www.swiggy.com/restaurants/dyu-art-cafe-koramangala-bangalore-263485"
            className="order-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            Order Now
          </a>
        </div>

        <div className="mobile-nav-bottom">
          <div className="social-icons">
            <a href="https://instagram.com/dyuartcafe" target="_blank" rel="noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com/dyuartcafe" target="_blank" rel="noreferrer">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
