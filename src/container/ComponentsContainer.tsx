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
import { useState } from "react";
import thankS from "../thankS";
import DataStore from "../data/storage/DataStore";
import { DataConverter } from "../data/converter/DataConverter";
import { StringToMetricsConverter } from "../data/converter/StringToMetricsConverter";

const getFilteredItems = (query: string, items: string[]) => {
    if (!query) {
      return items;
    }
    return items.filter((item) => item.includes(query));
  };

const converter = new DataConverter()
const metricsConverter = new StringToMetricsConverter();

function ComponentsContainer() {
    //var data = PlainData();
    const dataStore = new DataStore;

    console.log(converter.getMetricsNameList(dataStore.data))


    const [query, setQuery] = useState("");

    const { components_name } = thankS;
    // items looks like this: [{name: 'name1'}, {name: 'name2'}]
    ///console.log(data.singleMetrics)
    const filteredItems = getFilteredItems(query, components_name.name);

    const data = metricsConverter.convertStringToMetrics(converter.filterData(dataStore.data));

   
    return (
        <div className="container">
            <label>Search</label>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filteredItems.map((value) => (
                    
                    <Card variableName={value} 
                    calculationResult={
                        data.singleMetrics.find(elements => elements.metric.variableName.includes(value))?.metric.calculationResult.toString()
                    } 
                    unit="" />
                ))}
            </ul>
        </div>
    )
    
    // return (
    //     <div className="container">
    //         <QueryConfigComponent data={data} label={"QUERY CONFIG METRICS"} unit={""}/>
    
    //         <MetricsTypeContainer data={data} label={"DEVICE METRICS"} type={"_devices_"} unit={""}/>

    //         <MetricsTypeContainer data={data} label={"REQUEST METRICS"} type={"_requests_"} unit={""}/>

    //         <MetricsTypeContainer data={data} label={"CALCULATIONS METRICS"} type={"_calculations_counter"} unit={""}/>

    //         <MetricsTypeContainer data={data} label={"TIME METRICS (ms)"} type={"_time"} unit={"ms"}/>
            
    //         <HistogramMetricsTypeContainer data={data} label={"ONE DEVICE PROCESS TIME"} type={"avm_essk_calculations_one_device_process_time"} unit={"ms"}/>

    //         <MetricsTypeContainer data={data} label={"HTTP REQUESTS METRICS"} type={"_httprequests_"} unit={""}/>

    //         <HistogramMetricsTypeContainer data={data} label={"HTTP REQUESTS TRANSACTIONS TIME"} type={"application_httprequests_transactions"} unit={"s"}/>

    //     </div>
        
    // );
}

export default ComponentsContainer;