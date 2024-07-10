import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";
import styles from "./DetailOperable.module.css";

function DetailOperable() {
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
      title: "js_timeout_or_interval",
      percentage: parseFloat(criticalIndexCatcher.js_timeout_or_interval_total_percentage) * 100,
      description: "Situaciones donde se usa JavaScript para establecer límites de tiempo o intervalos que pueden dificultar la interacción del usuario."
    },
    {
      title: "no_extend_time_option",
      percentage: parseFloat(criticalIndexCatcher.no_extend_time_option_total_percentage) * 100,
      description: "La falta de opción para que los usuarios extiendan o eliminen límites de tiempo."
    },
    {
      title: "missing_confirm_or_cancel",
      percentage: parseFloat(criticalIndexCatcher.missing_confirm_or_cancel_total_percentage) * 100,
      description: "La ausencia de opciones claras de confirmación o cancelación en los diálogos o formularios."
    },
    {
      title: "new_tab_link",
      percentage: parseFloat(criticalIndexCatcher.new_tab_link_total_percentage) * 100,
      description: "Enlaces que abren nuevas pestañas sin advertir al usuario."
    },
    {
      title: "missing_tabindex",
      percentage: parseFloat(criticalIndexCatcher.missing_tabindex_total_percentage) * 100,
      description: "Enlaces que no tienen un atributo tabindex."
    }
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
            <h4 className={styles.title}>{item.title}</h4>
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

export default DetailOperable;
