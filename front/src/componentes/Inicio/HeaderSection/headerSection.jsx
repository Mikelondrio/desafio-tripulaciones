import React, { useState, useContext } from 'react';
import styles from './headerSection.module.css';
import { scanerCreate, scraperAPI } from '../../../api/scanerAPI.js'
import { Navbar } from '../../../componentes/Header/Navbar.jsx'
import { Navigate, useNavigate } from "react-router-dom";
import GeneralContext from '../../../utils/GeneralContext.jsx';
import { NavLink } from 'react-router-dom';

function HeaderSection() {
    const navigate = useNavigate()
    const [url, setUrl] = useState('');
    const [isValid, setIsValid] = useState(false);

    const { analysisIsDone, setAnalysisIsDone } = useContext(GeneralContext)
    const [buttonSend, setButtonSend] = useState(false)

    const urlRegex = new RegExp(/^(?:(ftp|http|https):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(?:\/[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]*)?$/);

    const handleChange = (e) => {
        const value = e.target.value;
        setUrl(value);
        setIsValid(urlRegex.test(value));
        setButtonSend(true)
    };




    async function buttonWebSend(e) {
        setButtonSend(false)
        const URL = e.target.parentElement.children[0].value
        const webArraySend = { 'url': URL }
        const sendURLScraper = await scraperAPI(webArraySend)
        setAnalysisIsDone(true)
        setTimeout(() => {
            navigate("/analisis")
        }, 2000);
    }




    return (
        <div className={styles.headerSection}>
            <div className={styles.headerContent}>
                <h1>¿Tu web es accesible?</h1>
                <p>Analiza la accesibilidad en un solo click</p>
                <p>Introduce a continuación la URL de tu sitio web</p>
                <div className={styles.urlInputWrapper}>
                    <input
                        type="text"
                        className={`${styles.urlInput} ${isValid ? styles.valid : styles.invalid}`}
                        value={url}
                        onChange={handleChange}
                        placeholder="Introducir una URL aquí"
                    />
                    {buttonSend ? <button className={styles.analyzeButton} onClick={buttonWebSend}>Analizar</button> : <></>}
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
