import { Console } from "console";

import { useState } from "react";
import { useEffect } from "react";

function PlainData() {
    // var d = fetch('http://localhost:6050/metrics')
    //     .then(response => response.text())
    //     .then(data => console.log(data));
    let [data, setData] = useState('');
    // [
    //     "application_httprequests_apdex{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 1",
    //     "application_httprequests_active{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 1",
    //     "application_httprequests_transactions_sum{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 0.3107222",
    //     "application_httprequests_transactions_count{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 53",
    //     "application_httprequests_transactions{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.5\"} 0.0015551",
    //     "application_httprequests_transactions{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.75\"} 0.009480699999999998",
    //     "application_httprequests_transactions{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.95\"} 0.009480699999999998",
    //     "application_httprequests_transactions{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.99\"} 0.0362923",
    //     "avm_essk_calculations_devices_to_process{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 10978",
    //     "avm_essk_calculations_devices_to_synchronization{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 3",
    //     "avm_essk_calculations_get_requests_counter{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 24377",
    //     "avm_essk_calculations_post_requests_counter{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 5",
    //     "avm_essk_calculations_process_time{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 47129",
    //     "avm_essk_calculations_synchronization_time{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 187",
    //     "avm_essk_calculations_total_execultion_time{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 48314",
    //     "avm_essk_calculations_calculations_counter{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 1",
    //     "avm_essk_calculations_one_device_process_time_sum{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 449058",
    //     "avm_essk_calculations_one_device_process_time_count{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"} 10974",
    //     "avm_essk_calculations_one_device_process_time{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.5\"} 17",
    //     "avm_essk_calculations_one_device_process_time{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.75\"} 49",
    //     "avm_essk_calculations_one_device_process_time{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.95\"} 99",
    //     "avm_essk_calculations_one_device_process_time{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\",quantile=\"0.99\"} 442"
    // ]
    useEffect(() => {
        fetch('http://localhost:6050/metrics')
            .then((response) => {
                return response.text();
            })
            .then(text => {
                setData(text.toString())
            });
    },[])

    const dataArray = data.split("\n")
    console.log(dataArray);

    var filtered = dataArray.filter(function(value, index, arr){ 
        return value.charAt(0) !== "#";
    }).filter(function(value, index, arr){
        return value !== "";
    });
    console.log(filtered);

    return (
        <div> <h1>{ 'Data: '} </h1> <br /> <hr /> {filtered.join('\r\n') }</div>
    );
}

export default PlainData;