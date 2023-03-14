import React from 'react';
import {Line} from "react-chartjs-2";

interface tableInterface {
    icons:string,
    title:string,

    transactions:Array<{title:string,
        subtitle:string,
        from:string,
        to:string,
        date:string,
        price:number,
        priceDollar:number,}>
}

const SellingTable = ({icons,title,transactions}:tableInterface) => {
    return (
        <div className={'w-full min-h-[381px] dark:bg-black-offset transition-colors duration-300 bg-offset p-8 relative'}>
            <div className={'absolute left-8 top-3 flex items-center'}>
                <img src={icons}/>
                <p className={'text-2xl text-white font-semibold ml-3'}>{title}</p>
            </div>
            <div className={'w-full rounded-xl mt-5 border-[0.5px] border-[rgba(255,255,255,0.4)]'}>
                <div className={'gap-2 p-4 grid dark:bg-[#192542] dark:bg-opacity-25 transition-colors duration-300 bg-[#82A6D0] bg-blend-multiply bg-opacity-25 rounded-t-xl font-bold text-white uppercase grid-cols-12 items-center'}>
                    <div className={'col-span-5 flex items-center justify-start'}>Asett</div>
                    <div className={'col-span-2 flex items-center justify-start'}>From</div>
                    <div className={'col-span-2 flex items-center justify-start'}>To</div>
                    <div className={'col-span-2 flex items-center justify-start'}>Purchased</div>
                    <div className={'flex items-center justify-end'}>Price</div>
                </div>
                {transactions.map((item,counter)=>{

                    let border=''
                    if(counter+1!=transactions.length){
                        border='border-b-[0.5px] border-[rgba(255,255,255,0.4)]'
                    }

                    return <div className={' gap-2 p-4 grid rounded-t-xl text-white grid-cols-12 items-center '+border} key={counter}>
                        <div className={'col-span-5 flex items-center justify-start'}>
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
                        <div className={'col-span-2 flex font-[200] items-center justify-start'}>{item.from}</div>
                        <div className={'col-span-2 flex font-[200] items-center justify-start'}>{item.to}</div>
                        <div className={'col-span-2 flex font-[200] items-center justify-start'}>{item.date}</div>
                        <div className={'flex flex-wrap items-center justify-end'}>
                            <div className={'flex block items-center'}>
                                <div className={'w-5 mr-2 h-5 bg-[#FF8B8B] rounded-full'}>

                                </div>
                                <p className={'font-bold'}>{new Intl.NumberFormat('en-US', ).format(item.priceDollar)}</p>
                            </div>
                            <div className={'block font-[200]'}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.priceDollar)}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SellingTable;