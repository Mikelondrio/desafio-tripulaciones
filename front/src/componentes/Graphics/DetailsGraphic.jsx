import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { scanerGetAll} from "../../api/scanerAPI.js";

function AnalysisDetail() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    
getLastResearch();
    async function getLastResearch() {
      let data = await scanerGetAll();
      data = data.data;
      data.reverse();
      data = data[0];
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green","Red", "Blue", "Yellow", "Green","Red", "Blue", "Yellow", "Green","Red", "Blue", "Yellow", "Green"],
          datasets: [
            {
              label: "# of Votes",
              data: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
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

export default  AnalysisDetail;
