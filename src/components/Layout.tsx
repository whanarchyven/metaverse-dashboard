import React from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

const children = ( remainingTime :any) => {
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

    return `${hours}:${minutes}:${seconds}`
}
const Layout = (props:any) => {
    return (
        <div className={'min-h-screen back-grad grid grid-cols-12 grid-rows-1 gap-x-2'}>
            <div className={'col-span-2 h-full flex flex-col p-4 items-start justify-center '}>
                <div className={'fixed w-52 top-0'}>
                    <div className={'w-40 h-14 mb-5 mt-10 relative'}>
                        <Image src={'/images/icons/logo.svg'} alt={'logo'} layout={'fill'}></Image>
                    </div>
                    <div>
                        <Navbar></Navbar>
                    </div>
                    <div className={'flex mt-5 flex-col items-center'}>
                        <CountdownCircleTimer isPlaying={true} duration={152} trailColor={'#81A8FF'} colors={'#FFF'}>{({ remainingTime }) => <div className={'flex-col justify-center items-center'}><p className={'font-bold text-white text-3xl text-center'}>{children(remainingTime)}</p></div>}</CountdownCircleTimer>
                        <p className={'text-white mt-4 font-bold text-xl'}>Time till first sale</p>
                    </div>

                </div>
            </div>
            <div className={'col-span-10 py-16 px-5'}>
                <p className={'text-white mb-3 font-bold text-5xl'}>{props.title}</p>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;