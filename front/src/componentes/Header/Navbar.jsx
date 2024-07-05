import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

export const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <NavLink to="/inicio" className={styles.link}>Inicio</NavLink>
          <NavLink to="/resultados" className={styles.link}>Resultados</NavLink>
          <NavLink to="/contactar" className={styles.link}>Contactar</NavLink>
          <button type="button" className={styles.entrarBtn}>Entrar</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;