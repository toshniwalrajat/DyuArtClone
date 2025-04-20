import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Gallery from './pages/GalleryPage';
import HotBeverages from './components/Menu/HotBeverages';
import ColdBeverages from './components/Menu/ColdBeverages';
import Soups from './components/Menu/Soups';
import Salads from './components/Menu/Salads';
import VegetarianStarters from './components/Menu/VegetarianStarter';
import NonVegetarianStarters from './components/Menu/Non-VegetarianStarters';

function App() {
  const [showSalads, setShowSalads] = useState(false);
  const [showStarters, setShowStarters] = useState(false);
  const [showNonVegStarters, setShowNonVegStarters] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <HotBeverages />
              <ColdBeverages />
              <Soups />

              {!showSalads && (
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button onClick={() => setShowSalads(true)} style={buttonStyle}>
                    Load More
                  </button>
                </div>
              )}

              {showSalads && (
                <>
                  <Salads />

                  {!showStarters && (
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                      <button onClick={() => setShowStarters(true)} style={buttonStyle}>
                        Load More
                      </button>
                    </div>
                  )}
                </>
              )}

              {showStarters && (
                <>
                  <VegetarianStarters />

                  {!showNonVegStarters && (
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                      <button onClick={() => setShowNonVegStarters(true)} style={buttonStyle}>
                        Load More
                      </button>
                    </div>
                  )}
                </>
              )}

              {showNonVegStarters && <NonVegetarianStarters />}
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

const buttonStyle = {
  padding: '0.8rem 2rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '9999px',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default App;
