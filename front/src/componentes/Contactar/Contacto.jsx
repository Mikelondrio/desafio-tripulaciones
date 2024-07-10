// Contacto.jsx
import React from 'react';
import styles from './Contacto.module.css';
import facebookIcon from '../../assets/LogosContacto/Facebook.jpg'; // Asegúrate de tener las rutas correctas
import instagramIcon from '../../assets/LogosContacto/Instagram.jpg';
import youtubeIcon from '../../assets/LogosContacto/Youtube.jpg';
import linkedinIcon from '../../assets/LogosContacto/SEPE.jpg';
import emailIcon from '../../assets/LogosContacto/Email.jpg';
import telephoneIcon from '../../assets/LogosContacto/Telefono.jpg';
import ubicationIcon from '../../assets/LogosContacto/Ubicacion.jpg';
import ContactForm from './ContactForm';


function Contacto() {
  return (
    <div className={styles.contacto}>
      <h1>Contáctanos</h1>
      <div className={styles.contactoSeccions}>
        <div className={styles.contactoSeccion}>
          <h2>Encuéntranos en</h2>
          <ul>
            <li><img src={emailIcon}></img> Email: email@email.com</li>
            <li><img src={telephoneIcon}></img> Teléfono: +34 666666666</li>
            <li><img src={ubicationIcon}></img> Dirección: La dirección blablabla</li>
          </ul>
        </div>
        <div className={styles.contactoSeccion}>
          <h2>Redes Sociales</h2>
          <ul>
            <li><img src={facebookIcon} alt="Facebook" /> Facebook</li>
            <li><img src={instagramIcon} alt="Instagram" /> Instagram</li>
            <li><img src={youtubeIcon} alt="Youtube" /> Youtube</li>
            <li><img src={linkedinIcon} alt="LinkedIn" /> LinkedIn</li>
          </ul>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default Contacto;