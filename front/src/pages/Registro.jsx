// Importar React y la imagen de fondo
import React from 'react';
import Register from '../componentes/FormRegister.jsx';
import './Registro.css'; // Asegúrate de tener una hoja de estilos para los estilos

function Registro() {
    return (
        <div className="registro-container">
        <Register/>
        </div>
    );
}

export default Registro;
