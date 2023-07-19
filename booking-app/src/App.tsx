import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/menu/Menu';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Booking from './components/booking/Booking';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
