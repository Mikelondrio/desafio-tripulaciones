import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";
import styles from "./DetailRobust.module.css";

function DetailRobust() {
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
      title: "broken_link",
      percentage: parseFloat(criticalIndexCatcher.broken_link_total_percentage) * 100,
      description: "Enlaces rotos que no llevan a ninguna parte."
    },
    {
      title: "fragment_or_non_http_link",
      percentage: parseFloat(criticalIndexCatcher.fragment_or_non_http_link_total_percentage) * 100,
      description: "Enlaces que son fragmentos o no usan el protocolo HTTP."
    },
    {
      title: "hidden_element",
      percentage: parseFloat(criticalIndexCatcher.hidden_element_total_percentage) * 100,
      description: "Elementos ocultos que pueden ser problemáticos para ciertos usuarios."
    },
    {
      title: "meta_refresh",
      percentage: parseFloat(criticalIndexCatcher.meta_refresh_total_percentage) * 100,
      description: "Uso de meta refresh que puede redirigir automáticamente a los usuarios."
    },
    {
      title: "missing_h1",
      percentage: parseFloat(criticalIndexCatcher.missing_h1_total_percentage) * 100,
      description: "Falta de encabezado H1 en la página, afectando la estructura y SEO."
    },
    {
      title: "missing_h2",
      percentage: parseFloat(criticalIndexCatcher.missing_h2_total_percentage) * 100,
      description: "Falta de encabezado H2, afectando la estructura del contenido."
    },
    {
      title: "missing_href",
      percentage: parseFloat(criticalIndexCatcher.missing_href_total_percentage) * 100,
      description: "Falta de atributo href en los enlaces, lo que los hace inoperantes."
    },
    {
      title: "missing_label",
      percentage: parseFloat(criticalIndexCatcher.missing_label_total_percentage) * 100,
      description: "Falta de etiquetas en los formularios, afectando la accesibilidad."
    },
    {
      title: "missing_suggestion_or_help",
      percentage: parseFloat(criticalIndexCatcher.missing_suggestion_or_help_total_percentage) * 100,
      description: "Falta de sugerencias o ayuda contextual."
    },
    {
      title: "no_intermediate_screens",
      percentage: parseFloat(criticalIndexCatcher.no_intermediate_screens_total_percentage) * 100,
      description: "Ausencia de pantallas intermedias para guiar al usuario."
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        
        <p className={styles.descriptionDescription}>El contenido deber ser suficientemente robusto para que pueda ser bien interpretado por una gran variedad de agentes de usuario, incluyendo tecnologías de asistencia.</p>
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
                style={{ width: `${item.percentage}%`, backgroundColor: barColor }}
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

export default DetailRobust;
