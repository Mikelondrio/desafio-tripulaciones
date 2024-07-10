// src/components/InfoCards.jsx
import React from 'react';
import styles from './infoCards.module.css';
import { NavLink } from "react-router-dom";

const infoCardsData = [
    {
        title: '¿QUÉ HACEMOS?',
        description: 'Nuestra herramienta te ayuda a hacer accesible tu sitio web detectando fallos y proponiendo mejoras.',
        image: './src/assets/images/home/queHacemos.jpg',
        buttonText: 'Más información',
        buttonLink: '#',
        backgroundColor: '#3FB58F',
        textcolor: '#3FB58F'
    },  
    {
        title: 'RESULTADOS',
        description: 'Podrás ver todas las mejoras que necesita tu web para que pueda ser accesible al público Senior.',
        image: './src/assets/images/home/resultados.jpg',
        buttonText: 'Más información',
        buttonLink: '#',
        backgroundColor: '#F8A800',
        textcolor: '#F8A800'
    },
    {
        title: 'HERRAMIENTAS',
        description: 'Si necesitas ampliar tu formación para aplicar los cambios a tu web o necesitas recursos para mejorarla, tenemos la solución.',
        image: './src/assets/images/home/herramientas.jpg',
        buttonText: 'Más información',
        buttonLink: '#',
        backgroundColor: '#3A4683',
        textcolor: '#3A4683'

    }
];

function InfoCards() {
    return (
        <div className={styles.InfoCards}>
            {infoCardsData.map((card, index) => (
                <div 
                    key={index} 
                    className={styles.infoCard}
                    style={{ backgroundColor: card.backgroundColor }}
                >
                    <img src={card.image} alt={card.title} className={styles.infoCardImage} />
                    <div className={styles.infoCardContent}>
                        <h2 className={styles.infoCardTitle}>{card.title}</h2>
                        <p className={styles.infoCardDescription}>{card.description}</p>
                        <NavLink to={card.buttonLink} style={{ color: card.textcolor }} >
                            <button className={styles.infoCardButton}>{card.buttonText}</button>
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default InfoCards;