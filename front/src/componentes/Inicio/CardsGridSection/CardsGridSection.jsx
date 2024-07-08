// src/components/CardsGridSection.jsx
import React from 'react';
import styles from './CardsGridSection.module.css';
import Senora_con_ordenador from '../../../assets/Home/Senora_con_ordenador.jpg';
import Madurito_sexy from '../../../assets/Home/Madurito_sexy.jpg';
import ordenador from '../../../assets/Home/ordenador.jpg';

const cardsData = [
    {
        title: '¿QUÉ HACE SILVER TEST?',
        description: 'Te permite detectar los posibles fallos que puede tener tu página web en cuanto a accesibilidad.',
        image: Senora_con_ordenador,
        isReversed: false,
        backgroundColor: '#3FB58F',
        textcolor: '#3FB58F'
    },
    {
        title: '¿QUÉ RESULTADOS RECIBIRÁS?',
        description: 'Un completo informe con los errores detectados en tu página web y las posibles soluciones para mejorar la accesibilidad.',
        image: ordenador,
        isReversed: true,
        backgroundColor: '#F8A800',
        textcolor: '#F8A800'
    },
    {
        title: '¿QUÉ NECESITAS?',
        description: 'Simplemente la URL de tu página web. Nosotros nos encargamos del resto para ofrecerte un análisis detallado.',
        image: Madurito_sexy,
        isReversed: false,
        backgroundColor: '#3A4683',
        textcolor: '#3A4683'
    }
];

function CardsGridSection() {
    return (
        <div className={styles.cardsGrid}>
            {cardsData.map((card, index) => (
                <div key={index} className={`${styles.card} ${card.isReversed ? styles.reversed : ''}`}>
                    <div className={styles.cardContent}>
                        <h2 style={{color: card.textcolor}} className={styles.cardTitle}>{card.title}</h2>
                        <p className={styles.cardDescription}>{card.description}</p>
                        <button style={{backgroundColor: card.backgroundColor}} className={styles.cardButton}>Saber más</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={card.image} alt={card.title} className={styles.cardImage} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsGridSection;