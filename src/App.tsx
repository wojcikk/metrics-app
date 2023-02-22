import fs from 'fs'

  import { useEffect, useState } from "react";
  import data from "./data.json"
  import histogramData from "./data/histogramData.json"
  import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
  import { Line } from 'react-chartjs-2';
  import './App.css';
import PlainData from "./data/storage/PlainData";
import { json } from "stream/consumers";
import { callback } from "chart.js/dist/helpers/helpers.core";
  
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );


  
  function App() {

    var dataMetrics = PlainData();


    var jsonMetrics = (JSON.parse(JSON.stringify(dataMetrics.histogramMetrics)))

    console.log(jsonMetrics);
    // type MyType = {
    //   arr: string[];
    // };

    // var obj: MyType = {
    //   arr: []
    // };

  
    // dataMetrics.histogramMetrics.map((item) => 
    //   obj.arr.push('{percentage: "50", result: ' + item.metricSet.calculationResults.result_for_50 + '}') &&
    //   obj.arr.push('{percentage: "75", result: ' + item.metricSet.calculationResults.result_for_75 + '}') &&
    //   obj.arr.push('{percentage: "95", result: ' + item.metricSet.calculationResults.result_for_95 + '}') &&
    //   obj.arr.push('{percentage: "99", result: ' + item.metricSet.calculationResults.result_for_99 + '}')
    // )
      // ,{', +
      // 'percentage: "75", ' +
      // 'result: ' + item.metricSet.calculationResults.result_for_75 +
      // '},{', +
      // 'percentage: "95", ' +
      // 'result: ' + item.metricSet.calculationResults.result_for_95 +
      // '},{', +
      // 'percentage: "99",' +
      // 'result: ' + item.metricSet.calculationResults.result_for_99 +
      // '}'
      // )
    

    // var jsonData = JSON.stringify(obj)

    // console.log(jsonData)

    // const chartData = {
    
    //   labels: JSON.parse(JSON.stringify(obj)).arr.map((item: any) => item),
    //   datasets: [
    //     {
    //       label: 'Revenue',
    //       data: histogramData.arr.map((item) => item.result),
    //       fill: true,
    //       borderColor: 'rgb(255, 99, 132)',
    //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //     },
    //   ],
    // }

    // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:6050/metrics', { mode:"no-cors", method: "GET"});
  //     const data = await response.text();
  //     consol.log(data);
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  
    return (
    //   <div className="App">
    //     <div className='chart'>
    //       <Line 
    //         data={chartData} 
    //         options={ {
    //             responsive: true,
    //             plugins: {
    //               legend: {
    //                 position: 'top',
    //               },
    //               title: {
    //                 display: true,
    //                 text: 'Revenue',
    //               },
    //             },
    //           }} 
    //       />
    //     </div>
    //   </div>
      null
    );
  }

export default App;
