import React from 'react';
import FlippCard from './FlippCard';
import '../Style/CardGallery.css'; // Asegúrate de tener los estilos adecuados

const cardData = [
  {
    image: 'https://via.placeholder.com/300',
    name: 'Cabaña 1',
    description: 'Descripción detallada de la cabaña 1 con más información sobre sus características y comodidades.',
    price: 100
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Cabaña 2',
    description: 'Descripción detallada de la cabaña 2 con más información sobre sus características y comodidades.',
    price: 150
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Cabaña 2',
    description: 'Descripción detallada de la cabaña 2 con más información sobre sus características y comodidades.',
    price: 150
  }
  //agregar tarjetas de cabañs
];

function CardGallery() {
  return (
    <div className="card-gallery">
      {cardData.map((card, index) => (
        <FlippCard
          key={index}
          image={card.image}
          name={card.name}
          description={card.description}
          price={card.price}
        />
      ))}
    </div>
  );
}

export default CardGallery;
