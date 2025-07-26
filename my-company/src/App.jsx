import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Service from './components/Service'
import Contact from './components/Contact';

const App = () => {
  return (
    <div style={{ backgroundColor: 'burlywood', border: "4px solid brown", minHeight: '100vh', marginTop: '60px', padding: '20px' }}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;