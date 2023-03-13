import React from 'react';
import {Line} from "react-chartjs-2";

interface tableInterface {
    icons:string,
    title:string,

    transactions:Array<{title:string,
        subtitle:string,
        from:number,
        hourlyDelta:number,
        dailyDelta:number,
        weeklyDelta:number,
        dailyVolume:number,}>
}

const SellingTable = ({icons,title,transactions}:tableInterface) => {
    return (
        <div className={'w-full min-h-[381px] dark:bg-black-offset transition-colors duration-300 bg-offset p-8 relative'}>
            <div className={'absolute left-8 top-3 flex items-center'}>
                <img src={icons}/>
                <p className={'text-2xl text-white font-semibold ml-3'}>{title}</p>
            </div>
            <div className={'w-full rounded-xl mt-5 border-[0.5px] border-[rgba(255,255,255,0.4)]'}>
                <div className={'gap-2 p-4 grid bg-[#82A6D0] dark:bg-[#192542] dark:bg-opacity-25 transition-colors duration-300 bg-blend-multiply bg-opacity-25 rounded-t-xl font-bold text-white uppercase grid-cols-6 items-center'}>
                    <div className={'flex items-center text-sm justify-start'}>Coin</div>
                    <div className={'flex items-center text-sm justify-end'}>From</div>
                    <div className={'flex items-center text-sm justify-end'}>Hourly Delta</div>
                    <div className={'flex items-center text-sm justify-end'}>Daily Delta</div>
                    <div className={'flex items-center text-sm justify-end'}>Weekly Delta</div>
                    <div className={'flex items-center text-sm justify-end'}>Daily Volume</div>
                </div>
                {transactions.map((item,counter)=>{

                    let border=''
                    if(counter+1!=transactions.length){
                        border='border-b-[0.5px] border-[rgba(255,255,255,0.4)]'
                    }

                    return <div className={' gap-2 p-4 grid rounded-t-xl text-white grid-cols-6 items-center '+border}>
                        <div className={'flex items-center justify-start'}>
                            <div className={'flex items-center mr-3 font-[200] justify-center'}>
                                {counter+1}
                            </div>
                            <div className={'w-10 h-10 rounded-full bg-[#FF8B8B]'}>

                            </div>
                            <div className={'ml-3'}>
                                <p className={'font-bold text-sm'}>{item.title}</p>
                                <p className={'font-light opacity-50 text-xs'}>{item.subtitle}</p>
                            </div>
                        </div>
                        <div className={' flex font-bold text-sm items-center justify-end'}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.from)}</div>
                        {item.hourlyDelta>=0?<div className={' flex font-bold text-[#00FF68] text-sm items-center justify-end'}>+{item.hourlyDelta}%</div>:<div className={' flex font-bold text-sm items-center justify-end'}>{item.hourlyDelta}%</div>}
                        {item.dailyDelta>=0?<div className={' flex font-bold text-[#00FF68] text-sm items-center justify-end'}>+{item.dailyDelta}%</div>:<div className={' flex font-bold text-sm items-center justify-end'}>{item.dailyDelta}%</div>}
                        {item.weeklyDelta>=0?<div className={' flex font-bold text-[#00FF68] text-sm items-center justify-end'}>+{item.weeklyDelta}%</div>:<div className={' flex font-bold text-sm items-center justify-end'}>{item.weeklyDelta}%</div>}
                        <div className={' flex font-bold text-sm items-center justify-end'}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.dailyVolume)}</div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SellingTable;