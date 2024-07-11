import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { scanerGetAll } from "../../api/scanerAPI.js";
import './GeneralGraphic.css'

function AnalysisGeneral() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [scoreGraphic, setScoreGraphic] = useState()

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
      setScoreGraphic(categoryCatcher.score*100)

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
                '#F3F3F3', // Color para el espacio restante
              ],
              borderWidth: 0
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
                size: '0'
              },
              position: 'center',
              anchor: 'center', // Mueve la etiqueta a la parte externa
              align: '-115', // Alinea la etiqueta al inicio
              offset: '55',
              display: 'true',
              textAlign: 'start',
            },
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

    <div id="div-general">
      <div id="score-graphic">
        <p>{Math.floor(scoreGraphic)}%</p>
      </div>
      <div style={{ position: 'relative', width: '50%', height: '50%' }}>
        <canvas ref={canvasRef} id="myChart"></canvas>
      </div>
    </div>

  );
}

export default AnalysisGeneral;
