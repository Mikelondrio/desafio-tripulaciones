import { useState, useEffect } from "react";
import { Navbar } from "../componentes/navbar.jsx";
import { scanerCreate } from "../api/scanerAPI.js";
import { Navigate, useNavigate } from "react-router-dom";





function Escaner() {
    const navigate = useNavigate()




    async function webSendAPI(data) {
        fetch('http://unema.es:5000/api/analyze', data)
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            //console.log(update);
            URLInfoData(update)
            }).catch(e => {
            //console.log(e);
            });
      }




      async function URLInfoData(data) {
        const URLSave = data.result.url

        const URLArraySave = {'url': URLSave,
                                'data': data}

        const URLData = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(URLArraySave),
            };

            const webSend = await scanerCreate(URLData)
            navigate('/analisis')
      }




      async function buttonWebSend(e) {
        const URL = e.target.form[0].value

        const webArraySend = {'url': URL}

        const data = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'test_5ghbr8UdgVwCLyp4VdGJhHVziFm4dcV0b974Xtni'
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