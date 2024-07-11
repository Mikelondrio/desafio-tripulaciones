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
            <li><img src={emailIcon}></img> <strong>Email:</strong>&nbsp; info@seniorityai.com</li>
            <li><img src={telephoneIcon}></img> <strong>Teléfono:</strong>&nbsp; +34 603180484</li>
            <li><img src={ubicationIcon}></img> <strong>Dirección:</strong>&nbsp; Parque Tecnológico de &nbsp;&nbsp;Málaga-CADE</li>
          </ul>
        </div>
        <div className={styles.contactoSeccion}>
          <h2>Redes Sociales</h2>
          <ul>
            <a href="https://www.facebook.com/people/Seniorityai/100089844576324/" target="_blank" rel="noopener noreferrer" className={styles.nostylelink}>
              <li><img src={facebookIcon} alt="Facebook" /> Facebook</li>
            </a>
            <a href="https://www.instagram.com/seniority_ai?igsh=bHY5ZWhiY294NWpn" target="_blank" rel="noopener noreferrer" className={styles.nostylelink}>  
              <li><img src={instagramIcon} alt="Instagram" /> Instagram</li>
            </a>
            <a href="https://www.youtube.com/@seniority_ai" target="_blank" rel="noopener noreferrer" className={styles.nostylelink}>
              <li><img src={youtubeIcon} alt="Youtube" /> Youtube</li>
            </a>
            <a href="https://www.linkedin.com/company/seniorityai/" target="_blank" rel="noopener noreferrer" className={styles.nostylelink}>
              <li><img src={linkedinIcon} alt="LinkedIn" /> LinkedIn</li>
            </a>
          </ul>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default Contacto;