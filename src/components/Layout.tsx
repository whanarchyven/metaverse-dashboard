import React, {useEffect, useState} from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

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

        setIsNavbarOpen(!isNavbarOpen)

        if (isNavbarOpen) {
            setNavbarWide('span 3/ span 3')
            setContentWide('span 9/ span 9')
        } else {
            setNavbarWide(' span 1/ span 1 ')
            setContentWide(' span 11/ span 11 ')
        }
    }

    if(!isNavbarOpen){
        return (
            <div className={'min-h-screen back-grad grid grid-cols-12 grid-rows-1 gap-1'}>
                <div
                    className={'h-full flex flex-col p-4 items-start transition-transform transition-all col-span-3 justify-start transition-all duration-1000 ease-in-out '}
                >
                    <div className={'w-full relative'}>
                        <div className={'w-full'}>
                            <Navbar toggleNavbar={toggleNav} isOpen={isNavbarOpen}></Navbar>
                        </div>
                    </div>
                </div>
                <div className={'transition-all p-4 duration-1000 ease-in-out col-span-9'} >
                    {props.children}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className={'min-h-screen back-grad grid grid-cols-12 grid-rows-1 gap-1'}>
                <div
                    className={'h-full flex flex-col p-4 items-start col-span-1 transition-transform transition-all justify-start transition-all duration-1000 ease-in-out '}
                >
                    <div className={'w-full relative'}>
                        <div className={'w-full'}>
                            <Navbar toggleNavbar={toggleNav} isOpen={isNavbarOpen}></Navbar>
                        </div>
                    </div>
                </div>
                <div className={'transition-all p-4 duration-1000 ease-in-out col-span-11'} >
                    {props.children}
                </div>
            </div>
        );

    }

};

export default Layout;