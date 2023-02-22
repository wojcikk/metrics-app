import { Metrics } from "../data/metrics/Metrics"
import { Card } from "../components/Card"

export const MetricsTypeContainer = (props: {
    data: Metrics
    label: string
    type: string
    unit: string
}) => {
    return (
        <>
            {props.data.singleMetrics.find(
                    element => element.metric.variableName.includes(props.type)
                ) &&
                <div className="metrics-type-container">
                        <div className="metrics-label">{props.label}</div>
                        <div className="metrics-container">
                            {props.data.singleMetrics.map(
                                (element) => element.metric.variableName.includes(props.type) &&
                                    <Card variableName={element.metric.variableName} calculationResult={element.metric.calculationResult.toString()} unit={props.unit} />
                            )}
                        </div> 
                </div>
            }
        </>
    )
} 