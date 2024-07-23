import React from 'react';
import CabinCard from './CabinCard';
import '../Style/Cabins.css';

import cabana1 from '../img/cabanas/cabaña1.jpeg';
import cabana2 from '../img/cabanas/cabaña2.jpeg';
import quincho from '../img/cabanas/quincho1.jpeg';

function Cabins() {
  const cabins = [
    { id: 1, name: 'Cabaña 1', description: 'Descripción de la cabaña 1', image: cabana1, price: "30.000" },
    { id: 3, name: 'Quincho', description: 'Descripción del quincho', image: quincho, price: "30.000" },
    { id: 2, name: 'Cabaña 2', description: 'Descripción de la cabaña 2', image: cabana2, price: "30.000" },
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
