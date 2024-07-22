import React from 'react';
import FlippCard from './FlippCard'; // Cambia el nombre del componente importado
import '../Style/CardGallery.css'; // Asegúrate de que la ruta sea correcta

function CardGallery() {
  const cabins = [
    { id: 1, name: 'Cabaña 1', description: 'Descripción de la cabaña 1', image: 'https://via.placeholder.com/300', price: "$30.000", airbnbLink: '#' },
    { id: 2, name: 'Cabaña 2', description: 'Descripción de la cabaña 2', image: 'https://via.placeholder.com/300', price: "$30.000", airbnbLink: '#' },
    { id: 3, name: 'Quincho', description: 'Descripción del quincho', image: 'https://via.placeholder.com/300', price: "$30.000", airbnbLink: '#' },
  ];

  return (
    <div className="card-gallery">
      <h2>Nuestras Cabañas</h2>
      <div className="cabin-cards-container">
        {cabins.map(cabin => (
          <FlippCard key={cabin.id} cabin={cabin} />
        ))}
      </div>
    </div>
  );
}

export default CardGallery;
