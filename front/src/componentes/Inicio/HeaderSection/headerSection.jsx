import React, { useState } from 'react';
import styles from './headerSection.module.css'; 
import { scanerCreate, scraperAPI } from '../../../api/scanerAPI.js'
import { Navbar } from '../../../componentes/Header/Navbar.jsx'
import { Navigate, useNavigate } from "react-router-dom";

function HeaderSection() {
    const navigate = useNavigate()
    const [url, setUrl] = useState('');
    const [isValid, setIsValid] = useState(false);

    const urlRegex = new RegExp(/^(?:(ftp|http|https):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(?:\/[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]*)?$/);
   

    const handleChange = (e) => {
        const value = e.target.value;
        setUrl(value);
        setIsValid(urlRegex.test(value));
    };




    async function buttonWebSend(e) {
        const URL = e.target.parentElement.children[0].value
        const webArraySend = {'url': URL}
        const sendURLScraper = await scraperAPI(webArraySend)
    }




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
                    <button className={styles.analyzeButton}>Analizar</button>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
