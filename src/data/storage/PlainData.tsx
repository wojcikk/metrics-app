import { Console } from "console";

import { useState } from "react";
import { useEffect } from "react";
import { DataConverter } from "../converter/DataConverter";
import { Metrics } from "../metrics/Metrics";
import { SingleMetric } from "../metrics/SingleMetric";
import { MetricsSet } from "../metrics/MetricsSet";
import { QueryConfigMetric } from "../metrics/QueryConfigMetric";
import DataFetch from "../DataFetch";
import { StringToMetricsConverter } from "../converter/StringToMetricsConverter";
 
const converter = new DataConverter();
const metricsConverter = new StringToMetricsConverter();

function PlainData() {

    var data = DataFetch();
    
    var filtered = converter.filterData(data);
    
    var metrics = metricsConverter.convertStringToMetrics(filtered);
    
    return (metrics);
}

export default PlainData;