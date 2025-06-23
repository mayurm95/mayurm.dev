"use client";

import Button from "@/component/ui/Button";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Full Stack Developer', 'React Js Developer', 'Node Js Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            showCursor: false,
            shuffle: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <main>

            <section className="p-[2rem] gap-[5rem] flex max-md:flex-col min-w-full h-full" id="home">

                <div className="flex font-bold max-md:w-full lg:w-[50%] h-[50%]  flex-col">
                    <div className="animate-pulse max-sm:text-[2rem] max-md:text-[3rem] min-md:text-[3rem] min-lg:text-[3rem] max-sm:pl-[1rem] pl-[5rem] m-[0px]">
                        Hi,<br />
                        I&apos;m <span className="text-[#cf1b1b]">Mayur</span><br />

                    </div>
                    <span className="max-sm:text-[2rem] min-md:text-[3rem] max-md:text-[3rem] min-lg:text-[3rem]  max-sm:pl-[1rem] pl-[5rem] m-[0px]" ref={el} />

                    <div className="max-sm:pl-[1rem] pl-[5rem]">

                    <Button className="mt-[1rem] w-[100px]  " onClick={() => { }}>Contact</Button>
                    </div>

                </div>
                <div className="flex font-bold max-md:w-full  flex-col">
                    <div className="rounded-[100%]">
                        <Image
                            className="object-cover sm:w-full md:w-[50vw] mask-b-from-50% mask-b-to-90%"
                            width={500}
                            height={600}
                            alt=""
                            src={'/me1.png'}
                        />
                    </div>
                </div>
            </section>
            <section className=" bg-white w-full h-[100vh] p-[4rem] w-full " id="about">

                <div className="font-semibold text-[2rem] text-[red]">
                    About Me
                </div>
            </section>
            <section className="w-full h-[100vh] p-[4rem]" id="skills">
                <div className="font-semibold text-[2rem] text-[red]">
                    Skills
                </div>
            </section>
            <section className=" bg-white w-full h-[100vh] p-[4rem]" id="project">
                <div className="font-semibold text-[2rem] text-[red]">
                    Projects
                </div>
            </section>
            <section className="w-full h-[100vh] p-[4rem]" id="services">
                <div className="font-semibold text-[2rem] text-[red]">
                    Services
                </div>
            </section>
        </main>
    );
}
