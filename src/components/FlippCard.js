import React from 'react';
import '../Style/CabinCard.css'; // Asegúrate de que la ruta sea correcta

function FlippCard({ cabin }) { // Cambia 'card' a 'cabin' para coincidir con el nombre en `CardGallery`
  return (
    <div className="cabin-card">
      <div className="cabin-card-inner">
        {/* Parte frontal de la tarjeta */}
        <div className="cabin-card-front">
          <img src={cabin.image} alt={cabin.name} className="cabin-image" />
        </div>
        {/* Parte trasera de la tarjeta */}
        <div className="cabin-card-back">
          <div className="cabin-info">
            <h3 className="cabin-name">{cabin.name}</h3>
            <p className="cabin-description">{cabin.description}</p>
            <p className="cabin-price">Precio: {cabin.price}</p>
            <a href={cabin.airbnbLink} target="_blank" rel="noopener noreferrer" className="cabin-button">
              Ver en Airbnb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlippCard;
