import { Console } from "console";

import { useState } from "react";
import { useEffect } from "react";

const DataFetch = function() {

    let [data, setData] = useState('');

    useEffect(() => {
        fetch('http://localhost:6050/metrics')
            .then((response) => {
                return response.text();
            })
            .then(text => {
                setData(text.toString())
            });
    },[])

    return data;
}

export default DataFetch;