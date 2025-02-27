"use client";

import { CSSProperties } from "react";

// Components
import { Button, Container, Header } from "./components";

// Fonts
import { MediaSans } from "./utils/fonts";

// Icons
import { Code, Figma } from "lucide-react";

// Hooks
import { useWorkForm } from "./components/base/WorkForm/context/context";

export default function Home() {    
    const {
        handleModalActiveState
    } = useWorkForm();

    return (
        <main className="w-full flex flex-col">
            <Header />

            <section className="my-[82px] flex-1 flex justify-center items-center md:block md:mt-[96px]">
                <Container>
                    <div className='flex flex-col gap-6 mb-16 md:mb-0'>
                        <p className='text-[20px] md:text-[24px] text-center md:text-left 2xl:text-[32px] text-[#1B1B1B]'>👋 Hey, I&apos;m Hasnaat and I&apos;m a</p>

                        <div className='flex flex-col'>
                            <h2 className={`${MediaSans.className} text-[18vw] text-center md:text-left md:text-[11.6vw] lg:text-[9.2vw] xl:text-[9.7vw] 2xl:text-[9vw] leading-[100%]`}>Front-End Developer <span className="contents md:hidden">& </span></h2>
                            <h2
                                className={`${MediaSans.className} text-[18vw] text-center md:text-left md:text-[14.5vw] lg:text-[11.5vw] xl:text-[9.7vw] 2xl:text-[9vw] leading-[100%]`}
                                style={{
                                    WebkitTextStroke: "1.5px black",
                                    color: "#fff"
                                } as CSSProperties}
                            ><span className="contents md:hidden">The </span><span className="hidden md:contents">& </span>Content Creator</h2>
                        </div>

                        <p className='text-[20px] md:text-[24px] text-center md:text-left 2xl:text-[32px]'>based in Lahore, Pakistan.</p>

                        <div className='flex flex-col w-[250px] md:w-auto mx-auto md:mr-auto md:ml-0 md:flex-row justify-start items-center gap-3'>
                            <Button
                                onClick={() => handleModalActiveState(true)}
                            >
                                <Code width={22} height={22} />
                                You need a developer
                            </Button>
                            <Button
                                onClick={() => handleModalActiveState(true)}
                                style='outline'
                            >
                                <Figma width={22} height={22} />
                                You need a designer
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
