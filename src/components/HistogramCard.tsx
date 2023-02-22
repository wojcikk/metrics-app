export const HistogramCard = (props: {
    variableName: string
    results: {
        result_for_50: number;
        result_for_75: number;
        result_for_95: number;
        result_for_99: number;
    };
    unit: string
}) => {
    return(
        <div className="card">
            <div className="variable-name-field">
                <p><b>{props.variableName} </b></p>
            </div>
            <div className="histogram-result-field">
                    <b> 50% </b> <div> {props.results.result_for_50} {props.unit}</div><br/> 
                    <b> 75% </b> <div> {props.results.result_for_75} {props.unit}</div><br/> 
                    <b> 95% </b> <div> {props.results.result_for_95} {props.unit}</div><br/> 
                    <b> 99% </b> <div> {props.results.result_for_99} {props.unit}</div>
            </div>
        </div>
    )
}