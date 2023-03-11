import React from 'react';

interface radioTabInterface{
    currentValue: {
        name:string,
        icon:string,
        isIcon:boolean,
    },

    variants:Array<{
        name:string,
        icon:string,
        isIcon:boolean,
    }>

    changeValue:(item:{
        name:string,
        icon:string,
        isIcon:boolean,
    },)=>any
}

const RadioTab = ({currentValue,changeValue,variants}:radioTabInterface) => {
    return (
        <div className={'flex items-center w-fit justify-between p-1 rounded-full bg-[#82A6D0] bg-opacity-40'}>
            {variants.map((item)=>{
                if(currentValue.name==item.name){
                    return <div key={item.name}  className={'transition-all duration-300 cursor-pointer bg-white flex items-center justify-center bg-opacity-25 rounded-full w-8 aspect-square'}>
                        {item.isIcon?<img src={item.icon}/>:<p className={'text-white font-semibold'}>{item.icon}</p>}
                    </div>
                }
                else{
                    return <div key={item.name} onClick={()=>{changeValue(item)}} className={'transition-all duration-300 cursor-pointer opacity-50 flex items-center justify-center rounded-full w-8 aspect-square'}>
                        {item.isIcon?<img src={item.icon}/>:<p className={'text-white font-semibold'}>{item.icon}</p>}
                    </div>
                }
            })}
        </div>
    );
};

export default RadioTab;