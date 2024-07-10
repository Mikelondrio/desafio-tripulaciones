// src/components/InfoCards.jsx
import React from 'react';
import styles from './infoCards.module.css';
import { NavLink } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';

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
                <InfoCard key={index} card={card} index={index} />
            ))}
        </div>
    );
}

const InfoCard = ({ card, index }) => {
    const [style, api] = useSpring(() => ({
        transform: 'scale(1)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        border: '2px solid transparent',
    }));

    const handleMouseEnter = () => {
        switch (index) {
            case 0:
                api.start({ 
                    transform: 'scale(1.05)', 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)', 
                    border: '2px solid #F8A800' 
                });
                break;
            case 1:
                api.start({ 
                    transform: 'scale(1.05)', 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)', 
                    backgroundColor: '#ffbb00',
                    border: '2px solid #F8A800'
                });
                break;
            case 2:
                api.start({ 
                    transform: 'scale(1.05)', 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)', 
                    rotateZ: '5deg', 
                    border: '2px solid #F8A800'
                });
                break;
            default:
                break;
        }
    };

    const handleMouseLeave = () => {
        api.start({ 
            transform: 'scale(1)', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
            backgroundColor: card.backgroundColor, 
            rotateZ: '0deg',
            border: '2px solid transparent'
        });
    };

    return (
        <animated.div 
            className={styles.infoCard}
            style={{ ...style, backgroundColor: card.backgroundColor }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={card.image} alt={card.title} className={styles.infoCardImage} />
            <div className={styles.infoCardContent}>
                <h2 className={styles.infoCardTitle}>{card.title}</h2>
                <p className={styles.infoCardDescription}>{card.description}</p>
                <NavLink to={card.buttonLink} style={{ color: card.textcolor }}>
                    <button className={styles.infoCardButton}>{card.buttonText}</button>
                </NavLink>
            </div>
        </animated.div>
    );
};

export default InfoCards;
