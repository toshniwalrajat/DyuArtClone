// src/pages/Gallery.jsx
import React from 'react';
import './GalleryPage.css';

const images = [
  '/images/gallery/G1.avif',
  '/images/gallery/G2.avif',
  '/images/gallery/G3.avif',
  '/images/gallery/G4.avif',
  '/images/gallery/G5.avif',
  '/images/gallery/G6.avif',
  '/images/gallery/G7.avif',
  '/images/gallery/G8.avif',
  '/images/gallery/G9.avif',
  '/images/gallery/G10.avif',
  '/images/gallery/G11.avif',
  '/images/gallery/G12.avif',
  '/images/gallery/G13.avif',
  '/images/gallery/G14.avif',
  '/images/gallery/G15.avif',
  '/images/gallery/G16.avif',
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
