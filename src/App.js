import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cabins from './components/Cabins';
import Footer from './components/Footer';
import Contact from './components/Contact';
import InfoCab from './components/InfoCab';
import WhatsappButton from './components/WhatsappButton';
import './App.css';

function App() {
  const [isInfoCabOpen, setIsInfoCabOpen] = useState(false);

  const handleCloseInfoCab = () => {
    setIsInfoCabOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/info/:id" 
              element={<InfoCab onClose={handleCloseInfoCab} />} 
            />
          </Routes>
        </div>
        <Footer isInfoCabOpen={isInfoCabOpen} />
        <WhatsappButton />
      </div>
    </Router>
  );
}

export default App;
