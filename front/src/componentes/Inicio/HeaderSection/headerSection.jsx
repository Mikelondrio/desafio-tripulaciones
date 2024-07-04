import React, { useState } from 'react';
import styles from './headerSection.module.css'; // Importar estilos desde el módulo CSS

function HeaderSection() {
    const [url, setUrl] = useState('');
    const [isValid, setIsValid] = useState(false);

    const urlRegex = new RegExp(/^(ftp|http|https|https):\/\/[^ "]+$/i); // Regex simplificado para validación básica de URL

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
                    <button className={styles.analyzeButton}>Analizar</button>
                </div>
                {isValid ? <p>URL válida!</p> : <p>URL inválida!</p>}
            </div>
        </div>
    );
}

export default HeaderSection;
