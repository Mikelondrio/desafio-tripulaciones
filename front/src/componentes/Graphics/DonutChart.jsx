import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { scanerGetAll} from "../../api/scanerAPI.js";

function AnalysisGeneral(number) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    
getLastResearch();
    async function getLastResearch() {
      let response = await scanerGetAll();
      let data = response.data;
      data.reverse();
      let latestData = data[0];
      console.log(latestData);

      let categoryCatcher = latestData.data.data.category;
     
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [ "Green"],
          datasets: [
            {
              label: "# of Votes",
              data: [categoryCatcher.operable, 1 - categoryCatcher.operable],
              borderRadius: 50,
              backgroundColor: [
                '#3fb58f',
                '#ffffff',
              
              ],
          

              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                display: false
              },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false // Oculta las líneas horizontales
              }
            }
          }
        }
      }
  })
    }






    // Limpiar el gráfico al desmontar el componente
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (

      <div>
        <canvas ref={canvasRef} id="myChart"></canvas>
      </div>

  );
}

export {
  AnalysisGeneral
}
