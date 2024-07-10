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
        <h2>{criticalIndexCatcher.js_timeout_or_interval}</h2>
        <h4>js_timeout_or_interval</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.js_timeout_or_interval_total_percentage}%</h2>
        <h4>js_timeout_or_interval_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.no_extend_time_option}</h2>
        <h4>no_extend_time_option</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.no_extend_time_option_total_percentage}%</h2>
        <h4>no_extend_time_option_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.missing_confirm_or_cancel}</h2>
        <h4>missing_confirm_or_cancel</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.missing_confirm_or_cancel_total_percentage}%</h2>
        <h4>missing_confirm_or_cancel_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.new_tab_link}</h2>
        <h4>new_tab_link</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.new_tab_link_total_percentage}%</h2>
        <h4>new_tab_link_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.missing_tabindex}</h2>
        <h4>missing_tabindex</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.missing_tabindex_total_percentage}%</h2>
        <h4>missing_tabindex_total_percentage</h4>
      </div>
    </>
  );
}

export default OperableDetail;