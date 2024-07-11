import { useState , useEffect, useRef } from "react";
import { scanerByProperty, scanerGetAll } from "../api/scanerAPI";
import { Chart } from "chart.js/auto";
import { AnalysisGeneral } from "./Graphics/DonutChart.jsx";
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

              <article key={data._id} id='history-article'>
                <div id="history-div-data">
                  <h4 className="history-data">Url: {data.url}</h4>
                  <p className="history-data">Fecha: {data.date}</p>
                  <div id="div-score">
                  </div>
                </div>
                <div id="history-div-graphic">
                  <AnalysisGeneral number={data.data.data.evaluation.score * 100} />
                </div>
              </article>
            
          )
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