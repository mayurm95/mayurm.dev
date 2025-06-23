"use client";

import React from 'react';
import SmallLogo from './icon/SmallLogo';
import Button from './ui/Button';
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from './ui/MenuButton';

export const Header = () => {
    return (
        <header className="flex  justify-center  sticky top-0 z-1">
            <div className="flex justify-between  w-[95vw] h-[90px] bg-[black] rounded-[10rem] ">
                <div className='lg::w-[20px]  max-sm:w-[230px] flex justify-center items-center mt-[15px]'>
                    <SmallLogo width='200' height='80' />
                </div>
                <nav className="w-full flex leading-[0rem] max-md:hidden  w-full items-center justify-evenly ">
                    <ul className="flex w-[70%] flex-row justify-evenly">
                        <li className="font-semibold">
                            <Link className="animationbtn dark:text-red" href="#home">
                                Home
                            </Link>
                        </li>
                        <li className="font-semibold">
                            <Link className="animationbtn dark:text-red" href="#about">About</Link>
                        </li>
                        <li className="font-semibold">
                            <Link className="animationbtn dark:text-red" href="#skills">Skills</Link>
                        </li>
                        <li className="font-semibold">
                            <Link className="animationbtn dark:text-red" href="#services">Services</Link>
                        </li>
                        <li className="font-semibold">
                            <Link className="animationbtn dark:text-red" href="/blog" replace={true}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <MenuButton className='min-md:hidden  mr-[2rem]'/>
                {/* <div className='flex justify-end w-full'>
                    <Image className='bg-[red] rounded-[100%]' src="/me1.png" width={60} height={70} alt=''/>
                </div> */}
                <div className='flex items-center gap-[3rem] justify-center mr-[1rem] font-semibold max-md:hidden leading-[0rem]'>
                    {/* <div className=''>
                        Login
                    </div>
                    <Button className='' onClick={() => { }} >
                        <WiMoonAltThirdQuarter />
                    </Button> */}
                </div>
            </div>
        </header>);
}