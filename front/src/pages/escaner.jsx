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
            URLInfoData(update)
            }).catch(e => {
            console.log(e);
            });
      }



      async function URLInfoData(data) {
        const URLSave = data.url
        const URLDate = Date.now()


        const URLArraySave = {'date': URLDate,
                                'url': URLSave,
                                'data': data}

        const URLdata = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(URLArraySave),
            };

            const webSend = await webSendAPI(URLData)

      }



      async function buttonWebSend(e) {
        const URL = e.target.form[0].value

        const webArraySend = {'': URL}

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

            <div id='form-div'>
                <form id='form'>
                    <input type="text" id="url-send" />
                    <input type="button" value="Escanear" onClick={buttonWebSend}/>
                </form>
            </div>



        </div>
    )
}




export {
    Escaner
}