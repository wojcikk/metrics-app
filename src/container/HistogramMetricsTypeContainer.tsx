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
                            <HistogramCard variableName={props.type} unit={props.unit}/>
                            
                            
                        </div> 
                </div>
            }
        </>
    )
}