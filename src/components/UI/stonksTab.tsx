import React from 'react';

interface Interface {
    stonks:number
}

const StonksTab = ({stonks}:Interface) => {
    if(stonks>=0){
        return (
            <div className={'flex w-24 rounded-md h-8 p-2 items-center justify-between green-grad'}>
                <img src={'/images/icons/stonks.svg'}/>
                <p className={'text-white font-semibold'}>{stonks}%</p>
            </div>
        );
    }
    else{
        return (
            <div className={'flex w-24 rounded-md h-8 p-2 items-center justify-between bg-black bg-opacity-[0.15]'}>
                <img className={'rotate-180'} src={'/images/icons/stonks.svg'}/>
                <p className={'text-white font-semibold'}>{stonks}%</p>
            </div>
        );
    }
};

export default StonksTab;