import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";

export interface linkTabInterface{
    url:string,
    title:string,
    icon:string,
    isDisabled?:boolean,
}

const LinkTab = ({url,title,icon,isDisabled}:linkTabInterface) => {

    const router=useRouter()

    const [styles,setStyles]=useState({
        bgTab:'',
        itemsOpacity:'',
    })

    useEffect(()=>{
        if(router.pathname==url){
            setStyles({...styles,bgTab: ' bg-white bg-opacity-[0.15] cursor-pointer '})
        }
        else{
            setStyles({...styles,bgTab: ''})
        }
        if(isDisabled){
            setStyles({...styles,itemsOpacity: ' opacity-50 '})
        }
    },[])

    return (
        <div className={'w-full h-12 py-2 px-4 rounded-xl flex items-center justify-between '+ styles.bgTab}>
            <div className={'flex' +styles.itemsOpacity} >
                <img src={icon} className={'aspect-square w-5'}/>
                <p className={'ml-2 font-semibold text-lg text-white'}>{title}</p>
            </div>
            {isDisabled?<div className={'rounded-full flex items-center justify-center blue-grad p-2 text-xs text-[#3F67C0] font-light'}>comming soon</div>:null}
        </div>
    );
};

export default LinkTab;