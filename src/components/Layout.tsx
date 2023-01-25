import React from 'react';
import Navbar from "@/components/Navbar";

const Layout = (props:any) => {
    return (
        <div className={'min-h-screen back-grad grid grid-cols-12 grid-rows-1 gap-x-2'}>
            <div className={'col-span-2 h-full flex flex-col p-4 items-start justify-center '}>
                <div className={'fixed w-52 top-48'}>
                    <Navbar></Navbar>
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