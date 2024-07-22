import React from 'react';
import CabinCard from './CabinCard';
import '../Style/Cabins.css';

function Cabins() {
  const cabins = [
    { id: 1, name: 'Cabaña 1', description: 'Descripción de la cabaña 1', image: 'https://via.placeholder.com/300', price: 100 },
    { id: 2, name: 'Cabaña 2', description: 'Descripción de la cabaña 2', image: 'https://via.placeholder.com/300', price: 150 },
    { id: 2, name: 'Cabaña 2', description: 'Descripción de la cabaña 2', image: 'https://via.placeholder.com/300', price: 150 },

    // Agrega más cabañas según sea necesario
  ];

  return (
    <div className="cabins">
      <h2>Nuestras Cabañas</h2>
      <div className="cabin-cards-container">
        {cabins.map(cabin => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </div>
    </div>
  );
}

export default Cabins;
