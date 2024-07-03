import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import { useEffect } from "react";




const Navbar = () => {

    async function logout() {
        // Aqui ira las instrucciones para cerrar sesion
    }


    useEffect(() => {
        // Aqui se comprueba que hay algun usuario logueado para saber que menus mostrar del NavBar
        // La variable por la que se va a buscar sera 'isLogin', esa es la condicion del ternario
    })



    return (
        <div id='navbar-global'>
            <nav>
                    <NavLink to="/escaner" className='link'>Escaner</NavLink>
                    <NavLink to="/analisis" className="link">Analisis</NavLink>
                    <NavLink to="/perfil" className="link">Usuario </NavLink>
                    <NavLink to="/login" className='link'>Login / Logout</NavLink>
                    
            </nav>
            <Outlet />
        </div>
    )
};



export {
    Navbar
}