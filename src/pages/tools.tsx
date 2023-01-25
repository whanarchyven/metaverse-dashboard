import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout title={'Marketing tools'}>
            <div className={'w-[700px] h-[400px] relative'}>
                <Image src={'/images/marketing_tools.png'} alt={'marketing tools'} layout={'fill'}></Image>
            </div>
            <div className={'w-[700px] flex items-center justify-center'}>
                <button className={'blue-button w-96 h-12 text-2xl border-2 border-white text-white font-bold mt-4'}>Quests / scripts</button>
            </div>
            <div className={'w-[700px] mt-12 flex items-center justify-around'}>
                <div className={'w-24 h-24 relative hover:scale-125 transition-all duration-300 cursor-pointer'}>
                    <Image src={'/images/icons/mail.svg'} alt={'mail'} layout={'fill'}></Image>
                </div>
                <div className={'w-24 h-24 relative hover:scale-125 transition-all duration-300 cursor-pointer'}>
                    <Image src={'/images/icons/gamepad.svg'} alt={'mail'} layout={'fill'}></Image>
                </div>
                <div className={'w-24 h-24 relative hover:scale-125 transition-all duration-300 cursor-pointer'}>
                    <Image src={'/images/icons/player.svg'} alt={'mail'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'w-[700px] mt-12 flex items-center justify-center'}>
                <p className={'text-white font-bold text-5xl'}>Costumer communication</p>
            </div>
        </Layout>
    </>
  )
}