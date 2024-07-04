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



  export {
    scanerCreate,
    scanerGetAll
  }