import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar } from './componentes/navbar';




const Root = () => {






    return (
        <div>
            <Navbar />
            <h1>Estas en raiz</h1>
        </div>
    )
};

export {
    Root
}