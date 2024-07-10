import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";

function RobustDetail() {
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

  return (
    <>
      <div>
        <h2>{(parseFloat(criticalIndexCatcher.broken_link_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>broken_link:</h4>
        <p>Enlaces rotos que no llevan a ninguna parte.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.fragment_or_non_http_link_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>fragment_or_non_http_link:</h4>
        <p>Enlaces que son fragmentos o no usan el protocolo HTTP.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.hidden_element_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>hidden_element:</h4>
        <p> Elementos ocultos que pueden ser problemáticos para ciertos usuarios.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.meta_refresh_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>meta_refresh:</h4>
        <p>Uso de meta refresh que puede redirigir automáticamente a los usuarios.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_h1_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_h1:</h4>
        <p>Falta de encabezado H1 en la página, afectando la estructura y SEO.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_h2_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_h2:</h4>
        <p>Falta de encabezado H2, afectando la estructura del contenido.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_href_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_href:</h4>
        <p>Falta de atributo href en los enlaces, lo que los hace inoperantes.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_label_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_label:</h4>
        <p>Falta de etiquetas en los formularios, afectando la accesibilidad.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_suggestion_or_help_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_suggestion_or_help:</h4>
        <p>Falta de sugerencias o ayuda contextual.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.no_intermediate_screens_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>no_intermediate_screens:</h4>
        <p>Ausencia de pantallas intermedias para guiar al usuario.</p>
      </div>
    </>
  );
}

export default RobustDetail;