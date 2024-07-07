// src/components/CardsGridSection.jsx
import React from 'react';
import styles from './CardsGridSection.module.css';
import Senora_con_ordenador from '../../../assets/Home/Senora_con_ordenador.jpg';
import Madurito_sexy  from '../../../assets/Home/Madurito_sexy.jpg';
import ordenador from '../../../assets/Home/ordenador.jpg';


const cardsData = [
    {
        title: '¿ QUE HACE SILVER SITE ?',
        description: 'Te permite loren impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: Senora_con_ordenador,
        
    },
    {
        title: '¿ QUE RESULTADOS RECIBIRÁS ?',
        description: 'This is the second card.',
        image: ordenador,
    },
    {
        title: '¿ QUE NECESITAS ?',
        description: 'This is the third card.',
        image: Madurito_sexy,
    }
];

function CardsGridSection() {
    return (
        <div className={styles.cardsGrid}>
            {cardsData.map((card, index) => (
                <div key={index} className={styles.card}>
                    <img src={card.image} alt={card.title} className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{card.title}</h2>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsGridSection;
