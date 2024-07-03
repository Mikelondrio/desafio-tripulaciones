import React from 'react'
import {useState} from 'react'
import logo from '../../assets/logo_navbar.png';
import styles from './Header.module.css'
import Navbar from './Navbar'

function Header() {

    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

    function burgerMenuHandler(e){

        setBurgerMenuIsOpen(true);
    }

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
                <img className={styles.image} src={logo} alt="Logo" />
        </div>

        {!burgerMenuIsOpen && <button className={styles.burgerBtn} onClick={burgerMenuHandler} ><ion-icon name="menu"></ion-icon></button>}
            
        {burgerMenuIsOpen && <Navbar />}
    </div>
  )
}

export default Header
