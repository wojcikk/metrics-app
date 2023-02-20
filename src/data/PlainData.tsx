import { Console } from "console";

import { useState } from "react";
import { useEffect } from "react";
import { DataConverter } from "./converter/DataConverter";
import { Metrics } from "./metrics/Metrics";
import { SingleMetric } from "./metrics/SingleMetric";
import { MetricsSet } from "./metrics/MetricsSet";
import { QueryConfigMetric } from "./metrics/QueryConfigMetric";
import DataFetch from "./DataFetch";
 
const converter = new DataConverter();

function PlainData() {

    var data = DataFetch();
    var filtered = converter.filterData(data);

    var metricQuantileResult: any[] = [];
    
    var metrics = new Metrics()
    filtered.forEach(line => {
    
        if(!line.includes("quantile")) {

            var metric = new SingleMetric();

            metric.variableName = line.split(" ")[0].split("{")[0];
            metric.calculationResult = parseFloat(line.split(" ")[1]);

            metrics.singleMetrics.push({metric})
        } else {
            var metricSet = new MetricsSet();
            metricQuantileResult.push(parseFloat(line.split(" ")[1]))
            if(metricQuantileResult.length == 4) {
                metricSet.variableName = line.split(" ")[0].split("{")[0]
                metricSet.calculationResults = { 
                    result_for_50: metricQuantileResult[0], 
                    result_for_75: metricQuantileResult[1],
                    result_for_95: metricQuantileResult[2],
                    result_for_99: metricQuantileResult[3] 
                }

                metrics.histogramMetrics.push({metricSet})
                // console.log(metricQuantileResult)
                metricQuantileResult = []
            }

            
        }
    });

    const re = /"(.*?)"/g;
    const result = [];
    let current;
    while (current = re.exec(filtered[0])) {
        result.push(current.pop());
    }

    var queryConfigMetric = new QueryConfigMetric();

    queryConfigMetric.server = result[0]!;
    queryConfigMetric.app = result[1]!;
    queryConfigMetric.env = result[2]!;

    metrics.queryConfigMetrics = queryConfigMetric

    console.log(filtered)

    console.log(metrics)
    
    // return (
    //     <div> <h1>{ 'Data: '} </h1> 
    //         <br /> 
    //         <hr /> 
    //         {filtered.join('\r') }
            
    //     </div>
    // );
    return (metrics);
}

export default PlainData;