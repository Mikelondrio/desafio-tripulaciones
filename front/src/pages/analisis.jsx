import './analisis.css'

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { scanerGetAll} from "../api/scanerAPI.js";

function Analisis() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const dataAnalisis = localStorage.getItem('data')
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
        type: "radar",
        data: {
          labels: ["Red"],
          datasets: [
            {
              label: "# of Votes",
              data: [data.data.evaluation.score],
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
    <div id="index-cuerpo">
      <div id="result-canvas">
        <h2>Análisis</h2>
          <div>
            <canvas ref={canvasRef} id="myChart"></canvas>
          </div>
      </div>

    </div>
  );
}

export { Analisis };

