
import AnalysisGeneral from "../componentes/Graphics/GeneralGraphic"
import AnalysisOperable from "../componentes/Graphics/category/OperableGraphic"
import AnalysisPerceptible from "../componentes/Graphics/category/PerceptibleGraphic"
import AnalysisRobust from "../componentes/Graphics/category/RobustGraphic"
import AnalysisUnderstandable from "../componentes/Graphics/category/UnderstandableGraphic"
import './Results.css'
import DetailSelector from "../componentes/Graphics/details/DetailSelector"
/* import DetailOperable from "../componentes/Graphics/details/DetailOperable"
import DetailPerceptible from "../componentes/Graphics/details/DetailPerceptible"
import RobustDetail from "../componentes/Graphics/details/DetailRobust"
import DetailUnderstandable from "../componentes/Graphics/details/DetailUnderstandable"
 */

export function Results() {

    return (
        <div id='index-cuerpo'>
            <h1>Resultados</h1>
            <div id="analysis-genral">
                <AnalysisGeneral />

            </div>
            <div id="result-canvas">
                <div className="analysis-item">
                    <AnalysisOperable />

                </div>
                <div className="analysis-item">
                    <AnalysisPerceptible />

                </div>
                <div className="analysis-item">
                    <AnalysisRobust />

                </div>
                <div className="analysis-item">
                    <AnalysisUnderstandable />

                </div>

            </div>

            <div>
                <h1>Detalles de Accesibilidad</h1>
                <DetailSelector />
            </div>

        </div>
    )
}

export default Results
