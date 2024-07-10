import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";

function OperableDetail() {
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
        <h2>{(parseFloat(criticalIndexCatcher.js_timeout_or_interval_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>js_timeout_or_interval:</h4>
        <p>Situaciones donde se usa JavaScript para establecer límites de tiempo o intervalos que pueden dificultar la interacción del usuario.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.no_extend_time_option_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>no_extend_time_option:</h4>
        <p>La falta de opción para que los usuarios extiendan o eliminen límites de tiempo.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_confirm_or_cancel_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_confirm_or_cancel:</h4>
        <p>La ausencia de opciones claras de confirmación o cancelación en los diálogos o formularios.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.new_tab_link_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>new_tab_link:</h4>
        <p>Enlaces que abren nuevas pestañas sin advertir al usuario.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_tabindex_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_tabindex:</h4>
        <p>Enlaces que no tienen un atributo tabindex.</p>
      </div>
    </>
  );
}

export default OperableDetail;