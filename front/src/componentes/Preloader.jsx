// Preloader.jsx
import React from 'react';
import styles from './Preloader.module.css'; // Importa los estilos del preloader

const Preloader = () => {
  return (
    <div className={styles.preloaderOverlay}>
      <img src="/preloader.gif" alt="Loading..." className={styles.preloader} />
    </div>
  );
};

export default Preloader;
