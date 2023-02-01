import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout";
import {useRouter} from "next/router";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    const tableData = [
        {
            name: 'Roblox',
            users: 1234,
            price: 1234,
        },
        {
            name: 'McDonalds',
            users: 1234,
            price: 1234,
        },
        {
            name: 'SandBox',
            users: 1234,
            price: 1234,
        },
        {
            name: 'Meta',
            users: 1234,
            price: 1234,
        },
        {
            name: 'Hive',
            users: 1234,
            price: 1234,
        },
    ]

    const router =useRouter()

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout title={'Your Metaverses'}>
                <div className={'grid grid-cols-12'}>
                    <div className={'grid grid-rows-2 col-span-10 grid-cols-3 gap-5'}>
                        {tableData.map((item) => {
                            return <div key={item.name} className={'flex flex-col items-center'} onClick={()=>{router.push(item.name.toLowerCase())}}>
                                <div className={'border-2 rounded-xl relative w-full aspect-square overflow-hidden'}>
                                    <Image src={`/images/metaverses/${item.name}.jpg`} alt={item.name} layout={'fill'} className={'rounded-xl object-cover hover:scale-125 transition-all duration-500 cursor-pointer'}></Image>
                                </div>
                                <p className={'font-bold text-white text-2xl mt-4'}>{item.name}</p>
                            </div>
                        })}
                        <div className={'flex flex-col items-center'}>
                            <div className={'border-2 rounded-xl relative text-9xl font-bold text-white w-full aspect-square bg-offset'}>
                                <span className={'w-full h-full items-center justify-center opacity-50 hover:opacity-100 hover:scale-125 duration-200 transition-all cursor-pointer flex'}><p>+</p></span>
                            </div>
                            <p className={'font-bold text-white text-2xl mt-4'}>Add metaverse</p>
                        </div>
                    </div>
                    {/*<div className={'fixed right-12 flex flex-col items-center justify-center'} onClick={()=>{router.push('/metaverse')}}>*/}
                    {/*    <div className={'w-24 top-32 h-24 relative'}>*/}
                    {/*        <Image src={'/images/icons/addButton.svg'} alt={'add'} layout={'fill'} className={'hover:scale-125 transition-all duration-500 cursor-pointer'}></Image>*/}
                    {/*    </div>*/}
                    {/*    <p className={'text-white  text-center font-bold mt-36'}>Add <br/> Metaverse</p>*/}
                    {/*</div>*/}
                </div>
            </Layout>
        </>
    )
}
