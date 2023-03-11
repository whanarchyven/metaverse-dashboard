import React from 'react';
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend,
    BarElement
);

interface GridChartInterface {
    dataSets:Array<{label:string,data:Array<number>}>,
    title:string,
    icons:string,
    isFilled?:boolean,
    maxValue:number,
    steps:number,
    beginAtZero:boolean,
    callbackFormat:(value:any, index:any, ticks:any)=>any
}






const GridChart = ({dataSets,title,icons,isFilled,maxValue,steps,beginAtZero,callbackFormat}:GridChartInterface) => {

    const labels = ['31.01.23', '01.02.23', '02.02.23', '03.02.23','04.02.23','05.02.23', '06.02.23', '07.02.23', '07.02.23','08.02.23'];


    const templateDatasets=(counter:number)=>{
        switch (counter){
            case 1:
                return ({
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255,255,255,0.5)',

                })
            case 2:
                return ({
                    borderColor: '#64FFF6',
                    backgroundColor: 'rgba(100,255,246,0.5)',

                })
            case 3:
                return ({
                    borderColor: 'rgba(51, 255, 0, 1)',
                    backgroundColor: 'rgba(51, 255, 0, 0.5)',

                })
            case 4:
                return ({

                    borderColor: 'rgba(247, 159, 255, 1)',
                    backgroundColor: 'rgba(247, 159, 255, 0.5)',

                })
            case 5:
                return ({
                    borderColor: 'rgba(172, 99, 190, 1)',
                    backgroundColor: 'rgba(172, 99, 190, 0.5)',

                })
            default:return ({
                borderColor: 'rgba(172, 99, 190, 1)',
                backgroundColor: 'rgba(172, 99, 190, 0.5)',

            })
        }
    }



     const data = {
        labels,
        datasets: [
            {
                label: dataSets[0].label,
                data: dataSets[0].data,
                borderColor: templateDatasets(1).borderColor,
                backgroundColor:  templateDatasets(1).backgroundColor,
                borderRadius:1,
                lineTension:0.2,
                fill:isFilled,
            },
            {
                label: dataSets[1].label,
                data: dataSets[1].data,
                borderColor: templateDatasets(2).borderColor,
                backgroundColor: templateDatasets(2).backgroundColor,
                borderRadius:1,
                lineTension:0.3,
                fill:isFilled,
            },
        ],
    };

    const chartOptions={
        scales : {
            x:{
                grid:{
                    // display:false
                },
                ticks:{
                    font:{
                        weight:'200',
                        family: 'Roboto',
                        size:12
                    },
                }
            },
            y:{
                ticks:{
                    font:{
                        weight:'200',
                        family: 'Roboto',
                        size:12
                    },
                    stepSize:steps,
                    callback:callbackFormat,

                },
                min:0,
                max:maxValue,
            },

        },
        elements:{
            point:{
                radius:1,
            }
        },

        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        family:"Roboto",
                        weight:'200',
                        size:14
                    },
                    usePointStyle:true,

                }
            },
            datalabels:{
                font:{
                    weight: '200'
                }
            }
        }
    }
    ChartJS.defaults.color='rgba(255,255,255,1)';
    ChartJS.defaults.borderColor='rgba(255,255,255,0.1)';


    return (
        <div className={'w-full bg-offset p-8 relative'}>
            <div className={'absolute left-8 top-3 flex items-center'}>
                <img src={icons}/>
                <p className={'text-2xl text-white font-semibold ml-3'}>{title}</p>
            </div>
            <Line options={chartOptions} data={data}></Line>
        </div>
    );
};

export default GridChart;