// src/components/CardsGridSection.jsx
import React from 'react';
import './CardsGridSection.css';
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
        <div className="cards-grid">
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    <img src={card.image} alt={card.title} className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{card.title}</h2>
                        <p className="card-description">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsGridSection;
