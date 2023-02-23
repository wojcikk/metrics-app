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
import HistogramMetrics from "../metrics/HistogramMetrics";
import DataStore from "./DataStore";
 
const converter = new DataConverter();
const metricsConverter = new StringToMetricsConverter();

const dataStore = new DataStore

function PlainData() {

    //var data = DataFetch();
    
    var filtered = converter.filterData(dataStore.data);
    
    var metrics = metricsConverter.convertStringToMetrics(filtered);


    return (metrics);
}


export default PlainData;