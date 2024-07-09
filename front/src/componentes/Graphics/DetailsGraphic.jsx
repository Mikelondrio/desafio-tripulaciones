
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { scanerGetAll } from "../../api/scanerAPI.js";

function AnalysisDetail() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

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

      let criticalIdnexCatcher = latestData.data.data.critical_index;

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Registrar el plugin
      Chart.register(ChartDataLabels);



      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20",
          "21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40",
          "41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60",
          "61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80",
          "81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100",
          "101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117",
          "118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134",
          "135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152",
        ],

          
          datasets: [
            {
              label: "# of Votes",
              data: [
                criticalIdnexCatcher.animated_image,
                criticalIdnexCatcher.animated_image_total_percentage,
                criticalIdnexCatcher.audio_no_controls,
                criticalIdnexCatcher.audio_no_controls_av,
                criticalIdnexCatcher.audio_no_controls_av_total_percentage,
                criticalIdnexCatcher.audio_no_controls_total_percentage,
                criticalIdnexCatcher.blink_tag_used,
                criticalIdnexCatcher.blink_tag_used_total_percentage,
                criticalIdnexCatcher.broken_link,
                criticalIdnexCatcher.broken_link_total_percentage,
                criticalIdnexCatcher.css_animation,
                criticalIdnexCatcher.css_animation_total_percentage,
                criticalIdnexCatcher.detailed_errors_total_percentage,
                criticalIdnexCatcher.fragment_or_non_http_link,
                criticalIdnexCatcher.fragment_or_non_http_link_total_percentage,
                criticalIdnexCatcher.hidden_element,
                criticalIdnexCatcher.hidden_element_total_percentage,
                criticalIdnexCatcher.js_timeout_or_interval,
                criticalIdnexCatcher.js_timeout_or_interval_total_percentage,
                criticalIdnexCatcher.justified_text,
                criticalIdnexCatcher.justified_text_total_percentage,
                criticalIdnexCatcher.large_text_blocks,
                criticalIdnexCatcher.large_text_blocks_total_percentage,
                criticalIdnexCatcher.low_contrast,
                criticalIdnexCatcher.low_contrast_total_percentage,
                criticalIdnexCatcher.low_line_height,
                criticalIdnexCatcher.low_line_height_total_percentage,
                criticalIdnexCatcher.marquee_tag_used,
                criticalIdnexCatcher.marquee_tag_used_total_percentage,
                criticalIdnexCatcher.meta_refresh,
                criticalIdnexCatcher.meta_refresh_total_percentage,
                criticalIdnexCatcher.missing_alt_text,
                criticalIdnexCatcher.missing_alt_text_total_percentage,
                criticalIdnexCatcher.missing_confirm_or_cancel,
                criticalIdnexCatcher.missing_confirm_or_cancel_total_percentage,
                criticalIdnexCatcher.missing_h1,
                criticalIdnexCatcher.missing_h1_total_percentage,
                criticalIdnexCatcher.missing_h2,
                criticalIdnexCatcher.missing_h2_total_percentage,
                criticalIdnexCatcher.missing_help_section,
                criticalIdnexCatcher.missing_help_section_total_percentage,
                criticalIdnexCatcher.missing_href,
                criticalIdnexCatcher.missing_href_total_percentage,
                criticalIdnexCatcher.missing_label,
                criticalIdnexCatcher.missing_label_total_percentage,
                criticalIdnexCatcher.missing_suggestion_or_help,
                criticalIdnexCatcher.missing_suggestion_or_help_total_percentage,
                criticalIdnexCatcher.missing_tabindex,
                criticalIdnexCatcher.missing_tabindex_total_percentage,
                criticalIdnexCatcher.new_tab_link,
                criticalIdnexCatcher.new_tab_link_total_percentage,
                criticalIdnexCatcher.no_extend_time_option,
                criticalIdnexCatcher.no_extend_time_option_total_percentage,
                criticalIdnexCatcher.no_intermediate_screens,
                criticalIdnexCatcher.no_intermediate_screens_total_percentage,
                criticalIdnexCatcher.seizure_inducing_content,
                criticalIdnexCatcher.seizure_inducing_content_total_percentage,
                criticalIdnexCatcher.short_alt_text,
                criticalIdnexCatcher.short_alt_text_total_percentage,
                criticalIdnexCatcher.skipped_header_level,
                criticalIdnexCatcher.skipped_header_level_total_percentage,
                criticalIdnexCatcher.small_font_size,
                criticalIdnexCatcher.small_font_size_total_percentage,
                criticalIdnexCatcher.unexplained_acronyms,
                criticalIdnexCatcher.unexplained_acronyms_total_percentage,
              ],
              borderRadius: 50,
              backgroundColor: [
                '#ff0000', // verde
                '#ffffff', // Blanco para el espacio restante
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '90%', // Hace el doughnut más fino
          plugins: {
            legend: {
              display: false
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

export default AnalysisDetail;
