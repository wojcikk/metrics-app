import { Metrics } from "../metrics/Metrics";
import { SingleMetric } from "../metrics/SingleMetric";
import { MetricsSet } from "../metrics/MetricsSet";
import { QueryConfigMetric } from "../metrics/QueryConfigMetric";

class StringToMetricsConverter {

    public convertStringToMetrics(array: string[]) {
        var metrics = new Metrics()

        var metricQuantileResult: any[] = [];
        
        var index = 0;
        array.forEach(line => {
            if(!line.includes("quantile")) {
                var metric = this.convertSingleMetricString(line);
    
                metric.id = index;

                metrics.singleMetrics.push({metric})
                
            } else {
                var metricSet = new MetricsSet();
                metricQuantileResult.push(parseFloat(line.split(" ")[1]))
                if(metricQuantileResult.length == 4) {
                    metricSet.variableName = line.split(" ")[0].split("{")[0]

                    metricSet.calculationResults = this.assignQuantileResultsToMetric(line, metricQuantileResult)

                    metricSet.id = index;

                    metrics.histogramMetrics.push({metricSet})
                    metricQuantileResult = []
                }
            }
            index++;
        });

        metrics.queryConfigMetrics = this.assignQueryConfigMetric(array[0]);

        return metrics;
    }

    private convertSingleMetricString(line: string) {
        var metric = new SingleMetric();
    
        metric.variableName = line.split(" ")[0].split("{")[0];
        metric.calculationResult = parseFloat(line.split(" ")[1]);

        return metric;
    }

    private assignQuantileResultsToMetric(line: string, metricQuantileResult: any[]){
        var metricSet = new MetricsSet();

        metricSet.calculationResults = { 
            result_for_50: metricQuantileResult[0], 
            result_for_75: metricQuantileResult[1],
            result_for_95: metricQuantileResult[2],
            result_for_99: metricQuantileResult[3] 
        }

        return metricSet.calculationResults
    }

    private assignQueryConfigMetric(line: string) {
        const re = /"(.*?)"/g;
        const result = [];
        let current;
        while (current = re.exec(line)) {
            result.push(current.pop());
        }

        var queryConfigMetric = new QueryConfigMetric();

        queryConfigMetric.server = result[0]!;
        queryConfigMetric.app = result[1]!;
        queryConfigMetric.env = result[2]!;

        return queryConfigMetric;
    }
}

export { StringToMetricsConverter }