import { API_URL } from "./API.js";
import { getToken } from "../utils/local.js";

const fetchData = async(route,method,inputData=null)=>{

  const url = new URL(API_URL + route);
  const fetchOptions = {
      method:method,
      headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`
      }
  }
  if(inputData){
      if(method === "get"){
          Object.keys(inputData).forEach(key=>{
              url.searchParams.append(key,inputData[key]);
          })
      }
      else if(method === "post" || method === "put" || method === "patch"){
          fetchOptions.body = JSON.stringify(inputData);
      }
  }
  try {
      const result = await fetch(url.toString(),fetchOptions);
      //console.log("register",result)
      const data  = await result.json();
      return data;
  } catch (error) {
      console.error(error);
      return ({error:error.message})
  }
}

const register = async(userData)=>{
  const result = await fetchData("/user/register","post",userData);
  
  return result;
}
const login = async(userData)=>{
  const result = await fetchData("/user/login","post",userData);
  //console.log("login",result);
  return result;
}

async function getDato() {
  let dato = await fetch(`${API_URL}/dato`);
  dato = await dato.json();
  return (dato)
}


async function getDatoByID(id) {
  let dato = await fetch(`${API_URL}/${id}`);
  dato = await dato.json();
  return (dato)
}



async function datoCreate(data) {
    fetch(`${API_URL}`, data)
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




  async function datoDelete(id) {
    try {
      const response = await fetch(`${API_URL}/remove/${id}`, {
        method: 'POST',
        headers: { 
          'Content-type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar la dato (HTTP ${response.status})`);
      }
  
      const result = await response.json();
      console.log('dato eliminada:', result);
    } catch (error) {
      console.error('Error al eliminar la dato:', error);
    }
  }


  async function datoUpdate(id, data) {
    fetch(`${API_URL}/update/${id}`, data)
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




  export {
    register,
    login,
    getDato,
    getDatoByID,
    datoCreate,
    datoDelete,
    datoUpdate
  }