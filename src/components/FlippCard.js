import React from 'react';
import '../Style/FlippCard.css'; // Importa el CSS para el efecto de volteo

function FlippCard({ image, name, description, price }) {
  return (
    <div className="flippable-card">
      <div className="flippable-card-inner">
        <div className="flippable-card-front">
          <img src={image} alt={name} className="flippable-card-image" />
          <div className="flippable-card-content">
            <h3 className="flippable-card-title">{name}</h3>
            <p className="flippable-card-price">Precio: ${price}</p>
          </div>
        </div>
        <div className="flippable-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FlippCard;
