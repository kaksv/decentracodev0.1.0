"use client";

import styles from '@/app/ui/home.module.css';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import infoCards from './lib/InfoCards';
import { LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';

export default function Page() {
  return (
    // <main className='flex min-h-screen h-fit flex-col items-center justify-center relative bg-slate-200'>
    //   <Navbar />
    //   <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
    //     <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
    //       <div className='flex flex-col gap-2'>
    //         <h1 className='text-4xl font-black md:text-4xl'>Keep building</h1>
    //         <h2 className='text-md md:text-2xl'>Assured growth!</h2>
    //       </div>
    //       <p className='max-w-md text-sm md:text-base text-zinc-500'>Decentracode is dedicated to the growth of de.</p>
    //       <div className='w-full flex items-center justify-center md:justify-start gap-4'>
    //         <button className='w-48 h-12 text-sm sm:text-base rounded bg-blue-400 text-white hover:bg-white hover:text-slate-950 transition-colors'>Explore Decentracode</button>
    //         <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>Contact</button>
    //       </div>
    //     </div>

    //     <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
    //       {/* <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" 
    //       scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode' 
    //       /> */}
    //     </div>

    //   </header>

    
    // </main>
    <main className="flex min-h-screen flex-col p-2
    // bg-[url('/weare.jpg')] 
    bg-gradient-to-r from-[#e5e7eb] to-[#f3f4f6]
    ">
      <Navbar />
     
      
      <div className="mt-4 flex grow flex-col md:flex-row">
        <div className="flex flex-col justify-center rounded-lg bg-gray-100 px-2 py-2 md:w-2/5 md:px-10">
        
      
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Decentracode.</strong> A place for {' '}
            <Link href="https://decentracode.xyz/dashboard" className="text-blue-400 md:text-md">
              Code Challenges, Hackthons, Bounties & networking </Link>
            , in the web3 ecosystem.
            
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Explore</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            className='block md:hidden'
            src='/hero-anima.gif'
            width={560}
            height={620}
            alt='For mobile'
          />
        </div>
      </div>
      <section id="about" className="mt-2 w-full flex relative items-center justify-center p-4">
       <div className='absolute -z-10 h-full w-full overflow-hidden'>
         <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-3xl md:text-5xl font-bold text-slate-950'>Buidler Forcused!</h3>
           <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
           {infoCards.map((infoCard) => {
              return (
                <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                  <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
               </InfoCard>
              )
            })}
           </div>
        </div>
      </section>
    </main>
  );
}

interface IInfoCardProps {
  title:string;
  Icon:LucideIcon;
  children:ReactElement<any,any>
}

function InfoCard({title,Icon,children}:IInfoCardProps) {
  return (
    <div className='w-full h-60 flex flex-col justify-around items-center p-4 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-blue-400 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-md font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-10 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>Decentracode</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-blue-400 transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-blue-400 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-blue-400 transition-colors text-xs sm:text-base' href="#pricing">Explore DAPP</Link></li>
        </ul>
      </div>

    </div>
  )
}