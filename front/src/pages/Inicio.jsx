// src/pages/Inicio.jsx
import React from 'react';
import './Inicio.css'; // Asegúrate de tener una hoja de estilos
import HeaderSection from '../componentes/HeaderSection/headerSection'
import InfoCards from '../componentes/InfoCards/infoCards';

function Inicio() {
    return (
        <div className="inicio-container">
            <HeaderSection />
            <InfoCards />
        </div>
    );
}

export default Inicio;
