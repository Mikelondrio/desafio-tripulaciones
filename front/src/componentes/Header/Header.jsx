import React from 'react'
import logo from '../../assets/logo_navbar.png';
import styles from './Header.module.css'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

function Header() {


  return (
    <div className={styles.container}>
            
            <div className={styles.leftComponent}>
                <NavLink to="/inicio" className={styles.link}><ion-icon name="home"></ion-icon></NavLink>
                <div className={styles.logo}>
                    <img className={styles.image} src={logo} alt="Logo" />
                </div>    
            </div>

            <div className={styles.rightComponent}>
                <button className={styles.burgerBtn} ><ion-icon name="menu"></ion-icon></button>
                <Navbar />
            </div>
    </div>
  )
}

export default Header
