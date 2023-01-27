import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout";
import {Line} from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
);


const inter = Inter({ subsets: ['latin'] })

const renderTime = ({ remainingTime }:any) => {
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

    return (
        <div className="timer flex flex-col justify-center items-center">
            <p className="font-bold text-white text-md">Time till first sale</p>
            <p className="font-bold text-white text-3xl">{hours}:{minutes}:{seconds}</p>
        </div>
    );
};

const tableData=[
    {
        name:'Ariel',
        users:1234,
        price:1234,
    },
    {
        name:'Mankind',
        users:1234,
        price:1234,
    },
    {
        name:'LerIos',
        users:1234,
        price:1234,
    },
    {
        name:'BubbleKvas',
        users:1234,
        price:1234,
    },
    {
        name:'SeekerOL',
        users:1234,
        price:1234,
    },
]

const labels = ['Feb', 'Mar', 'Apr', 'Jun','Jul'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Ariel',
            data: [123,412,546,223,543],
            borderColor: '#FF3F4E',
            backgroundColor: '#FF3F4E',
        },
        {
            label: 'Mankind',
            data: [323,212,246,523,443],
            borderColor: '#EE87FF',
            backgroundColor: '#EE87FF',
        },
        {
            label: 'LerIos',
            data: [143,212,146,153,643],
            borderColor: '#49B3FF',
            backgroundColor: '#49B3FF',
        },
        {
            label: 'BubbleKvas',
            data: [223,212,246,223,743],
            borderColor: '#5FD9FF',
            backgroundColor: '#5FD9FF',
        },
        {
            label: 'SeekerOL',
            data: [423,512,646,323,243],
            borderColor: '#5FFFCF',
            backgroundColor: '#5FFFCF',
        },
    ],
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout title={'McDonalds'}>
            <div className={'grid grid-cols-2 gap-8 p-4 items-start'}>
                <div>
                    <table className="iksweb">
                        <tbody className={''}>
                        <tr>
                            <td><p className={'font-bold text-xl'}>Clan | group</p></td>
                            <td><p className={'font-bold text-xl'}>Hours</p></td>
                            <td><p className={'font-bold text-xl'}>Income</p></td>
                        </tr>
                        {tableData.map((item)=>{return <tr key={item.name}>
                            <td className={'font-bold '}><p className={'text-xl'}>{item.name}</p></td>
                            <td className={'font-bold '}><p className={'text-xl'}>{item.users}</p></td>
                            <td className={'font-bold '}><p className={'text-xl'}>{item.price} $</p></td>
                        </tr>})}

                        </tbody>
                    </table>
                </div>
                <div className={'flex flex-col items-center'}>
                    <div className={'p-5 w-full mb-5 bg-white'}>
                        <Bar data={data}></Bar>
                    </div>
                    <div className={'my-8 w-48 h-48 flex relative items-center justify-center'}>
                        <div className={'w-full h-full absolute top-0 left-0'}>
                            <Image src={'/images/donut_diagram.svg'} alt={'donut'} layout={'fill'}></Image>
                        </div>
                        <p className={'text-white w-40 font-bold text-center text-xl'}>Time till first sale:<br/>23:47</p>
                    </div>
                </div>
                <div className={'grid w-full col-span-2 grid-cols-2 grid-rows-2 gap-5'}>
                    <div className={'p-5 w-full mb-5 bg-white flex flex-col items-center '}>
                        <p className={'red-grad font-bold text-xl'}>MF</p>
                        <Line data={data}></Line>
                    </div>
                    <div className={'p-5 w-full mb-5 bg-white flex flex-col items-center '}>
                        <p className={'blue-grad font-bold text-xl'}>Header</p>
                        <Line data={data}></Line>
                    </div>
                    <div className={'p-5 w-full mb-5 bg-white flex flex-col items-center '}>
                        <p className={'green-grad font-bold text-xl'}>LTV</p>
                        <Line data={data}></Line>
                    </div>
                    <div className={'p-5 w-full mb-5 bg-white flex flex-col items-center '}>
                        <p className={'purple-grad font-bold text-xl'}>Retention</p>
                        <Line data={data}></Line>
                    </div>

                </div>
            </div>
        </Layout>
    </>
  )
}
