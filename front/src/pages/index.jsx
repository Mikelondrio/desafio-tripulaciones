import { useState, useEffect } from "react";
import { Navbar } from "../componentes/navbar.jsx";
import Cookies from 'js-cookie';
import { sha256 } from 'js-sha256';





function Index() {





    return (
        <div id='index-cuerpo'>
            <Navbar />
            <h2>Index</h2>



        </div>
    )
}




export {
    Index
}