import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useState } from "react";

export const Navbar = ({ className }) => {
  const [token, setToken] = useState('')
  const [buttonClass, setButtonClass] = useState('')
  const [buttonName, setButtonName] = useState('')

    setInterval(() => {
      setToken(localStorage.getItem('token'))
      buttonLog()
    }, 1000);


    async function logout() {
      const localToken = localStorage.getItem('token')
      const localUserID = localStorage.getItem('userId')

      if (localToken || localUserID) {
        localStorage.removeItem('token')
        localStorage.removeItem('userID')
      }
    }


    async function buttonLog() {
      const localToken = localStorage.getItem('token')
      const localUserID = localStorage.getItem('userId')

      if (localToken || localUserID) {
        setButtonClass(styles.salirBtn)
        setButtonName('Salir')
      } else {
        setButtonClass(styles.entrarBtn)
        setButtonName('Entrar')
      }
    }


  return (
    <nav className={className}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <NavLink to="/inicio" className={styles.link}>Inicio</NavLink>
          <NavLink to="/analisis" className={styles.link}>Analisis</NavLink>
          <NavLink to="/formaciones" className={styles.link}>Formaciones</NavLink>
          <NavLink to="/recursos" className={styles.link}>Recursos</NavLink>
          <NavLink to="/contactar" className={styles.link}>Contactar</NavLink>
          {token ? <NavLink to="/registro/gestionusuarios" className={styles.link}>Perfil</NavLink> : <></>}
          <NavLink to="/registro" className={buttonClass} onClick={logout}>{buttonName}</NavLink>     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
