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
        <h2>{(parseFloat(criticalIndexCatcher.animated_image_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>animated_image:</h4>
        <p>Uso de imágenes animadas que pueden distraer a los usuarios.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.audio_no_controls_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>audio_no_controls:</h4>
        <p>Audio que se reproduce automáticamente sin controles para el usuario.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.audio_no_controls_av_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>audio_no_controls_av:</h4>
        <p>Casos específicos de audio y video sin controles.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.blink_tag_used_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>blink_tag_used:</h4>
        <p>Uso de la etiqueta "blink" que puede causar distracciones.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.css_animation_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>css_animation:</h4>
        <p>Uso de animaciones CSS que pueden distraer o molestar a los usuarios.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.low_contrast_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>low_contrast:</h4>
        <p>Texto con bajo contraste que dificulta la lectura.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.low_line_height_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>low_line_height:</h4>
        <p>Altura de línea baja que dificulta la lectura.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.marquee_tag_used_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>marquee_tag_used:</h4>
        <p>Uso de la etiqueta "marquee" que puede causar distracciones.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.missing_alt_text_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>missing_alt_text:</h4>
        <p>Falta de texto alternativo en las imágenes.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.seizure_inducing_content_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>seizure_inducing_content:</h4>
        <p>Contenido que puede inducir convulsiones, como luces intermitentes.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.skipped_header_level_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>skipped_header_level:</h4>
        <p>Niveles de encabezado que se saltan, afectando la jerarquía del contenido.</p>
      </div>

      <div>
        <h2>{(parseFloat(criticalIndexCatcher.small_font_size_total_percentage) * 100).toFixed(2)}%</h2>
        <h4>small_font_size:</h4>
        <p>Uso de tamaño de fuente pequeño que dificulta la lectura.</p>
      </div>

    </>
  );
}

export default PerceptibleDetail;