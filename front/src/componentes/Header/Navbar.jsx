import { NavLink, useSearchParams } from "react-router-dom";

import styles from './Navbar.module.css'



export const Navbar = () => {

    return (
        <>
            <nav>
                <div className={styles.container}>
                    <div className={styles.navbar}>
                        <NavLink to="/resultados" className={styles.link}>Resultados</NavLink>
                        <NavLink to="/contactar" className={styles.link}>Contactar</NavLink>
                        <button type="button" className={styles.entrarBtn}>Entrar</button>
                    </div>
                </div>
            </nav>

        </>

    )
};



export default Navbar
