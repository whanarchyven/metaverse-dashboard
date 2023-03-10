import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout";
import {Line} from "react-chartjs-2";
import {Bar} from 'react-chartjs-2';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import darkMode from "@/components/helpers/darkmodeAtom";
import {useEffect, useRef, useState} from "react";
import PercentChar from "@/components/UI/PercentChar";
import RadioTab from "@/components/UI/RadioTab";
import SelectOptionsList from "@/components/UI/SelectOptionsList";
import GridChart from "@/components/UI/GridChart";
import BarChart from "@/components/UI/BarChart";
import SellingTable from "@/components/UI/SellingTable";
import CoinsTable from "@/components/UI/CoinsTable";
import {useRecoilState} from "recoil";


const labels = ['Feb', 'Mar', 'Apr', 'Jun', 'Jul'];


export default function Home() {

    const times = [
        {
            name: 'daily',
            icon: 'D',
            isIcon: false,
        },
        {
            name: 'weekly',
            icon: 'W',
            isIcon: false,
        },
        {
            name: 'monthly',
            icon: 'M',
            isIcon: false,
        },
        {
            name: 'all',
            icon: 'All',
            isIcon: false,
        }
    ]
    const [time, setTime] = useState(times[0]);

    const grids = [
        {
            name: 'grid_four',
            icon: '/images/icons/grid_four.svg',
            isIcon: true,
        },
        {
            name: 'grid_six',
            icon: '/images/icons/grid_six.svg',
            isIcon: true,
        },
    ]

    const [grid, setGrid] = useState(grids[0])

    const firstFilters = [
        'Worlds',
        'Players',
        'Something'
    ]

    const [firstFilter, setFirstFilter] = useState(firstFilters[0])

    const secondFilters = [
        'Charts',
        'Bars',
        'Tables',
        'Tabs',
    ]

    const [secondFilter, setSecondFilter] = useState(secondFilters[0])


    const transactions = [
        {
            title: 'For Inquiries (Discord @lahlol.hband) ',
            subtitle: 'Decentraland',
            from: '0x4a34...eccc',
            to: '0x4a34...eccc',
            date: 'Mar 4, 2023',
            price: 77000.00,
            priceDollar: 46439.68,
        },
        {
            title: 'For Inquiries (Discord @lahlol.hband) ',
            subtitle: 'Decentraland',
            from: '0x4a34...eccc',
            to: '0x4a34...eccc',
            date: 'Mar 4, 2023',
            price: 77000.00,
            priceDollar: 46439.68,
        },
        {
            title: 'For Inquiries (Discord @lahlol.hband) ',
            subtitle: 'Decentraland',
            from: '0x4a34...eccc',
            to: '0x4a34...eccc',
            date: 'Mar 4, 2023',
            price: 77000.00,
            priceDollar: 46439.68,
        },
        {
            title: 'For Inquiries (Discord @lahlol.hband) ',
            subtitle: 'Decentraland',
            from: '0x4a34...eccc',
            to: '0x4a34...eccc',
            date: 'Mar 4, 2023',
            price: 77000.00,
            priceDollar: 46439.68,
        },
        {
            title: 'For Inquiries (Discord @lahlol.hband) ',
            subtitle: 'Decentraland',
            from: '0x4a34...eccc',
            to: '0x4a34...eccc',
            date: 'Mar 4, 2023',
            price: 77000.00,
            priceDollar: 46439.68,
        },
    ];


    const coin = [
        {
            title: 'Bitcoin',
            subtitle: 'BTC',
            from: 22445.68,
            hourlyDelta: -0.09,
            dailyDelta: 0.95,
            weeklyDelta: -4.64,
            dailyVolume: 15605361652.36
        },
        {
            title: 'Bitcoin',
            subtitle: 'BTC',
            from: 22445.68,
            hourlyDelta: -0.09,
            dailyDelta: 0.95,
            weeklyDelta: -4.64,
            dailyVolume: 15605361652.36
        },
        {
            title: 'Bitcoin',
            subtitle: 'BTC',
            from: 22445.68,
            hourlyDelta: -0.09,
            dailyDelta: 0.95,
            weeklyDelta: -4.64,
            dailyVolume: 15605361652.36
        },
        {
            title: 'Bitcoin',
            subtitle: 'BTC',
            from: 22445.68,
            hourlyDelta: -0.09,
            dailyDelta: 0.95,
            weeklyDelta: -4.64,
            dailyVolume: 15605361652.36
        },
    ];

    const [isDarkTheme,setIsDarkTheme]=useRecoilState(darkMode)

    const [darkTrigger,setDarkTrigger]=useState('')

    useEffect(()=>{
        if(isDarkTheme.isDark){
            setDarkTrigger(' dark ')
        }
        else{
            setDarkTrigger('')
        }
    },[isDarkTheme])

    return (
        <div className={darkTrigger}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout title={'Statistics'}>
                <div className={'flex mb-5 justify-between'}>
                    <div className={'flex items-center gap-2'}>
                        <p className={'font-light text-white text-sm'}>Filter by</p>
                        <SelectOptionsList currentValue={firstFilter} variants={firstFilters}
                                           setCurrentValue={setFirstFilter}></SelectOptionsList>
                        <SelectOptionsList currentValue={secondFilter} variants={secondFilters}
                                           setCurrentValue={setSecondFilter}></SelectOptionsList>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <RadioTab currentValue={time} variants={times} changeValue={setTime}></RadioTab>
                        <RadioTab currentValue={grid} variants={grids} changeValue={setGrid}></RadioTab>
                    </div>
                </div>
                <div className={'grid w-full col-span-2 grid-cols-4 gap-x-4'}>
                    <PercentChar stonks={-1.97} title={'Market cup'} value={'$515,255,157'} labels={labels}
                                 data={[158, 116, 127, 11, 150]}></PercentChar>
                    <PercentChar stonks={0.68} title={'Total Volume'} value={'$1,398,194'} labels={labels}
                                 data={[68, 72, 78, 76, 82]}></PercentChar>
                    <PercentChar stonks={-1.74} title={'Total sales'} value={688} labels={labels}
                                 data={[82, 81, 82, 81, 80]}></PercentChar>
                    <PercentChar stonks={0.69} title={'Avg Concurrent Players'} value={451} labels={labels}
                                 data={[123, 125, 127, 129, 132]}></PercentChar>
                </div>
                <div className={'mt-4'}>
                    <GridChart callbackFormat={(label: number) => {
                        if (label / 1000 >= 1) {
                            return '$' + label / 1000 + ' K';
                        } else {
                            return '$' + label;
                        }
                    }} beginAtZero={true} steps={500} maxValue={2000}
                               dataSets={[{
                                   label: 'Decentraland',
                                   data: [357, 428, 712, 1443, 1765, 1145, 1441, 1432, 1443, 1745,]
                               }, {
                                   label: 'The Sandbox',
                                   data: [500, 1102, 1242, 1246, 1357, 1459, 1762, 1668, 1764, 1972]
                               }]} isFilled={false} title={'Floor price'} icons={'/images/icons/check.svg'}></GridChart>
                </div>
                <div className={'mt-4'}>
                    <GridChart callbackFormat={(label: number) => {
                        if (label / 1000000 >= 1) {
                            return '$' + label / 1000000 + ' M';
                        } else {
                            return '$' + label;
                        }
                    }} beginAtZero={true} steps={200000000} maxValue={800000000}
                               dataSets={[{
                                   label: 'Decentraland',
                                   data: [55700000, 52800000, 51200000, 544300000, 576500000, 514500000, 544100000, 543200000, 544300000, 574500000,]
                               }, {
                                   label: 'The Sandbox',
                                   data: [50000000, 510200000, 524200000, 524600000, 535700000, 545900000, 576200000, 566800000, 576400000, 597200000]
                               }]} isFilled={true} title={'Market Cap.'} icons={'/images/icons/check.svg'}></GridChart>
                </div>

                <div className={'mt-4'}>
                    <BarChart callbackFormat={(label: number) => {
                        if (label / 1000000 >= 1) {
                            return '$' + label / 1000000 + ' M';
                        } else {
                            return '$' + label;
                        }
                    }} beginAtZero={true} steps={20000000} maxValue={200000000}
                              dataSets={[{
                                  label: 'Decentraland',
                                  data: [5999900, 5999900, 5999900, 5999900, 5999900, 5999900, 54999900, 54999900, 57999900, 57999900, 51999900, 51999900, 54999900, 54999900, 54999900, 54999900, 54999900, 54999900, 57999900, 57999900,]
                              }, {
                                  label: 'The Sandbox',
                                  data: [5999900, 5999900, 51999900, 51999900, 52999900, 52999900, 52999900, 52999900, 53999900, 53999900, 54999900, 54999900, 57999900, 57999900, 56999900, 56999900, 57999900, 57999900, 59999900, 59999900]
                              }]} isFilled={true} title={'Volume'} icons={'/images/icons/check.svg'}></BarChart>
                </div>
                <div className={'mt-4'}>
                    <SellingTable transactions={transactions} icons={'/images/icons/star.svg'}
                                  title={'Top Selling Lands'}></SellingTable>
                </div>

                <div className={'mt-4'}>
                    <CoinsTable transactions={coin} icons={'/images/icons/dollar.svg'}
                                title={'Coins'}></CoinsTable>
                </div>

            </Layout>
        </div>
    )
}
