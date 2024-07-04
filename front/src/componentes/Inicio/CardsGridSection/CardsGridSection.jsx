// src/components/CardsGridSection.jsx
import React from 'react';
import './CardsGridSection.css';

const cardsData = [
    {
        title: '¿QUÉ HACE SILVER TEST?',
        description: 'Te permite detectar los posibles fallos que puedan afectar la accesibilidad de tu sitio web.',
        image: '/path/to/image1.jpg',
        buttonText: 'Testear una web',
        buttonLink: '#'
    },
    {
        title: '¿QUÉ RESULTADOS RECIBIRÁS?',
        description: 'Si se registran errores o mejoras, te proporcionaremos una guía detallada sobre cómo corregirlos.',
        image: '/path/to/image2.jpg',
        buttonText: 'Empezar ahora',
        buttonLink: '#'
    },
    {
        title: '¿QUÉ NECESITAS?',
        description: 'SeniorityAI te ofrece numerosas herramientas para mejorar la accesibilidad de tu sitio web.',
        image: '/path/to/image3.jpg',
        buttonText: 'Ver más opciones',
        buttonLink: '#'
    }
];

export function CardsGridSection() {
    return (
        <div className="cards-grid">
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    <img src={card.image} alt={card.title} className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{card.title}</h2>
                        <p className="card-description">{card.description}</p>
                        <a href={card.buttonLink} className="card-button">{card.buttonText}</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsGridSection;
