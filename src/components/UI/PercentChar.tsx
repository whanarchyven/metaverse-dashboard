import React from 'react';
import {Line} from "react-chartjs-2";
import StonksTab from "@/components/UI/stonksTab";


interface percentChar{
    data:Array<number>
    labels:Array<string>
    title:string,
    value:number|string,
    stonks:number,

}


const PercentChar = ({data,labels,title,value,stonks}:percentChar) => {

    const marketData={
        labels,
        datasets:[
            {
                label: 'Filled',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: '#fff',
                data: data,
                fill: true,
                lineTension:0.4,
            },
        ]
    }

    const chartOptions={
        type:'line',

        scales : {
            x:{
                display:false,
                grid:{
                    display:false
                },
                ticks:{
                    font:{
                        weight:'bold',
                        family: 'Roboto',
                        size:16
                    }
                }
            },
            y:{
                display:false,
                ticks:{
                    font:{
                        weight:'bold',
                        family: 'Roboto',
                        size:12
                    },

                }
            }
        },
        elements:{
            point:{
                radius:1
            }
        },

        plugins: {
            legend: {
                display:false,
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        family:"Roboto",
                        weight:'bold',
                        size:14
                    },
                    usePointStyle:true,

                }
            },
            datalabels:{
                font:{
                    weight: 'bold'
                }
            }
        },
        maintainAspectRatio : false
    }

    return (
        <div className={'w-full dark:bg-black-offset transition-colors duration-300 mb-5 relative overflow-clip bg-white  bg-offset rounded-xl '}>
            <div className={'pl-3 mt-2 mb-4'}>
                <p className={'text-white self-start mb-3 font-light opacity-50 text-sm'}>{title}</p>
                <p className={'text-white self-start mb-3 font-black text-3xl'}>{value}</p>
                <StonksTab stonks={stonks}></StonksTab>
            </div>
            <div className={'relative h-[120px] -ml-5 scale-[1.25]'}>
                <Line className={''} id={'suka'} options={chartOptions} data={marketData}></Line>
            </div>
        </div>
    );
};

export default PercentChar;