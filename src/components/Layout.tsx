import React, {useEffect, useState} from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

import {useRecoilState} from "recoil";
const children = (remainingTime: any) => {
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

}
const Layout = (props: any) => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const [navBarWide, setNavbarWide] = useState('span 3/ span 3')
    const [contentWide, setContentWide] = useState('span 9/ span 9')

    const [animationNav,setAnimationNav]=useState('')



    const toggleNav = () => {

        if(!isNavbarOpen){
            setAnimationNav(' animate-fade-in-left ')
        }
        else{
            setAnimationNav(' animate-fade-in-right ')
        }

        setTimeout(()=>{
            setIsNavbarOpen(!isNavbarOpen)
        },0)

    }



    if(!isNavbarOpen){
        return (
            <div className={'min-h-screen transition-all transition-colors duration-300 duration-300 dark:black-back-grad back-grad grid grid-cols-12 grid-rows-1 gap-1 overflow-clip'}>
                <div
                    className={'h-full flex flex-col p-4 items-start transition-transform transition-all col-span-3 justify-start transition-all duration-1000 ease-in-out '   +animationNav}
                >
                    <div className={'w-full relative'}>
                        <div className={'w-full'}>
                            <Navbar toggleNavbar={toggleNav} isOpen={isNavbarOpen}></Navbar>
                        </div>
                    </div>
                </div>
                <div className={'transition-all p-4 duration-1000 ease-in-out col-span-9'  +animationNav}  >
                    {props.children}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className={'min-h-screen transition-colors duration-300 dark:black-back-grad back-grad grid grid-cols-12 grid-rows-1 gap-1 overflow-clip'}>
                <div
                    className={'h-full flex flex-col p-4 items-start col-span-1 transition-transform transition-all justify-start transition-all duration-1000 ease-in-out ' +animationNav}
                >
                    <div className={'w-full relative'}>
                        <div className={'w-full'}>
                            <Navbar toggleNavbar={toggleNav} isOpen={isNavbarOpen}></Navbar>
                        </div>
                    </div>
                </div>
                <div className={'transition-all p-4 duration-1000 ease-in-out col-span-11' +animationNav} >
                    {props.children}
                </div>
            </div>
        );

    }

};

export default Layout;