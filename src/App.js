import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cabins from './components/Cabins';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cabins" element={<Cabins />} />
          </Routes>
        </div>
        <Footer />
        <WhatsappButton />
      </div>
    </Router>
  );
}

export default App;
