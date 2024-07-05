import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo_navbar.png';
import styles from './Header.module.css';
import Navbar from './Navbar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); 

  const burgerBtnToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleResize = () => {
    const isLarge = window.innerWidth >= 768;

    setIsLargeScreen(isLarge);
    if (isLarge) {
      setIsOpen(true); 
    } else {
      setIsOpen(false)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.image} src={logo} alt="Logo" />
      </div>    

      <div className={styles.rightComponent}>
        <button className={styles.burgerBtn} onClick={burgerBtnToggle}>
          <ion-icon name="menu"></ion-icon>
        </button>
        <Navbar className={`${styles.navbar} ${isOpen ? styles.show : styles.hide}`} />
      </div>
    </div>
  );
}

export default Header;
