import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useState, useEffect } from "react";

export const Navbar = ({ className }) => {
  const [token, setToken] = useState('');
  const [buttonClass, setButtonClass] = useState('');
  const [buttonName, setButtonName] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setToken(localStorage.getItem('token'));
      buttonLog();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  async function logout() {
    const localToken = localStorage.getItem('token');
    const localUserID = localStorage.getItem('userId');

    if (localToken || localUserID) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    }
  }

  async function buttonLog() {
    const localToken = localStorage.getItem('token');
    const localUserID = localStorage.getItem('userId');

    if (localToken || localUserID) {
      setButtonClass(styles.salirBtn);
      setButtonName('Salir');
    } else {
      setButtonClass(styles.entrarBtn);
      setButtonName('Entrar');
    }
  }

  return (
    <nav className={className}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <NavLink to="/inicio" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Inicio</NavLink>
          <NavLink to="/formaciones" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Formaciones</NavLink>
          <NavLink to="/recursos" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Recursos</NavLink>
          <NavLink to="/contactar" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Contactar</NavLink>
          {token && <NavLink to="/registro/gestionusuarios" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Perfil</NavLink>}
          <NavLink to="/registro" className={`${buttonClass} ${styles.link}`} onClick={logout}>{buttonName}</NavLink>     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;