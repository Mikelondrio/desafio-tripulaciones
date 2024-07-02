import React, { useEffect, useRef } from "react";
import { Navbar } from "../componentes/navbar.jsx";
import { Chart } from "chart.js/auto";
import { useLoaderData } from "react-router-dom";

function Analisis() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const scanData = useLoaderData();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
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



    // Limpiar el gráfico al desmontar el componente
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="index-cuerpo">
      <Navbar />
      <h2>Análisis</h2>
      <div>
        <canvas ref={canvasRef} id="myChart"></canvas>
      </div>
    </div>
  );
}

export { Analisis };

