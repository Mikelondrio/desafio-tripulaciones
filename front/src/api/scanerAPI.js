import { API_URL } from "./API.js";


async function scanerCreate(data) {
    fetch(`${API_URL}/scaner`, data)
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


  async function scanerGetAll() {
    const response = await fetch(`${API_URL}/scaner`);
    const data = await response.json();
    return data;
  }



  async function scanerByProperty(property, data) {
    const response = await fetch(`${API_URL}/scaner/find?${property}=${data}`);
    const dataScaner = await response.json();
    return dataScaner;
  }





  async function scraperAPI(data) {
    try {
      const response = await fetch(`${API_URL}/scaner/scraper`,
        {
          method: 'POST',
          headers: { 
            'Content-type': 'application/json',
          },
            body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error al enviar los datos (HTTP ${response.status})`);
      }
  
      const result = await response.json();
      console.log('Datos enviados:', result);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }





  export {
    scanerCreate,
    scanerGetAll,
    scanerByProperty,
    scraperAPI
  }