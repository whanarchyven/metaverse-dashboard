import React, {useState} from 'react';
import Image from "next/image";
import {useRouter} from "next/router";
import LinkTab from "@/components/UI/LinkTab";
import darkMode from "@/components/helpers/darkmodeAtom";
import it from "node:test";
import {useRecoilState} from "recoil";

interface navbar {
    isOpen: boolean
    toggleNavbar: () => any
}

const Navbar = ({isOpen, toggleNavbar}: navbar) => {

    const router = useRouter()

    const [isDarkTheme,setIsDarkTheme]=useRecoilState(darkMode)

    const tempPages = [
        {
            url: '/docs',
            title: 'API Docs',
            icon: '/images/links/docs.svg',
            isDisabled: true,
        },
        {
            url: '/feedback',
            title: 'Feedback',
            icon: '/images/links/feedback.svg',
            isDisabled: true,
        },
        {
            url: '/settings',
            title: 'Settings',
            icon: '/images/links/settings.svg',
            isDisabled: true,
        },
    ]


    if (!isOpen) {
        return (
            <div className={'w-full transform-gpu p-5 transition-colors duration-300 dark:bg-black-offset bg-offset bg-opacity-25 flex flex-col items-start justify-start'}>
                <div className={'flex items-center w-full justify-between'}>
                    <div className={'w-48 h-16 mb-8 mt-2 relative'}>
                        <Image src={'/images/icons/logo.svg'} alt={'logo'} layout={'fill'}></Image>
                    </div>
                    <div
                        className={'aspect-square cursor-pointer flex justify-center items-center p-2 relative w-10 rounded-full bg-white bg-opacity-[0.15]'}
                        onClick={() => {
                            toggleNavbar()
                        }}>
                        <img src={'/images/icons/close_burger.svg'} className={'w-full h-full'}/>
                    </div>
                </div>
                <div
                    className={'w-full rounded-t-3xl flex flex-col rounded-b-3xl'}

                >
                    <LinkTab url={'/statistics'} title={'Welcome'} icon={'/images/links/welcome.svg'}></LinkTab>
                    <p className={'text-white font-light mt-3 mb-3 text-xs'}>Portfolio</p>
                    <LinkTab url={'/overview'} isDisabled={true} title={'Overview'}
                             icon={'/images/links/overview.svg'}></LinkTab>
                    <p className={'text-white font-light mt-3 mb-3 text-xs'}>Scenes</p>
                    <LinkTab url={'/compare'} title={'Compare scenes'} icon={'/images/links/compare.svg'}></LinkTab>
                    <div className={'mt-10 mb-10 bg-white rounded-full h-[0.5px] w-full opacity-40 border-white'}>

                    </div>
                    {tempPages.map((item) => {
                        return <LinkTab key={item.title} url={item.url} title={item.title} icon={item.icon}
                                        isDisabled={item.isDisabled}></LinkTab>
                    })}

                    <div className={'w-full h-12 py-2 px-4 rounded-xl flex items-center justify-between '}>
                        <div className={'flex'} >
                            <img src={isDarkTheme.isDark?'/images/icons/dark_theme.svg':'/images/icons/light_theme.svg'} className={'aspect-square w-5'}/>
                            <p className={'ml-2 font-semibold text-lg text-white'}>{isDarkTheme.isDark?'Dark theme':'Light theme'}</p>
                        </div>
                        <div className={' h-8 bg-white cursor-pointer dark:justify-end duration-300 rounded-full w-14 p-[0.3rem] flex justify-start bg-opacity-[0.15]'} onClick={()=>{setIsDarkTheme({isDark: !isDarkTheme.isDark})}}>
                            <div className={'animate-switch-theme-off bg-white dark:animate-switch-theme-on dark:bg-[#8BF8FF] rounded-full h-full transition-all duration-300 aspect-square'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div
                className={'aspect-square cursor-pointer flex justify-center items-center p-4 relative w-16 rounded-full dark:bg-black-offset bg-white bg-opacity-[0.15]'}
                onClick={() => {
                    toggleNavbar()
                }}>
                <img src={'/images/icons/open_burger.svg'} className={'w-full h-full'}/>
            </div>)
    }
};

export default Navbar;