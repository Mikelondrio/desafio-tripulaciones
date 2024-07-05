import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <div className="contacto">

      <h1>Contáctanos</h1>
      <div className="contactoSeccions">
        <div className="contacto-seccion">
          <h2>Encuéntranos en</h2>
          <ul>
            <li><i className="icon-email"></i> Email: email@email.com</li>
            <li><i className="icon-phone"></i> Teléfono: +34 666666666</li>
            <li><i className="icon-location"></i> Dirección: La dirección blablabla</li>
          </ul>
        </div>
        <div className="contacto-seccion">
          <h2>Redes Sociales</h2>
          <ul>
            <li><i className="icon-facebook"></i> Facebook</li>
            <li><i className="icon-instagram"></i> Instagram</li>
            <li><i className="icon-youtube"></i> Youtube</li>
            <li><i className="icon-linkedin"></i> LinkedIn</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Contacto;