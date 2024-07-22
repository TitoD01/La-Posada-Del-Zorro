import React from 'react';
import '../Style/Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2>La Posada del Zorro</h2>
        <div className="contact-info">
          <p>Ruta X 65, bajada Ibáñez, Río Ibáñez, Aysén</p>
          <p>Teléfono: +56 9 8388 4343</p>
          <p>Email: contacto@laposadadelzorro.cl</p>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
