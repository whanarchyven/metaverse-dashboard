import React, {useState} from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false)

    const toggleMenu = () => {
        setIsHovered(!isHovered)
    }

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
        <div className={'w-full flex items-start justify-start'}
             onMouseLeave={() => {
                 toggleMenu()
             }}>
            {isHovered
                ?
                <div
                    className={'w-full transition-all duration-200 h-72 bg-white rounded-t-3xl gap-5 p-2 grid grid-cols-1 grid-rows-4 rounded-b-3xl'}
                    onMouseEnter={() => {
                        toggleMenu()
                    }}
                >
                    {pages.map(item => {
                        return <div key={item} className={'w-full hover:red-grad  cursor-pointer flex items-center justify-start pl-2 '} onClick={()=>{router.push(`/${item.toLowerCase()}`)}}>
                            <div className={'relative transition w-10 aspect-square'}><Image src={`/images/icons/${item}.svg`}
                                                                                  layout={'fill'} alt={item}/></div>
                            <p className={'text-2xl animate-text-oppacity font-bold ml-2 '+translateColor(item)}>{item}</p>
                        </div>
                    })}

                </div>
                :
                <div
                    className={'w-1/3 transition-all duration-200 h-72 bg-white rounded-t-3xl gap-5 p-2 grid grid-cols-1 grid-rows-4 rounded-b-3xl'}
                    onMouseEnter={() => {
                        toggleMenu()
                    }}
                >
                    {pages.map(item => {
                        return <div key={item} className={'w-full cursor-pointer flex items-center justify-start pl-2 '}>
                            <div className={'relative w-10 aspect-square'}><Image src={`/images/icons/${item}.svg`}
                                                                                  layout={'fill'} alt={item}/></div>
                        </div>
                    })}

                </div>}
        </div>

    );
};

export default Navbar;