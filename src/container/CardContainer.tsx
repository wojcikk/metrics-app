import { Metrics } from "../data/metrics/Metrics";
import { MetricsType } from "../data/metrics/MetricsType";
import PlainData from "../data/storage/PlainData";
import './CardContainer.css';


function CardContainer() {
    var data = PlainData();
    
    return (
        <div className="container">
            <QueryConfigComponent data={data} label={"QUERY CONFIG METRICS"} />
            
            <MetricsTypeContainer data={data} label={"DEVICE METRICS"} type={"_devices_"}/>

            <MetricsTypeContainer data={data} label={"REQUEST METRICS"} type={"_requests_"}/>

            <MetricsTypeContainer data={data} label={"CALCULATIONS METRICS"} type={"_calculations_counter"}/>

            <MetricsTypeContainer data={data} label={"TIME METRICS"} type={"_time"}/>

            <MetricsTypeContainer data={data} label={"HTTP REQUESTS METRICS"} type={"_httprequests_"}/>
        </div>
        
    );
}



const QueryConfigComponent = (props: {
    data: Metrics,
    label: string
}) => {
    return (
        <div className="metrics-type-container">
                <div className="metrics-label">{props.label}</div>
                <div className="metrics-container">

                    <Card variableName="app" calculationResult={props.data.queryConfigMetrics.app} />
                    <Card variableName="server" calculationResult={props.data.queryConfigMetrics.server} />
                    <Card variableName="env" calculationResult={props.data.queryConfigMetrics.env} />

                </div>
            </div>
    )
}

const MetricsTypeContainer = (props: {
    data: Metrics
    label: string
    type: string
}) => {
    return (
        <div className="metrics-type-container">
                <div className="metrics-label">{props.label}</div>
                <div className="metrics-container">
                    {props.data.singleMetrics.map(
                        (element) => element.metric.variableName.includes(props.type) &&
                        <Card variableName={element.metric.variableName} calculationResult={element.metric.calculationResult.toString()} />
                    )}
                </div>
            </div>
    )
} 


const Card = (props: {
    variableName: string
    calculationResult: string
}) => {
    return(
        <div className="card">
            <div className="variable-name-field">
                <p> {props.variableName} </p>
            </div>
            <div className="result-field">
                <p> {props.calculationResult} </p>
            </div>
        </div>
    )
}

export default CardContainer;