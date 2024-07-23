import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/CabinCard.css';

function CabinCard({ cabin }) {
  return (
    <div className="cabin-card">
      <img src={cabin.image} alt={cabin.name} className="cabin-image" />
      <div className="cabin-info">
        <h3 className="cabin-name">{cabin.name}</h3>
        <p className="cabin-description">{cabin.description}</p>
        <p className="cabin-price">Precio: ${cabin.price}</p>
        <Link to={`/info/${cabin.id}`} className="cabin-button">
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
