import { Metrics } from "../data/metrics/Metrics"
import { HistogramCard } from "../components/HistogramCard"

export const HistogramMetricsTypeContainer = (props: {
    data: Metrics
    label: string
    type: string
    unit: string
}) => {
    return (
        <>
            {props.data.histogramMetrics.find(
                    element => element.metricSet.variableName.includes(props.type)
                ) &&
                <div className="metrics-type-container">
                        <div className="metrics-label">{props.label}</div>
                        <div className="metrics-container">
                            {props.data.histogramMetrics.map(
                                (element) => element.metricSet.variableName.includes(props.type) &&
                                <HistogramCard variableName={element.metricSet.variableName} results={element.metricSet.calculationResults} unit={props.unit}/>
                            )}
                            
                        </div> 
                </div>
            }
        </>
    )
}