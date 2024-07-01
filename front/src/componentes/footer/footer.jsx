import { Outlet, NavLink, useSearchParams } from "react-router-dom";

import './footer.css'

import logo from '../../assets/seniority_logoblanco_sinfondo_uso_en_fondo oscuro.png';

const Footer = () => {

    return (
        <>
            <div class="container-footer">
                <div class="logo-container">
                    <div class="logo-background">
                        <div class="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer-text">© Seniority 2024</div>
                    <div class="footer-link">Condiciones de Uso</div>
                    <div class="footer-link">Política de privacidad</div>
                    <div class="footer-link">Política de cookies</div>
                </div>
            </div>
        </>
    )
}

export { Footer }