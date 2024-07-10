import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../../api/userApi.js';
import styles from './Profile.module.css';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  // Genera la URL del avatar usando unavatar.io
  
  
  return (
    <div className={styles.profileContainer}>
     
      {/* El resto del componente permanece igual */}
      <div className={styles.profileContent}>
        
        <main className={styles.mainContent}>
          <section className={styles.userDataSection}>
            <h3>TUS DATOS DE USUARIO <FaEdit className={styles.editIcon} /></h3>
            <div className={styles.dataField}>
              <label>Nombre</label>
              <p>{user.username}</p>
            </div>
            <div className={styles.dataField}>
              <label>Correo</label>
              <p>{user.email}</p>
            </div>
            <div className={styles.dataField}>
              <label>Contraseña</label>
              <p>••••••••</p>
            </div>
          </section>
          <section className={styles.companyDataSection}>
            <h3>DATOS DE LA EMPRESA <FaEdit className={styles.editIcon} /></h3>
            <div className={styles.dataField}>
              <label>Nombre</label>
              <p>{user.company}</p>
            </div>
            <div className={styles.dataField}>
              <label>Sector</label>
              <p>{user.sector}</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export { Profile};