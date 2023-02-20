import { useState } from "react";
import { useEffect } from "react";

class DataConverter {


    
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