import { Metrics } from "../metrics/Metrics";


export default function MetricsNameStore (data: Metrics) {
    var metricsName:string[] = new Array()
    
    data.singleMetrics.map(element => {
        metricsName.push(element.metric.variableName)
    })


    return metricsName
}