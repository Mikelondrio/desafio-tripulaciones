
import AnalysisGeneral from "../componentes/Graphics/GeneralGraphic"
import AnalysisOperable from "../componentes/Graphics/category/OperableGraphic"
import AnalysisPerceptible from "../componentes/Graphics/category/PerceptibleGraphic"
import AnalysisRobust from "../componentes/Graphics/category/RobustGraphic"
import AnalysisUnderstandable from "../componentes/Graphics/category/UnderstandableGraphic"
import './Results.css'
import OperableDetail from "../componentes/Graphics/details/DetailOperable"
import PerceptibleDetail from "../componentes/Graphics/details/DetailPerceptible"
import RobustDetail from "../componentes/Graphics/details/DetailRobust"
import UnderstandableDetail from "../componentes/Graphics/details/DetailUnderstandable"


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
            
            <article id="result-details">
                <div>
                    <h2>Operable</h2>
                    <h5>Los componentes de la interfaz de usuario y la navegación deben ser manejables.</h5>
                    <OperableDetail/>
                </div>
                <div>
                    <h2>Perceptible</h2>
                    <h5>La información y los componentes de la interfaz de usuario deben ser mostrados a los usuarios en formas que ellos puedan entender.</h5>
                    <PerceptibleDetail/>
                </div>
                <div>
                    <h2>Robusto</h2>
                    <h5>El contenido deber ser suficientemente robusto para que pueda ser bien interpretado por una gran variedad de agentes de usuario, incluyendo tecnologías de asistencia.</h5>
                    <RobustDetail/>
                </div>
                <div>
                    <h2>Entendible</h2>
                    <h5>La información y las operaciones de usuarios deben ser comprensibles.</h5>
                    <UnderstandableDetail/>
                </div>
            </article>

        </div>
    )
}

export default Results
