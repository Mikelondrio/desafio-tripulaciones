import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useState } from "react";

export const Navbar = ({ className }) => {
  const [recarga, setRecarga] = useState(false)

    setTimeout(() => {
      setRecarga(true)
    }, 1000);

  const token = localStorage.getItem('token')

  return (
    <nav className={className}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <NavLink to="/inicio" className={styles.link}>Inicio</NavLink>
          <NavLink to="/resultados" className={styles.link}>Resultados</NavLink>
          {token ? <NavLink to="/registro/gestionusuarios" className={styles.link}>Perfil</NavLink> : <></>}
          <NavLink to="/contactar" className={styles.link}>Contactar</NavLink>
          <NavLink to="/registro" className={styles.entrarBtn}>Entrar</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
