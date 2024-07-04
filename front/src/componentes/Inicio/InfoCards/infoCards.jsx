// src/components/InfoCards.jsx
import React from 'react';
import './infoCards.css'; // Asegúrate de tener una hoja de estilos para este componente

function InfoCards() {
    return (
        <div className="info-cards">
            <div className="card">
                <h2>QUÉ HACEMOS</h2>
                <p>Nuestra herramienta te ayuda a hacer accesible tu sitio web detectando fallos y proponiendo mejoras.</p>
                <button>Más información +</button>
            </div>
            <div className="card">
                <h2>RESULTADOS</h2>
                <p>Podrás ver todas las mejoras que necesita tu web para que pueda ser accesible al público Senior.</p>
                <button>Más información +</button>
            </div>
            <div className="card">
                <h2>HERRAMIENTAS</h2>
                <p>Si necesitas ampliar tu formación para aplicar los cambios a tu web o necesitas recursos para mejorarla, tenemos la solución.</p>
                <button>Más información +</button>
            </div>
        </div>
    );
}

export default InfoCards;
