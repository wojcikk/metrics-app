import { elements } from "chart.js";
import { Card } from "../components/Card";
import { HistogramCard } from "../components/HistogramCard";
import { HistogramMetricsTypeContainer } from "./HistogramMetricsTypeContainer";
import { MetricsTypeContainer } from "./MetricsTypeContainer";
import { QueryConfigComponent } from "../components/QueryConfigComponent";

import { Metrics } from "../data/metrics/Metrics";
import { MetricsSet } from "../data/metrics/MetricsSet";
import { MetricsType } from "../data/metrics/MetricsType";
import PlainData from "../data/storage/PlainData";
import './ComponentsContainer.css';


function ComponentsContainer() {
    var data = PlainData();
    
    return (
        <div className="container">
            <QueryConfigComponent data={data} label={"QUERY CONFIG METRICS"} unit={""}/>
    
            <MetricsTypeContainer data={data} label={"DEVICE METRICS"} type={"_devices_"} unit={""}/>

            <MetricsTypeContainer data={data} label={"REQUEST METRICS"} type={"_requests_"} unit={""}/>

            <MetricsTypeContainer data={data} label={"CALCULATIONS METRICS"} type={"_calculations_counter"} unit={""}/>

            <MetricsTypeContainer data={data} label={"TIME METRICS (ms)"} type={"_time"} unit={"ms"}/>

            <MetricsTypeContainer data={data} label={"HTTP REQUESTS METRICS"} type={"_httprequests_"} unit={""}/>
            <HistogramMetricsTypeContainer data={data} label={"HTTP REQUESTS TRANSACTIONS TIME"} type={"_httprequests_transactions"} unit={"ms"}/>

            <HistogramMetricsTypeContainer data={data} label={"ONE DEVICE PROCESS TIME"} type={"_one_device_process_time"} unit={"ms"}/>
        </div>
        
    );
}

export default ComponentsContainer;