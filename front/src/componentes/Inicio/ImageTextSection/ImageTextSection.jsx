// src/components/ImageTextSection.jsx
import React from 'react';
import styles from './ImageTextSection.module.css';

export function ImageTextSection() {
    return (
        <div className={styles.imageTextSection}>
            {/* <img src="../../assets/Home/Ultima_imagen_home.jpg" alt="Descripción de la imagen" className={styles.sectionImage} /> */}
            <div className={styles.sectionText}>
                <h2>Facilitamos soluciones para emprendedores y empresas innovadoras</h2>
                
            </div>
        </div>
    );
}

export default ImageTextSection;
