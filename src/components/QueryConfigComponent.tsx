import { Metrics } from "../data/metrics/Metrics"
import { Card } from "./Card"

export const QueryConfigComponent = (props: {
    data: Metrics,
    label: string
    unit: string
}) => {
    return (
        <div className="metrics-type-container">
            <div className="metrics-label">{props.label}</div>
            <div className="metrics-container">
                <Card variableName="app" calculationResult={props.data.queryConfigMetrics.app} unit={props.unit}/>
                <Card variableName="server" calculationResult={props.data.queryConfigMetrics.server} unit={props.unit}/>
                <Card variableName="env" calculationResult={props.data.queryConfigMetrics.env} unit={props.unit}/>
            </div>
        </div>
    )
}
