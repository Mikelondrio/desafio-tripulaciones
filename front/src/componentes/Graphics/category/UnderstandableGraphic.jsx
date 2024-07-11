import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { scanerGetAll} from "../../../api/scanerAPI.js";

function AnalysisUnderstandable() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

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

      const backgroundColor = getColorBasedOnScore(categoryCatcher.understandable);

      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [ "Understandable"],
          datasets: [
            {
              label: "# of Votes",
              data: [categoryCatcher.understandable, 1 - categoryCatcher.understandable],
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
              title: {
                display: true,
                text: 'Entendible',
                position: 'bottom',
                font: {
                  size: '20'
                }},
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
                    size: '32'
                  },
                  anchor: 'start', // Mueve la etiqueta a la parte externa
                  align: 'start', // Alinea la etiqueta al inicio
                  offset: '10'
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

export default AnalysisUnderstandable;