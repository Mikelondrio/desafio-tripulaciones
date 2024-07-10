import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";

function UnderstandableDetail() {
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
        <h2>{(parseFloat(criticalIndexCatcher.justified_text_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>justified_text:</h4>
        <p>Uso de texto justificado que puede dificultar la lectura.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.large_text_blocks_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>large_text_blocks:</h4>
        <p>Bloques grandes de texto sin separación clara.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.short_alt_text_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>short_alt_text:</h4>
        <p>Texto alternativo demasiado corto o insuficiente en las imágenes.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_help_section_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_help_section:</h4>
        <p>La ausencia de una sección de ayuda en el sitio.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.unexplained_acronyms_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>unexplained_acronyms:</h4>
        <p>Acrónimos que no están explicados en el texto.</p>
      </div>
    </>
  );
}

export default UnderstandableDetail;