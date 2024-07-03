import { Outlet, NavLink, useSearchParams } from "react-router-dom";

import styles from './Navbar.module.css'



export const Navbar = () => {

    return (
        <>
            <nav>
                <div className={styles.container}>
                 
                    <div className={styles.navbar}>
                        <NavLink to="/inicio" className={styles.link}>Inicio</NavLink>
                        <NavLink to="/resultados" className={styles.link}>Resultados</NavLink>
                        <NavLink to="/contactar" className={styles.link}>Contactar</NavLink>
                        
                        <button type="button" className="menu-button-text">Entrar</button>
                    </div>
                </div>
            </nav>

        </>

    )
};



export default Navbar
