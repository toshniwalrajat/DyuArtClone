// src/App.jsx
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
import BreakfastOptions from './components/Menu/BreakfastOptions';
import Toasts from './components/Menu/Toasts';
import Omelettes from './components/Menu/Omelettes';
import VegetarianBurgers from './components/Menu/VegetarianBurgers';
import NonVegetarianBurgers from './components/Menu/NonVegetarianBurgers';
import VegetarianSandwiches from './components/Menu/VegetarianSandwiches';
import NonVegetarianSandwiches from './components/Menu/NonVegetarianSandwiches';
import VegetarianPizzas from './components/Menu/VegetarianPizzas';

function App() {
  const [loadRest, setLoadRest] = useState(false); // Single flag for all remaining content

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
              <Salads />

              {!loadRest && loadMoreBtn(() => setLoadRest(true))}

              {loadRest && (
                <>
                  <VegetarianStarters />
                  <NonVegetarianStarters />
                  <BreakfastOptions />
                  <Toasts />
                  <Omelettes />
                  <VegetarianBurgers />
                  <NonVegetarianBurgers />
                  <VegetarianSandwiches />
                  <NonVegetarianSandwiches />
                  <VegetarianPizzas />
                </>
              )}
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

// "Load More" button
function loadMoreBtn(onClick) {
  return (
    <div style={buttonWrapperStyle}>
      <button onClick={onClick} style={buttonStyle}>
        Load More
      </button>
    </div>
  );
}

const buttonWrapperStyle = {
  textAlign: 'center',
  marginTop: '2rem',
  padding: '0.1rem', // Padding for small screens
};

const buttonStyle = {
  padding: '0.6rem 2.5rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '9999px',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
  width: '80%',
  maxWidth: '200px', // Prevents button from stretching too much
  margin: '0 auto', // Center horizontally
  display: 'block',
};


export default App;
