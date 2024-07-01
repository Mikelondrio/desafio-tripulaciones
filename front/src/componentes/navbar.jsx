import { Outlet, NavLink, useSearchParams } from "react-router-dom";




const Navbar = () => {

    async function logout() {
        // Aqui ira las instrucciones para cerrar sesion
    }



    return (
        <div id='navbar-global'>
            <nav>
                    <NavLink to="/escaner" className='link'>Escaner</NavLink>
                    <NavLink to="/analisis" className="link">Analisis</NavLink>
                    <NavLink to="/perfil" className="link">Usuario </NavLink>
                    isLogin ? <NavLink to="/perfil" className="link">Usuario </NavLink> : <></>
                    isLogin ? <NavLink to="/login" className='link' onClick={logout}>Login / Logout</NavLink> : <></>
                    <NavLink to="/login" className='link'>Login / Logout</NavLink>
            </nav>
            <Outlet />
        </div>
    )
};



export {
    Navbar
}