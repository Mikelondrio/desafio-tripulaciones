import React, { useState } from 'react';
import styles from './headerSection.module.css'; 
import { NavLink } from "react-router-dom";

function HeaderSection() {
    const [url, setUrl] = useState('');
    const [isValid, setIsValid] = useState(false);

    const urlRegex = new RegExp(/^(?:(ftp|http|https):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(?:\/[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]*)?$/);
   

    const handleChange = (e) => {
        const value = e.target.value;
        setUrl(value);
        setIsValid(urlRegex.test(value));
    };

    return (
        <div className={styles.headerSection}>
            <div className={styles.headerContent}>
                <div className={styles.urlInputWrapper}>
                    <input
                        type="text"
                        className={`${styles.urlInput} ${isValid ? styles.valid : styles.invalid}`}
                        value={url}
                        onChange={handleChange}
                        placeholder="Introducir una URL aquí"
                    />
                    <NavLink to="/resultados"><button className={styles.analyzeButton}>Analizar</button></NavLink>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
