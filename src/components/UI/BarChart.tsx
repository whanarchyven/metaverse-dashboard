import React from 'react';
import {Bar, Line} from "react-chartjs-2";
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
import {useRecoilState} from "recoil";
import darkMode from "@/components/helpers/darkmodeAtom";


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

    const labels = ['31.01.23','31.01.23', '01.02.23','01.02.23', '02.02.23','02.02.23', '03.02.23','03.02.23','04.02.23','04.02.23','05.02.23','05.02.23', '06.02.23','06.02.23', '07.02.23','07.02.23', '07.02.23','07.02.23','08.02.23','08.02.23'];

    const [isDarkTheme,setIsDarkTheme]=useRecoilState(darkMode)

    const templateDatasets=(counter:number)=>{
        switch (counter){
            case 1:
                return ({
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255,255,255,1)',

                })
            case 2:
                return ({
                    borderColor: '#64FFF6',
                    backgroundColor: 'rgba(100,255,246,1)',

                })
            case 3:
                return ({
                    borderColor: 'rgba(51, 255, 0, 1)',
                    backgroundColor: 'rgba(51, 255, 0, 1)',

                })
            case 4:
                return ({

                    borderColor: 'rgba(247, 159, 255, 1)',
                    backgroundColor: 'rgba(247, 159, 255, 1)',

                })
            case 5:
                return ({
                    borderColor: 'rgba(172, 99, 190, 1)',
                    backgroundColor: 'rgba(172, 99, 190, 1)',

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
                borderRadius:8,
                lineTension:0.2,
                fill:isFilled,
            },
            {
                label: dataSets[1].label,
                data: dataSets[1].data,
                borderColor: templateDatasets(2).borderColor,
                backgroundColor: templateDatasets(2).backgroundColor,
                borderRadius:8,
                lineTension:0.3,
                fill:isFilled,
            },
        ],
    };

    const chartOptions={
        scales : {
            x:{
                stacked:true,
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
                stacked:true,
                ticks:{
                    font:{
                        weight:'200',
                        family: 'Roboto',
                        size:12
                    },
                    stepSize:steps,
                    callback: callbackFormat,

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
            tooltip:{
                // external: function(context:any) {
                //     // Tooltip Element
                //     let tooltipEl = document.getElementById('chartjs-tooltip');
                //
                //     // Create element on first render
                //     if (!tooltipEl) {
                //         tooltipEl = document.createElement('div');
                //         tooltipEl.id = 'chartjs-tooltip';
                //         tooltipEl.innerHTML = '<table></table>';
                //         document.body.appendChild(tooltipEl);
                //     }
                //
                //     // Hide if no tooltip
                //     const tooltipModel = context.tooltip;
                //     if (tooltipModel.opacity === 0) {
                //         tooltipEl.style.opacity = '0';
                //         return;
                //     }
                //
                //     // Set caret Position
                //     tooltipEl.classList.remove('above', 'below', 'no-transform');
                //     if (tooltipModel.yAlign) {
                //         tooltipEl.classList.add(tooltipModel.yAlign);
                //     } else {
                //         tooltipEl.classList.add('no-transform');
                //     }
                //
                //     function getBody(bodyItem:any) {
                //         return bodyItem.lines;
                //     }
                //
                //     // Set Text
                //     if (tooltipModel.body) {
                //         const titleLines = tooltipModel.title || [];
                //         const bodyLines = tooltipModel.body.map(getBody);
                //
                //         let innerHtml = '<thead>';
                //
                //         titleLines.forEach(function(title:any) {
                //             innerHtml += '<tr><th>' + title + '</th></tr>';
                //         });
                //         innerHtml += '</thead><tbody>';
                //
                //         bodyLines.forEach(function(body:any, i:any) {
                //             const colors = tooltipModel.labelColors[i];
                //             let style = 'background:' + colors.backgroundColor;
                //             style += '; border-color:' + colors.borderColor;
                //             style += '; border-width: 2px';
                //             const span = '<span style="' + style + '">' + body + '</span>';
                //             innerHtml += '<tr><td>' + span + '</td></tr>';
                //         });
                //         innerHtml += '</tbody>';
                //
                //         let tableRoot = tooltipEl.querySelector('table');
                //         if(tableRoot){
                //             tableRoot.innerHTML = innerHtml;
                //         }
                //     }
                //
                //     const position = context.chart.canvas.getBoundingClientRect();
                //
                //
                //     // Display, position, and set styles for font
                //     tooltipEl.style.opacity = '1';
                //     tooltipEl.style.backdropFilter='blur(24px)'
                //     tooltipEl.style.position = 'absolute';
                //     tooltipEl.style.backgroundColor='rgba(255,255,255,0.15)'
                //     tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                //     tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                //     tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                //     tooltipEl.style.pointerEvents = 'none';
                // },
                enabled:true,
                backgroundColor:isDarkTheme.isDark?'#3E576E ':'#6EBAF5 ',
                titleColor:'rgba(255,255,255,0.5)',
                bodyFont: {
                    weight:'300',
                    family:'Inter'
                },
                titleFont:{
                    weight:'400',
                    family:'Inter'
                },
                callbacks: {
                    label: function(context:any) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    },
                    labelTextColor: function(context:any) {
                        return context.dataset.borderColor;
                    },

                }
            },
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
        },
        maintainAspectRatio : false
    }
    ChartJS.defaults.color='rgba(255,255,255,1)';
    ChartJS.defaults.borderColor='rgba(255,255,255,0.1)';


    return (
        <div className={'w-full min-h-[381px] dark:bg-black-offset transition-colors duration-300 bg-offset p-8 relative'}>
            <div className={'absolute left-8 top-3 flex items-center'}>
                <img src={icons}/>
                <p className={'text-2xl text-white font-semibold ml-3'}>{title}</p>
            </div>
            <Bar options={chartOptions} data={data}></Bar>
        </div>
    );
};

export default GridChart;