import React from 'react'
import logo from '../../assets/logo_navbar.png';
import styles from './Header.module.css'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

function Header() {


  return (
    <div className={styles.container}>
            
            <div className={styles.logo}>
                <img className={styles.image} src={logo} alt="Logo" />
            </div>    
            
            <div className={styles.rightComponent}>
                <button className={styles.burgerBtn} on><ion-icon name="menu"></ion-icon></button>
                <Navbar />
            </div>
    </div>
  )
}

export default Header
