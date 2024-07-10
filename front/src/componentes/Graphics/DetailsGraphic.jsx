
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { scanerGetAll } from "../../api/scanerAPI.js";

function AnalysisDetail() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // Función para determinar el color basado en el puntaje

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
          labels: [
            "animated_image",
            "animated_image_total_percentage",
            "audio_no_controls",
            "audio_no_controls_av",
            "audio_no_controls_av_total_percentage",
            "audio_no_controls_total_percentage",
            "blink_tag_used",
            "blink_tag_used_total_percentage",
            "broken_link",
            "broken_link_total_percentage",
            "css_animation",
            "css_animation_total_percentage",
            "detailed_errors_total_percentage",
            "fragment_or_non_http_link",
            "fragment_or_non_http_link_total_percentage",
            "hidden_element",
            "hidden_element_total_percentage",
            "js_timeout_or_interval",
            "js_timeout_or_interval_total_percentage",
            "justified_text",
            "justified_text_total_percentage",
            "large_text_blocks",
            "large_text_blocks_total_percentage",
            "low_contrast",
            "low_contrast_total_percentage",
            "low_line_height",
            "low_line_height_total_percentage",
            "marquee_tag_used",
            "marquee_tag_used_total_percentage",
            "meta_refresh",
            "meta_refresh_total_percentage",
            "missing_alt_text",
            "missing_alt_text_total_percentage",
            "missing_confirm_or_cancel",
            "missing_confirm_or_cancel_total_percentage",
            "missing_h1",
            "missing_h1_total_percentage",
            "missing_h2",
            "missing_h2_total_percentage",
            "missing_help_section",
            "missing_help_section_total_percentage",
            "missing_href",
            "missing_href_total_percentage",
            "missing_label",
            "missing_label_total_percentage",
            "missing_suggestion_or_help",
            "missing_suggestion_or_help_total_percentage",
            "missing_tabindex",
            "missing_tabindex_total_percentage",
            "new_tab_link",
            "new_tab_link_total_percentage",
            "no_extend_time_option",
            "no_extend_time_option_total_percentage",
            "no_intermediate_screens",
            "no_intermediate_screens_total_percentage",
            "seizure_inducing_content",
            "seizure_inducing_content_total_percentage",
            "short_alt_text",
            "short_alt_text_total_percentage",
            "skipped_header_level",
            "skipped_header_level_total_percentage",
            "small_font_size",
            "small_font_size_total_percentage",
            "unexplained_acronyms",
            "unexplained_acronyms_total_percentage"
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
                '#ff0000', // Blanco para el espacio restante
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
            title: {
              display: true,
              text: 'Detalles de la evaluación',
              position: 'bottom',
              font: {
                size: '20'
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
                size: '16'
              },
              anchor: 'center', // Mueve la etiqueta a la parte externa
              align: 'center' // Alinea la etiqueta al inicio
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
