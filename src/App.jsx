// src/App.jsx
import React from 'react';
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
import NonVegetarianPizzas from './components/Menu/NonVegetarianPizzas';
import Desserts from './components/Menu/Desserts';

import AboutCafe from './components/AboutCafe';
import Footer from './components/Footer'; // Footer Import

function App() {
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
              <NonVegetarianPizzas />
              <Desserts />
              <AboutCafe />
              <Footer /> {/* Footer shown at the end of homepage */}
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Gallery />
              <Footer /> {/* Footer visible in gallery as well */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
