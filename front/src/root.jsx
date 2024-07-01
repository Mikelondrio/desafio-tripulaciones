import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Navbar } from './componentes/navbar/navbar';
import { Footer } from './componentes/footer/footer';




const Root = () => {






    return (
        <div>
            <Navbar />
            <h1>Estas en raiz</h1>
            <Footer />
        </div>
    )
};

export {
    Root
}