// src/components/InfoCards.jsx
import React from 'react';
import './infoCards.css';
import { NavLink } from "react-router-dom";

const infoCardsData = [
    {
        title: '¿QUÉ HACEMOS?',
        description: 'Nuestra herramienta te ayuda a hacer accesible tu sitio web detectando fallos y proponiendo mejoras.',
        image: './src/assets/images/home/queHacemos.jpg',
        buttonText: 'Más información',
        buttonLink: '#'
    },  
    {
        title: 'RESULTADOS',
        description: 'Podrás ver todas las mejoras que necesita tu web para que pueda ser accesible al público Senior.',
        image: './src/assets/images/home/resultados.jpg',
        buttonText: 'Más información',
        buttonLink: '#'
    },
    {
        title: 'HERRAMIENTAS',
        description: 'Si necesitas ampliar tu formación para aplicar los cambios a tu web o necesitas recursos para mejorarla, tenemos la solución.',
        image: './src/assets/images/home/herramientas.jpg',
        buttonText: 'Más información',
        buttonLink: '#'
    }
];

function InfoCards() {

    // <NavLink to="/inicio" className={styles.link}>Inicio</NavLink>
    // <NavLink to="/resultados" className={styles.link}>Resultados</NavLink>
    // <NavLink to="/contactar" className={styles.link}>Contactar</NavLink>

    return (
        <div className="info-cards">
            {infoCardsData.map((card, index) => (
                <div key={index} className="info-card">
                    <img src={card.image} alt={card.title} className="info-card-image" />
                    <div className="info-card-content">
                        <h2 className="info-card-title">{card.title}</h2>
                        <p className="info-card-description">{card.description}</p>
                        <a href={card.buttonLink} className="info-card-button">{card.buttonText}</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default InfoCards;