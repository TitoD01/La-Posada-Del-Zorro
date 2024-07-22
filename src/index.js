import React from 'react';
import ReactDOM from 'react-dom/client'; // Nota el cambio en la importación
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
