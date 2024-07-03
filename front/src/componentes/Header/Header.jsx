import React from 'react'
import logo from '../../assets/seniority_logo_header.png';
import styles from './Header.module.css'
import Navbar from './Navbar'

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
                <img className={styles.image} src={logo} alt="Logo" />
        </div>
        <Navbar />
    </div>
  )
}

export default Header
