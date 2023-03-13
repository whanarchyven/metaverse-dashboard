import React, {useState} from 'react';

interface selectOptionsInterface {
    currentValue: string,
    variants: Array<string>,
    setCurrentValue: (item: string) => any,
}

const SelectOptionsList = ({currentValue, setCurrentValue, variants}: selectOptionsInterface) => {

    const [isOpen, setIsOpen] = useState(false)

    const translateIcon=()=>{
        if(isOpen){
            return ' rotate-0 '
        }
        else{
            return ' -rotate-90 '
        }
    }

    const toggleAnimation=()=>{
        if(isOpen){
            return ' animate-fade-in-down '
        }
        else{
            return ' animate-fade-in-up '
        }
    }

    return (
        <div className={'w-32 h-8 rounded-full flex items-center dark:border-0 transition-colors duration-300 dark:bg-black-offset justify-center border-white border-[1px]'}>
            <div className={'w-full relative text-white font-semibold text-center'} onClick={()=>{setIsOpen(!isOpen)}}>
                <div className={'flex cursor-pointer justify-between items-center px-3'}>
                    <p>{currentValue}</p>
                    <img src={'/images/icons/close_burger.svg'} className={'transition-all duration-300 rounded-full bg-white bg-opacity-[0.15] w-5 h-5 p-1 '+translateIcon()}/>
                </div>
                {isOpen ? <div className={'duration-300 transition-transform duration-300 absolute text-left pl-3 p-1 dark:bg-black-offset dark:text-white bg-white text-black z-50 w-32 left-0 top-9 rounded-xl' +toggleAnimation()}>{variants.map((item) => {
                    if(item!=currentValue){
                        return <p key={item} onClick={()=>{setCurrentValue(item)}} className={'my-2 hover:bg-black dark:border-white hover:bg-opacity-5 cursor-pointer border-b-[1px]'}>{item}</p>
                    }
                })}</div> :null}
            </div>
        </div>
    );
};

export default SelectOptionsList;