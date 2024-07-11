import React from 'react';
import styles from './InfoModal.module.css'; // Cambiar el nombre del archivo de CSS para reflejar el componente actualizado

const InfoModal = () => {
  return (
    <div className={styles.InfoModalOverlay}>
      <div className={styles.InfoModalContainer}>
        <img src="/Logo_animado.gif" alt="Cargando Silver Site" className={styles.InfoModal} />
        <p className={styles.loadingText}>Analizando la web . . .</p>
      </div>
    </div>
  );
};

export default InfoModal;
