import React, { useState } from 'react';
import '../Style/Contact.css';
import emailjs from 'emailjs-com'; // Asegúrate de instalar emailjs-com

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Agregado
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Configura EmailJS
    emailjs.send('laposada', 'template_e6nwgma', formData, '_A8Nl1-ttqUn1gNYd')//falta la configuracion de un correo especial 
      .then((response) => {
        console.log('Mensaje enviado correctamente', response);
      }, (error) => {
        console.error('Error al enviar mensaje', error);
      });

    // Limpia el formulario
    setFormData({
      name: '',
      email: '',
      phone: '', // Limpia el campo de teléfono
      message: ''
    });
  };

  return (
    <div className="contact-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Número de Teléfono:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
