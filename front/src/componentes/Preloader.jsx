import React from 'react';
import styles from './Preloader.module.css'; // Importa los estilos del preloader

const Preloader = () => {
  return (
    <div className={styles.preloaderOverlay}>
      <div className={styles.preloaderContainer}>
        <img src="/Logo_animado.gif" alt="Cargando Silver Site" className={styles.preloader} />
        <p className={styles.loadingText}>Cargando Silver Site . . .</p>
      </div>
    </div>
  );
};

export default Preloader;
