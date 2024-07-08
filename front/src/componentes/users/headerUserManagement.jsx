// Header.js
import React from 'react';
import styles from './headerUserManagement.module.css';

export const HeaderUserManagement = ({ user }) => {    
  return (
    <div className={styles.header}>
        
        <div className={styles.profile}>
            <img src={user.photo} alt={user.name} className={styles.profilePhoto} />
            <h2>{user.name}</h2>
        </div>

        <div className={styles.nav}>
            <ul>
                <li>Tus datos</li>
                <li>Historial de proyecto</li>
                <li>Usuarios</li>
                <li>Cerrar Sesión</li>
            </ul>
        </div>

    </div>
  )

};

export default HeaderUserManagement;
