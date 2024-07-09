import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { scanerGetAll} from "../../../api/scanerAPI.js";

function AnalysisRobust() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const getColorBasedOnScore = (score) => {
    if (score >= 0.75) {
      return '#3fb58f'; // Verde
    } else if (score >= 0.5) {
      return '#ffcc00'; // Amarillo
    } else {
      return '#ff0000'; // Rojo
    }
  };

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

      const backgroundColor = getColorBasedOnScore(categoryCatcher.robust);


      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [ "Robust"],
          datasets: [
            {
              label: "# of Votes",
              data: [categoryCatcher.robust, 1 - categoryCatcher.robust],
              borderRadius: 50,
              backgroundColor: [
                backgroundColor,
                '#ffffff', // Blanco para el espacio restante
              
              ],
          

              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
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

export default AnalysisRobust;