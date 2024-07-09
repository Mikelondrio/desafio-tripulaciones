import React, { useState } from "react";
import { Navbar } from "../componentes/Header/Navbar.jsx";
import { UserProfile } from "../componentes/users/Profile.jsx";
import { UserList } from "../componentes/users/UsersForAdmin.jsx";
import { GraphicHistoric } from "../componentes/GraphicHistoric.jsx";
import './perfil.css';

function Perfil() {
    const [component, setComponent] = useState("A");

    const componentRender = () => {
        switch (component) {
            case "A":
                return <UserProfile />;
            case "B":
                return <GraphicHistoric />;
            case "C":
                return <UserList />;
            default:
                return <UserProfile />;
        }
    };

    return (
        <>
            <Navbar />
            <div id='perfil-cuerpo'>
                <div className="button-container">
                    <button onClick={() => setComponent("A")}>Informacion del usuario</button>
                    <button onClick={() => setComponent("B")}>Historial de busquedas</button>
                    <button onClick={() => setComponent("C")}>Usuarios registrados</button>
                </div>
                <div>
                    {componentRender()}
                </div>
            </div>
        </>
    );
}

export { Perfil };
