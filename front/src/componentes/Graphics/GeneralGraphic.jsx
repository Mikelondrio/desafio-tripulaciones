import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { scanerGetAll } from "../../api/scanerAPI.js";

function AnalysisGeneral() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    async function getLastResearch() {
      try {
        let data = await scanerGetAll();
        data = data.data;
        data.reverse();
        data = data[0];
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Green"],
            datasets: [
              {
                label: "# of Votes",
                data: [data.evaluation.score],
                borderRadius: 50,
                backgroundColor: ['#3fb58f', '#ffffff'],
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
              }
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
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getLastResearch();

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

export default AnalysisGeneral;
