"use client";

import type { CSSProperties } from "react";

// Components
import { Button, Container, Header, SectionHeader, IntroductoryVideo, PageFooter, Projects, Specialties } from "./components";

// Fonts
import { MediaSans } from "./utils/fonts";

// Icons
import { User } from "lucide-react";

// Hooks
import { useWorkForm } from "./components/base/WorkForm/context/context";

// Mock data
import { projectsData } from "./mock";

export default function Home() {
    const {
        handleModalActiveState
    } = useWorkForm();

    return (
        <main className="w-full flex flex-col gap-[96px] md:gap-[160px]">
            <div className="flex flex-col gap-[42px] md:gap-[96px]">
                <Header />

                <section className="flex-1 flex justify-center items-center md:block">
                    <Container>
                        <div className="">
                            <div className='flex flex-col gap-4 lg:gap-6 mb-16 md:mb-0'>
                                <p className='text-[20px] md:text-[24px] text-center md:text-left 2xl:text-[32px] text-[#1B1B1B]'>👋 Hey, I&apos;m Hasnaat and I&apos;m a</p>

                                <div className='flex flex-col'>
                                    <h2 className={`${MediaSans.className} text-[18vw] text-center md:text-left md:text-[11.5vw] lg:text-[11.5vw] xl:text-[9.7vw] 2xl:text-[9vw] leading-[100%]`}>Full-Stack Developer <span className="contents md:hidden">& </span></h2>
                                    <h2
                                        className={`${MediaSans.className} text-[18vw] text-center md:text-left md:text-[11.5vw] lg:text-[11.5vw] xl:text-[9.7vw] 2xl:text-[9vw] leading-[100%]`}
                                        style={{
                                            WebkitTextStroke: "1.5px black",
                                            color: "#fff"
                                        } as CSSProperties}
                                    ><span className="contents md:hidden">The </span><span className="hidden md:contents">& </span>Content Creator</h2>
                                </div>

                                <p className='text-[20px] md:text-[24px] text-center md:text-left 2xl:text-[32px]'>based in Lahore, Pakistan.</p>
                                <Button
                                    className="w-fit mx-auto md:mr-auto md:ml-0"
                                    onClick={() => handleModalActiveState(true)}
                                >
                                    <User width={22} height={22} />
                                    You need a developer & designer
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>

            <IntroductoryVideo />
            
            <SectionHeader title='Projects Gallery' description="Some of my favourite work arts.">
                <Projects data={projectsData} />
            </SectionHeader>
            
            <div>
                <Specialties />
                
                <PageFooter />
            </div>
        </main>
    );
}
