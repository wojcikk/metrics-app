import ResultCard from "../card/ResultCard";
import PlainData from "../data/PlainData";
import './CardContainer.css';


function CardContainer() {
    var data = PlainData();

    console.log(data);

    return (
        <div className="container">
             <h1 className="metrics-label">DEVICE METRICS</h1>
             <div className="metrics-container">
                {data.singleMetrics.map(
                        (metric) => metric.metric.variableName.includes("devices") &&
                        
                        
                        <div className="card">
                            <h4> {metric.metric.variableName.replaceAll("_", " ")} </h4>
                            <p> {metric.metric.calculationResult} </p>
                        </div>
                    
                    )}
             </div>
                
           

        </div>
        // <ResultCard />
    );
}

export default CardContainer;