// src/pages/Inicio.jsx
import React from 'react';
import './Inicio.css'; // Asegúrate de tener una hoja de estilos
import HeaderSection from '../componentes/Inicio/HeaderSection/headerSection';
import InfoCards from '../componentes/Inicio/InfoCards/infoCards';
import CardsGridSection from '../componentes/Inicio/CardsGridSection/CardsGridSection';
import ImageTextSection from '../componentes/Inicio/ImageTextSection/ImageTextSection';
import { NavLink } from "react-router-dom";


function Inicio() {
    return (
        <div className="inicio-container">
            <HeaderSection />
            <InfoCards />
            <CardsGridSection />
            <ImageTextSection />
        </div>
    );
}

export default Inicio;
