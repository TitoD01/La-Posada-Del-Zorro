import React from 'react';
import '../Style/CabinCard.css'; // Asegúrate de tener el archivo CSS para los estilos

function CabinCard({ cabin }) {
  return (
    <div className="cabin-card">
      <img src={cabin.image} alt={cabin.name} className="cabin-image" />
      <div className="cabin-info">
        <h3 className="cabin-name">{cabin.name}</h3>
        <p className="cabin-description">{cabin.description}</p>
        <p className="cabin-price">Precio: ${cabin.price}</p>
        <a href={cabin.airbnbLink} target="_blank" rel="noopener noreferrer" className="cabin-button">
          Ver más
        </a>
      </div>
    </div>
  );
}

export default CabinCard;
