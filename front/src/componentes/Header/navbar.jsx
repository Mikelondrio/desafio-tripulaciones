import { Outlet, NavLink, useSearchParams } from "react-router-dom";

import './navbar.css'

import logo from '../../assets/seniority_logo_header.png';




const Navbar = () => {





    return (
        <>
            <nav>
                <div class="container-navbar">
                    <div class="top-bar">
                        <div class="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div class="language-selector">
                            <div class="language-text">Idioma</div>
                            <div class="language-icon">
                                <div class="language-icon-bg"></div>
                                <div class="language-icon-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-bar">
                        <NavLink to="/escaner" className='link'>Escaner</NavLink>
                        <NavLink to="/analisis" className="link">Analisis</NavLink>
                        <div class="menu-item">Contactar</div>
                        <NavLink to="/login" className='link'>Login / Logout</NavLink>
                        <div class="menu-button">
                            <div class="menu-button-text">Crear Cuenta</div>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )
};



export {
    Navbar
}