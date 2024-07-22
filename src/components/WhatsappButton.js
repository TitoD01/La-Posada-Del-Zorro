// src/components/WhatsappButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../Style/WhatsappButton.css'; // Asegúrate de importar el archivo CSS

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/56983884343"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;
