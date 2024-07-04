// src/components/ImageTextSection.jsx
import React from 'react';
import './ImageTextSection.css';

export function ImageTextSection() {
    return (
        <div className="image-text-section">
            <img src="/path/to/large-image.jpg" alt="Descripción de la imagen" className="section-image" />
            <div className="section-text">
                <h2>Facilitamos soluciones para emprendedores y empresas innovadoras</h2>
                <p>
                    Proporcionamos herramientas y formación para mejorar la accesibilidad web, ayudando a las empresas a llegar a un público más amplio y cumplir con las normativas de accesibilidad.
                </p>
            </div>
        </div>
    );
}

export default ImageTextSection;
