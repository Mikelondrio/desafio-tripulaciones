import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { scanerGetAll} from "../../api/scanerAPI.js";

function AnalysisGeneral({number}) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    let color;
    if (number >= 75) {
      color = '#3fb58f'
    } else if (number >= 50) {
      color = '#ffcc00'
    } else {
      color = '#ff0000'
    }

    
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
          datasets: [
            {
              data: [number, 100-number],
              borderRadius: 50,
              backgroundColor: [
                color,
                '#ffffff',            
              ],
              borderWidth: 10
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
              tooltip: {
                display: false
              },
              title: {
                display: false,
                font: {
                  size: 0
                }
              },
              scales: {
                y: {
                  display: false, // Oculta las etiquetas del eje Y
                },
                x: {
                  display: false, // Oculta las etiquetas del eje X
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
