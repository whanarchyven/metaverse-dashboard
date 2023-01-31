import React, {useState} from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false)


    const translateColor=(color:string)=>{
        switch (color){
            case 'Statistics':return'red-grad'
            case 'Tools':return'purple-grad'
            case 'Profile':return'green-grad'
            case 'Metaverses':return'blue-grad'
        }
    }

    const router=useRouter()


    const pages = ['Statistics', 'Tools', 'Profile', 'Metaverses']

    return (
        <div className={'w-full flex items-start justify-start'}>
            <div
                className={'w-full h-72 bg-offset rounded-t-3xl gap-5 p-4 grid grid-cols-1 grid-rows-4 rounded-b-3xl'}

            >
                {pages.map(item => {
                    if(('/'+item).toLowerCase()!=router.pathname){
                        return <div key={item} className={'w-full opacity-50 transition-all duration-200 hover:opacity-100 hover:scale-110 cursor-pointer flex items-center justify-start pl-2 '} onClick={()=>{router.push(`/${item.toLowerCase()}`)}}>
                            <div className={'relative transition w-8 aspect-square'}><Image src={`/images/icons/${item}.svg`}
                                                                                            layout={'fill'} alt={item}/></div>
                            <p className={'text-xl animate-text-oppacity font-bold ml-2 text-white'}>{item}</p>
                        </div>
                    }
                    else{
                        return <div key={item} className={'w-full opacity-100 transition-all duration-200 scale-110 cursor-pointer flex items-center justify-start pl-2 '} onClick={()=>{router.push(`/${item.toLowerCase()}`)}}>
                            <div className={'relative transition w-8 aspect-square'}><Image src={`/images/icons/${item}.svg`}
                                                                                            layout={'fill'} alt={item}/></div>
                            <p className={'text-xl animate-text-oppacity font-bold ml-2 text-white'}>{item}</p>
                        </div>
                    }
                })}

            </div>
        </div>

    );
};

export default Navbar;