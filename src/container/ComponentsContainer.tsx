
import { HistogramCard } from "../components/HistogramCard";
import { HistogramMetricsTypeContainer } from "./HistogramMetricsTypeContainer";
import { MetricsTypeContainer } from "./MetricsTypeContainer";
import { QueryConfigComponent } from "../components/QueryConfigComponent";

import PlainData from "../data/storage/PlainData";
import './ComponentsContainer.css';
import { DataConverter } from "../data/converter/DataConverter";
import { StringToMetricsConverter } from "../data/converter/StringToMetricsConverter";
import { SearchedComponentsContainer } from "./SearchedComponentsContainer";

const getFilteredItems = (query: string, items: string[]) => {
    if (!query) {
      return items;
    }
    return items.filter((item) => item.includes(query));
  };


function ComponentsContainer() {
    var data = PlainData();

    return (
        <div className="container">
            <SearchedComponentsContainer data={data} label={"SEARCHING"} unit={""}/>

            <QueryConfigComponent data={data} label={"QUERY CONFIG METRICS"} unit={""}/>
    
            <MetricsTypeContainer data={data} label={"DEVICE METRICS"} type={"_devices_"} unit={""}/>

            <MetricsTypeContainer data={data} label={"REQUEST METRICS"} type={"_requests_"} unit={""}/>

            <MetricsTypeContainer data={data} label={"CALCULATIONS METRICS"} type={"_calculations_counter"} unit={""}/>

            <MetricsTypeContainer data={data} label={"TIME METRICS (ms)"} type={"_time"} unit={"ms"}/>
            
            <HistogramMetricsTypeContainer data={data} label={"ONE DEVICE PROCESS TIME"} type={"avm_essk_calculations_one_device_process_time"} unit={"ms"}/>

            <MetricsTypeContainer data={data} label={"HTTP REQUESTS METRICS"} type={"_httprequests_"} unit={""}/>

            <HistogramMetricsTypeContainer data={data} label={"HTTP REQUESTS TRANSACTIONS TIME"} type={"application_httprequests_transactions"} unit={"s"}/>

        </div>
        
    );
}

export default ComponentsContainer;