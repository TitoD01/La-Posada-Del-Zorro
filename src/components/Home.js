import React from 'react';
import Cabins from './Cabins'; // Asegúrate de importar el componente
import '../Style/Home.css';

function Home() {
  return (
    <div className="home">
      <Cabins/> {/* Agrega el componente CardGallery aquí */}
    </div>
  );
}

export default Home;
