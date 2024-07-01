import { useState, useEffect } from "react";
import { Navbar } from "../componentes/navbar.jsx";





function Escaner() {




    async function webSendAPI(data) {
        fetch('', data)
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            }).catch(e => {
            console.log(e);
            });
      }

      async function buttonWebSend(e) {
        const webArraySend = {'': ''}

        const data = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(webArraySend),
            };

            const webSend = await webSendAPI(data)
    }





    return (
        <div id='index-cuerpo'>
            <Navbar />
            <h2>Escaner</h2>



        </div>
    )
}




export {
    Escaner
}