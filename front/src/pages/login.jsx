import { useState, useEffect } from "react";
import { Navbar } from "../componentes/navbar.jsx";
import Register from "../componentes/formRegister.jsx";





function Login() {





    return (
        <div id='index-cuerpo'>
            <Navbar />
            <h2>Login</h2>
            <Register/>


        </div>
    )
}




export {
    Login
}