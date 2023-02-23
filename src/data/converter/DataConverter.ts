import { elements } from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import DataFetch from "../DataFetch";
import PlainData from "../storage/PlainData";

class DataConverter {

    public getMetricsNameList(data: string) {
        var dataArray = this.filterData(data)

        return dataArray.map(element => element.split("{")[0]);
    }

    // splits data into lines and remove non-important data
    public filterData(data: string) {
        var dataArray = this.splitToArrayByNewLines(data)

        dataArray = this.filterStringArray(dataArray)
        
        return dataArray
    }

    public splitToArrayByNewLines(text: string) {
        return text.split("\n")
    }

    public filterStringArray(text: string[]) {
        return text.filter(function(value, index, arr){ 
            return value.charAt(0) !== "#";
        }).filter(function(value, index, arr){ 
            return value.charAt(0) !== "";
        })
    }
}

export { DataConverter };