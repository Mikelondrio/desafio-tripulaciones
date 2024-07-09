
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
                <div id="analysis-genral">
                    <AnalysisGeneral/>
                  
                </div>
                <div id="result-canvas">
                    <div className="analysis-item">
                        <AnalysisOperable/>
                       
                    </div>
                    <div className="analysis-item">
                        <AnalysisPerceptible/>
                     
                    </div>
                    <div className="analysis-item">
                        <AnalysisRobust/>
                      
                    </div>
                    <div className="analysis-item">
                        <AnalysisUnderstandable/>
                      
                    </div>
                
        </div>
            <AnalysisDetail/>
        </div>
    )
}

export default Results
