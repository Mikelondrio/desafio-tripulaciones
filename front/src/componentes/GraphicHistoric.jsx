import { useState , useEffect } from "react";
import { scanerByProperty } from "../api/scanerAPI";
import './GraphicHistoric.css'

const GraphicHistoric = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userId = localStorage.getItem('userId');
            let response = await scanerByProperty('userId',userId);
            response = response.data;
            const filteredData = response.filter((data) => data.userID===userId);
            const responseData = filteredData.map((data) =>

                <article key={data._id}>
                  <h2>Fecha: {data.date}</h2>
                  <p>Url: {data.url}</p>
                </article>
             
            );
            setData(responseData);


          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
 
    return(
        <>
          <div className="scaners-container">
              {data}
          </div>
        </>
      
    );
};


export {GraphicHistoric};