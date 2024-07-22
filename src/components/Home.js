import React from 'react';
import CardGallery from './CardGallery'; // Asegúrate de importar el componente
import '../Style/Home.css';

function Home() {
  return (
    <div className="home">
      <CardGallery /> {/* Agrega el componente CardGallery aquí */}
    </div>
  );
}

export default Home;
