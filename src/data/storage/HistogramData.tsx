import { DataConverter } from "../converter/DataConverter";
import DataFetch from "../DataFetch";
import DataStore from "./DataStore";

const converter = new DataConverter();


export default function HistogramData(metrics_name: string) {

    var dataStore = new DataStore();

    var filtered = converter.filterData(dataStore.data)

    var obj : {
        name: string | undefined;
        result: string | undefined;
    }[] = []
    

    filtered.forEach(line => {
        if(line.includes("quantile") && line.includes(metrics_name)) {
            var o = {
                name: getQuantile(line),
                result: line.split(" ")[1]
            }

            obj.push(o)            
        }
    })

    return obj
}

function getQuantile(line: string) {
    const re = /"(.*?)"/g;
    const result = [];
    let current;
    while (current = re.exec(line)) {
        result.push(current.pop());
    }

    return result[result.length-1];
}
