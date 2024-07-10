import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";
import styles from "./DetailUnderstandable.module.css";

function DetailUnderstandable() {
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
      title: "justified_text",
      percentage: parseFloat(criticalIndexCatcher.justified_text_total_percentage) * 100,
      description: "Uso de texto justificado que puede dificultar la lectura."
    },
    {
      title: "large_text_blocks",
      percentage: parseFloat(criticalIndexCatcher.large_text_blocks_total_percentage) * 100,
      description: "Bloques grandes de texto sin separación clara."
    },
    {
      title: "short_alt_text",
      percentage: parseFloat(criticalIndexCatcher.short_alt_text_total_percentage) * 100,
      description: "Texto alternativo demasiado corto o insuficiente en las imágenes."
    },
    {
      title: "missing_help_section",
      percentage: parseFloat(criticalIndexCatcher.missing_help_section_total_percentage) * 100,
      description: "La ausencia de una sección de ayuda en el sitio."
    },
    {
      title: "unexplained_acronyms",
      percentage: parseFloat(criticalIndexCatcher.unexplained_acronyms_total_percentage) * 100,
      description: "Acrónimos que no están explicados en el texto."
    },
  ];

  return (
    <div className={styles.container}>
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

export default DetailUnderstandable;
