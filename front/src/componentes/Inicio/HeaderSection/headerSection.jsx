// src/components/HeaderSection.jsx
import React, { useState } from 'react';
import './headerSection.css'; // Asegúrate de tener una hoja de estilos para este componente



function HeaderSection() {

    const [url, setUrl] = useState('');
    const [isValid, setIsValid] = useState(false);

    const urlRegex = new RegExp(/^(https?:\/\/(www\.)?|www\.)[\w-]+(\.[\w-]+)+([\w-]*)*(\?.*)?(#.*)?$/i);


    const handleChange = (e) => {
        const value = e.target.value;
        setUrl(value)

        if (urlRegex.test(value)) {
            setIsValid(urlRegex.test(value))

        } else {
            setIsValid(false);
        }
    };

    return (
        <div>
            <input type="text" value={url} onChange={handleChange} placeholder="Enter URL" />
            {isValid ? <p>URL is valid!</p> : <p>URL is invalid!</p>}
        </div>
    );
}


export default HeaderSection;
