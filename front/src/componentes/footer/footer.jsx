import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import styles from './footer.module.css'
import stylesApp from '../../App.module.css'
import logoFooter from '../../assets/logo_footer.png'


export const Footer = () => {

    return (
        <>
            <div className={styles.container}> 
                    <div className={styles.logo}>
                        <a href="https://www.seniorityai.com/"><img className={styles.image} src={logoFooter}/></a>
                    </div>

                    <div className={styles.bottomBar}>

                        <div className={styles.spanSeniority}>
                            <span>© Seniority 2024</span>
                        </div>

                        <ul>
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