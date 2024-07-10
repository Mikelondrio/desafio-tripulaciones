import React, { useEffect, useRef, useContext, useState } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { scanerGetAll } from "../../api/scanerAPI.js";
import GeneralContext from '../../utils/GeneralContext.jsx'

function AnalysisGeneral() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  
const { analysisIsDone, setanalysIsDone } = useContext(GeneralContext)

console.log(analysisIsDone)


  // Función para determinar el color basado en el puntaje
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
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '80%', // Hace el doughnut más fino
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Analisis general',
              position: 'bottom',
              font: {
                size: '20'
              },
              
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
                size: '16'
              },
              anchor: 'center', // Mueve la etiqueta a la parte externa
              align: 'start' // Alinea la etiqueta al inicio
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
    <div>
      <canvas ref={canvasRef} id="myChart"></canvas>
    </div>
  );
}

export default AnalysisGeneral;


