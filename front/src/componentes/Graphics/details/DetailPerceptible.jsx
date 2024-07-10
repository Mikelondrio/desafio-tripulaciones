import React, { useEffect, useState } from "react";
import { scanerGetAll } from "../../../api/scanerAPI.js";

function PerceptibleDetail() {
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
        <h2>{criticalIndexCatcher.animated_image}</h2>
        <h4>animated_image</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.animated_image_total_percentage}%</h2>
        <h4>animated_image_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.audio_no_controls}</h2>
        <h4>audio_no_controls</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.audio_no_controls_av}%</h2>
        <h4>audio_no_controls_av</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.audio_no_controls_av_total_percentage}</h2>
        <h4>audio_no_controls_av_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.audio_no_controls_total_percentage}%</h2>
        <h4>audio_no_controls_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.blink_tag_used}</h2>
        <h4>blink_tag_used</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.blink_tag_used_total_percentage}%</h2>
        <h4>blink_tag_used_total_percentage</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.css_animation}</h2>
        <h4>css_animation</h4>
      </div>

      <div>
        <h2>{criticalIndexCatcher.css_animation_total_percentage}%</h2>
        <h4>css_animation_total_percentage</h4>
      </div>
    </>
  );
}

export default PerceptibleDetail;