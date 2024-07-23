import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Style/InfoCab.css';
import cabana1 from '../img/cabanas/cabaña1.jpeg';
import cabana2 from '../img/cabanas/cabaña2.jpeg';
import quincho from '../img/cabanas/quincho1.jpeg';

const cabins = [
  { id: 1, name: 'Cabaña 1', description: 'Descripción de la cabaña 1', image: cabana1, price: "30.000", features: "Características", offers: "Ofrecimientos" },
  { id: 3, name: 'Quincho', description: 'Descripción del quincho', image: quincho, price: "30.000", features: "Características", offers: "Ofrecimientos" },
  { id: 2, name: 'Cabaña 2', description: 'Descripción de la cabaña 2', image: cabana2, price: "30.000", features: "Características", offers: "Ofrecimientos" },
];

function InfoCab({ onClose }) {
  const { id } = useParams();
  const navigate = useNavigate(); // Ahora puedes usar navigate aquí
  const cabin = cabins.find(cabin => cabin.id === parseInt(id));

  const handleClose = () => {
    onClose();
    navigate('/'); // Opcional: Navegar a otra página al cerrar
  };

  return (
    <div className="info-cab">
      <div className="info-cab-container">
        <button className="close-button" onClick={handleClose}>X</button>
        <h2>{cabin.name}</h2>
        <img src={cabin.image} alt={cabin.name} className="info-cab-image" />
        <p>{cabin.description}</p>
        <ul>
          <li>Que tiene: {cabin.features}</li>
          <li>Que ofrece: {cabin.offers}</li>
          <li>Precio por noche: {cabin.price}</li>
        </ul>
        <div className="map">
          {/* Aquí puedes insertar un componente de mapa, como Google Maps */}
        </div>
      </div>
    </div>
  );
}

export default InfoCab;
