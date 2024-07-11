import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { scanerGetAll } from "../../api/scanerAPI.js";

function AnalysisGeneral() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // Función para determinar el color basado en el puntaje
  const getColorBasedOnScore = (score) => {
    if (score >= 0.75) {
      return '#4CAF50'; // Verde
    } else if (score >= 0.5) {
      return '#FFEB3B'; // Amarillo
    } else {
      return '#F44336'; // Rojo
    }
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    async function getLastResearch() {
      let response = await scanerGetAll();
      let data = response.data;
      data.reverse();
      let latestData = data[0];
      console.log(latestData);

      let categoryCatcher = latestData.data.data.evaluation;

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Registrar el plugin
      Chart.register(ChartDataLabels);

      // Obtener el color basado en el puntaje
      const backgroundColor = getColorBasedOnScore(categoryCatcher.score);

      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Operable"],
          datasets: [
            {
              label: "# of Votes",
              data: [categoryCatcher.score, 1 - categoryCatcher.score],
              borderRadius: 50,
              backgroundColor: [
                backgroundColor,
                '#ffffff', // Blanco para el espacio restante
              ],
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%', // Hace el doughnut más fino
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Analisis general',
              position: 'bottom',
              font: {
                size: 20
              }
            },
            datalabels: {
              color: '#000',
              formatter: (value, context) => {
                // Mostrar solo la etiqueta del primer segmento (score)
                if (context.dataIndex === 0) {
                  let percentage = (value * 100).toFixed(2) + '%';
                  return percentage;
                }
                return null;
              },
              font: {
                weight: 'bold',
                size: 32 // Tamaño de fuente mayor
              },
              anchor: 'start', // Centra la etiqueta
              align: 'start', // Centra la etiqueta
              offset: 10 // Asegura que la etiqueta esté exactamente en el centro
            }
          }
        }
      });
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
    <div style={{ position: 'relative', width: '50%', height: '50%' }}>
      <canvas ref={canvasRef} id="myChart"></canvas>
    </div>
  );
}

export default AnalysisGeneral;
