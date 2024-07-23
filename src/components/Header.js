import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className='titulo'>La Posada del Zorro</h1>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
