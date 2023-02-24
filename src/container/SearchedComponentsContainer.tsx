import { useState } from "react";
import { Card } from "../components/Card"
import { HistogramCard } from "../components/HistogramCard";
import { DataConverter } from "../data/converter/DataConverter";
import { StringToMetricsConverter } from "../data/converter/StringToMetricsConverter";
import { Metrics } from "../data/metrics/Metrics"
import DataStore from "../data/storage/DataStore";
import MetricsNameStore from "../data/storage/MetricsNameStore";


const getFilteredItems = (query: string, items: string[]) => {
    if (!query) {
      return [];
    }
    return items.filter((item) => item.includes(query));
  };

const converter = new DataConverter()
const metricsConverter = new StringToMetricsConverter();

export const SearchedComponentsContainer = (props: {
    data: Metrics
    label: string
    unit: string
}) => {

    const dataStore = new DataStore;

    const [query, setQuery] = useState("");

    const filteredItems = getFilteredItems(query, MetricsNameStore(props.data));

    const data = metricsConverter.convertStringToMetrics(converter.filterData(dataStore.data));

    return (
        <div className="metrics-type-container">
            <input className="search-input" placeholder="Search" type="text" onChange={(e) => setQuery(e.target.value)} />
            <div>

                {filteredItems.map((value) => (
                    <Card variableName={value} 
                    calculationResult={
                        data.singleMetrics.find(elements => elements.metric.variableName.includes(value))?.metric.calculationResult.toString()
                    } 
                    unit="" />
                ))}
            </div>
        </div>
    )
    
} 