import { DataConverter } from "./converter/DataConverter";
import { StringToMetricsConverter } from "./converter/StringToMetricsConverter";
import DataStore from "./storage/DataStore";


const converter = new DataConverter();
const metricsConverter = new StringToMetricsConverter();



function MetricsData() {
    const dataStore = new DataStore
    
    var filtered = converter.filterData(dataStore.data);
    
    var metrics = metricsConverter.convertStringToMetrics(filtered);


    return (metrics);
}


export default MetricsData;