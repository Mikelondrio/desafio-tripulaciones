import { useState, useEffect } from "react";
import { Navbar } from "../componentes/navbar.jsx";
import { scanerCreate, scraperAPI } from "../api/scanerAPI.js";
import { Navigate, useNavigate } from "react-router-dom";





function Escaner() {
    const navigate = useNavigate()
    

    async function webSendAPI(data) {
        fetch('https://www.unema.es/api/analyze', data)
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
        const token = localStorage.getItem('token')
        const URLSave = data.url

        const URLArraySave = {'url': URLSave,
                                'data': data}

        const URLData = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'authorization': token,
            },
            body: JSON.stringify(URLArraySave),
            };

            const webSend = await scanerCreate(URLData)
            navigate('/analisis');
    }


    async function buttonWebSend(e) {
        const URL = e.target.form[0].value

        const webArraySend = {'url': URL}

        const sendURLScraper = await scraperAPI(URL)
        console.log(url)
        console.log(sendURLScraper)
        console.log('lkjlsajlajlksad')

/*         const data = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'test_5ghbr8UdgVwCLyp4VdGJhHVziFm4dcV0b974Xtni'
            },
            body: JSON.stringify(webArraySend),
            };

            const webSend = await webSendAPI(data)
            console.log('linea 68   ' + webSend)
            console.log('linea 69   ' + data) */
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