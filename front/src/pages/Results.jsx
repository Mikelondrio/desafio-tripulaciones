
import AnalysisGeneral from "../componentes/Graphics/GeneralGraphic"
import AnalysisDetail  from "../componentes/Graphics/DetailsGraphic"
import AnalysisOperable from "../componentes/Graphics/category/OperableGraphic"
import AnalysisPerceptible from "../componentes/Graphics/category/PerceptibleGraphic"
import AnalysisRobust from "../componentes/Graphics/category/RobustGraphic"
import AnalysisUnderstandable from "../componentes/Graphics/category/UnderstandableGraphic"
import './Results.css'


export function Results() {

    return (
        <div id='index-cuerpo'>
            <h2>Resultados</h2>     
            <AnalysisGeneral/>
                <div id="result-canvas">
                    <AnalysisOperable/>
                    <AnalysisPerceptible/>
                    <AnalysisRobust/>
                    <AnalysisUnderstandable/>
                </div>
            <AnalysisDetail/>
        </div>
    )
}

export default Results
