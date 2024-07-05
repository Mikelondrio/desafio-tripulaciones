// src/components/CardsGridSection.jsx
import React from 'react';
import './CardsGridSection.css';

const cardsData = [
    {
        title: 'Card 1',
        description: 'This is the first card.',
        image: '/path/to/card1-image.jpg',
    },
    {
        title: 'Card 2',
        description: 'This is the second card.',
        image: '/path/to/card2-image.jpg',
    },
    {
        title: 'Card 3',
        description: 'This is the third card.',
        image: '/path/to/card3-image.jpg',
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
