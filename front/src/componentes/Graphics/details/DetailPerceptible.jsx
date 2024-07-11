import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";
import styles from "./DetailPerceptible.module.css";

function DetailPerceptible() {
  const [criticalIndexCatcher, setCriticalIndexCatcher] = useState(null);

  useEffect(() => {
    async function getLastResearch() {
      let response = await scanerGetAll();
      let data = response.data;
      data.reverse();
      let latestData = data[0];
      setCriticalIndexCatcher(latestData.data.data.critical_index);
    }

    getLastResearch();
  }, []);

  if (!criticalIndexCatcher) {
    return <div>Loading...</div>;
  }

  const items = [
    {
      title: "animated_image",
      percentage: parseFloat(criticalIndexCatcher.animated_image_total_percentage) * 100,
      description: "Uso de imágenes animadas que pueden distraer a los usuarios."
    },
    {
      title: "audio_no_controls",
      percentage: parseFloat(criticalIndexCatcher.audio_no_controls_total_percentage) * 100,
      description: "Audio que se reproduce automáticamente sin controles para el usuario."
    },
    {
      title: "audio_no_controls_av",
      percentage: parseFloat(criticalIndexCatcher.audio_no_controls_av_total_percentage) * 100,
      description: "Casos específicos de audio y video sin controles."
    },
    {
      title: "blink_tag_used",
      percentage: parseFloat(criticalIndexCatcher.blink_tag_used_total_percentage) * 100,
      description: "Uso de la etiqueta 'blink' que puede causar distracciones."
    },
    {
      title: "css_animation",
      percentage: parseFloat(criticalIndexCatcher.css_animation_total_percentage) * 100,
      description: "Uso de animaciones CSS que pueden distraer o molestar a los usuarios."
    },
    {
      title: "low_contrast",
      percentage: parseFloat(criticalIndexCatcher.low_contrast_total_percentage) * 100,
      description: "Texto con bajo contraste que dificulta la lectura."
    },
    {
      title: "low_line_height",
      percentage: parseFloat(criticalIndexCatcher.low_line_height_total_percentage) * 100,
      description: "Altura de línea baja que dificulta la lectura."
    },
    {
      title: "marquee_tag_used",
      percentage: parseFloat(criticalIndexCatcher.marquee_tag_used_total_percentage) * 100,
      description: "Uso de la etiqueta 'marquee' que puede causar distracciones."
    },
    {
      title: "missing_alt_text",
      percentage: parseFloat(criticalIndexCatcher.missing_alt_text_total_percentage) * 100,
      description: "Falta de texto alternativo en las imágenes."
    },
    {
      title: "seizure_inducing_content",
      percentage: parseFloat(criticalIndexCatcher.seizure_inducing_content_total_percentage) * 100,
      description: "Contenido que puede inducir convulsiones, como luces intermitentes."
    },
    {
      title: "skipped_header_level",
      percentage: parseFloat(criticalIndexCatcher.skipped_header_level_total_percentage) * 100,
      description: "Niveles de encabezado que se saltan, afectando la jerarquía del contenido."
    },
    {
      title: "small_font_size",
      percentage: parseFloat(criticalIndexCatcher.small_font_size_total_percentage) * 100,
      description: "Uso de tamaño de fuente pequeño que dificulta la lectura."
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
      
      <p className={styles.descriptionDescription}>La información y los componentes de la interfaz de usuario deben ser mostrados a los usuarios en formas que ellos puedan entender.</p>
      </div>
      {items.map((item, index) => {
        let barColor;
        if (item.percentage < 50) {
          barColor = '#F44336'; // Rojo
        } else if (item.percentage < 75) {
          barColor = '#FFEB3B'; // Amarillo
        } else {
          barColor = '#4CAF50'; // Verde
        }

        return (
          <div key={index} className={styles.item}>
            <h4 className={styles.title}>{item.title}:</h4>
            <div className={styles.barChart}>
              <div 
                className={styles.bar} 
                style={{width: `${item.percentage}%`, backgroundColor: barColor}}
              >
                {item.percentage.toFixed(2)}%
              </div>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailPerceptible;
