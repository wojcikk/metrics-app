import { HistogramChart } from "./HistogramChart";

export const HistogramCard = (props: {
    variableName: string
    unit: string
}) => {
    return(
        <div className="card">
            <div className="variable-name-field">
                <p><b>{props.variableName} (ms) </b></p>
            </div>
            <HistogramChart variableName={props.variableName} unit={props.unit} />
        </div>
    )
}