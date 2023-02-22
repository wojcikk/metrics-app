import { Console } from "console";

import { useState } from "react";
import { useEffect } from "react";

const DataFetch = function() {

    let [data, setData] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:6050/metrics')
    //         .then((response) => {
    //             return response.text();
    //         })
    //         .then(text => {
    //             setData(text.toString())
    //         })
    //         .catch(function (err) {
    //             console.log('error: ' + err);
    //         });
    // }, [])

    const makeAPICall = async () => {
        try {
            const response = await fetch('http://localhost:6050/metrics');
            setData(await response.text());
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        makeAPICall();
    }, [])

    return data;
}

export default DataFetch;