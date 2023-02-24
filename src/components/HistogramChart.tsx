
import { Chart as ChartJS, BarController, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, Chart } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { json } from "stream/consumers";
import { callback } from "chart.js/dist/helpers/helpers.core";
import PlainData from "../data/storage/PlainData";
import HistogramData from "../data/storage/HistogramData";
import { display } from "@mui/system";
import "./styles/histogramChart.css"


ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export const HistogramChart = ( props: {
    variableName: string
    unit: string
}) => {
    var histogramData = HistogramData(props.variableName);

    const chartData = {
      labels: histogramData.map(item => item.name),
      datasets: [
        {
          label: 'Calculation result',
          data: histogramData.map(item => {
            if(item.result != undefined && props.unit == "s") {
                return (parseFloat(item.result)*1000).toString()
            } else {
                return item.result;
            }
        }),
          fill: true,
          backgroundColor: 'black',
        },
      ],
    }
  
    return (
        <div className='chart-container'>
            <div className='chart'> 
            {
                
                chartData && chartData.datasets && (
                <Bar 
                    data={chartData} 
                    options={ {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                font: {
                                    size: 14,
                                    family: 'Open Sans',
                                    weight: "800"
                                },
                            },
                            title: {
                                font: {
                                    size: 14,
                                    family: 'Open Sans',
                                    weight: "800"
                                },
                            }
                        },
                    },
                    scales: {
                        y: {
                            title: {
                            display: true,
                            text: 'Results',
                            font: {
                                size: 18,
                                family: 'Open Sans',
                                weight: "800"
                            },
                        }
                            
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Quantiles',
                                font: {
                                    size: 18,
                                    family: 'Open Sans',
                                    weight: "800"
                                },
                            }
                            },
                        }
                    }
                    }
                />
                )
            }
            </div>
        </div>
    );
}

function beforePrintHandler () {
    for (var id in Chart.instances) {
      Chart.instances[id].resize()
    }
  }

  