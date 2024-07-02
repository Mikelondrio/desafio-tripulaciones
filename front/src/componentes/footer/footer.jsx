import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import styles from './footer.module.css'
import logoFooter from '../../assets/logo_footer.png'


export const Footer = () => {

    return (
        <>
            <div className={styles.container}> 
                    <div className={styles.logo}>
                        <img className={styles.image} src={logoFooter}/>
                    </div>
                    <div className={styles.bottomBar}>
                        <ul>
                            <li><span>© Seniority 2024</span></li>
                            <li><a href="https://www.seniorityai.com/?page_id=2574">Condiciones de Uso</a></li>
                            <li><a href="https://www.seniorityai.com/politica-de-privacidad/">Política de Privacidad</a></li>
                            <li><a href="https://www.seniorityai.com/politica-de-cookies/">Política de Cookies</a></li>
                        </ul>
                    </div>
                   
            </div>
        </>
    )
}

export default Footer 