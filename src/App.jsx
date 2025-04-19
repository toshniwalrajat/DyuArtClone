// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Gallery from './pages/GalleryPage';
import HotBeverages from './components/Menu/HotBeverages';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <ImageSlider />
            <HotBeverages /> {/* Menu Section */}
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
