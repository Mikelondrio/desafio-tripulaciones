import React, { useState, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './headerSection.module.css';
import { scraperAPI } from '../../../api/scanerAPI.js';
import { useNavigate } from "react-router-dom";
import GeneralContext from "../../../utils/GeneralContext.jsx";

import InfoModal from './InfoModal.jsx';

function HeaderSection() {
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
    const [isValid, setIsValid] = useState(null);
    const { setAnalysisIsDone } = useContext(GeneralContext);
    const [buttonSend, setButtonSend] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [loading, setLoading] = useState(false);  // Estado para controlar el preloader

    const urlRegex = new RegExp(/^(?:(ftp|http|https):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(?:\/[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]*)?$/);

    const handleChange = (e) => {
        const value = e.target.value;
        setUrl(value);
        if (value === '') {
            setIsValid(null);
        } else {
            setIsValid(urlRegex.test(value));
        }
        setButtonSend(value !== '');
        setAnimationComplete(true);
    };

    async function buttonWebSend(e) {
        setButtonSend(false);
        setLoading(true);  // Muestra el preloader
        const webArraySend = { 'url': url };
        await scraperAPI(webArraySend);
        setAnalysisIsDone(true);
        setTimeout(() => {
            setLoading(false);  // Oculta el preloader
            navigate("/analisis");
        }, 2000);
    }

    const inputAnimation = useSpring({
        from: { transform: 'scale(1)', boxShadow: '0 0 0 0px rgba(255,152,0,0.4)' },
        to: async (next) => {
            if (!animationComplete) {
                await next({ transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(255,152,0,0)' });
                await next({ transform: 'scale(1)', boxShadow: '0 0 0 0px rgba(255,152,0,0.4)' });
            }
        },
        config: { duration: 1000 },
        loop: !animationComplete,
    });

    return (
        <div className={styles.headerSection}>
            {loading && <InfoModal />}  {/* Muestra el preloader si loading es true */}
            <div className={styles.headerContent}>
                <h1>¿Tu web es accesible?</h1>
                <p>Analiza la accesibilidad en un solo click</p>
                <p>Introduce a continuación la URL de tu sitio web</p>
                <div className={styles.urlInputWrapper}>
                    <div className={styles.inputContainer}>
                        <animated.input
                            style={inputAnimation}
                            type="text"
                            className={`${styles.urlInput} ${isValid === true ? styles.valid : isValid === false ? styles.invalid : ''}`}
                            value={url}
                            onChange={handleChange}
                            placeholder="Introducir una URL aquí"
                        />
                        {isValid === true && (
                            <svg className={styles.icon} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                        )}
                        {isValid === false && (
                            <svg className={styles.icon} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        )}
                    </div>
                    {buttonSend && <button className={styles.analyzeButton} onClick={buttonWebSend}>Analizar</button>}
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
