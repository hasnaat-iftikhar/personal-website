import { Button, Container, useWorkForm } from '@/app/components';
import PricingCard from '@/app/components/ui/PricingCard';
import { MediaSans } from '@/app/utils/fonts';
import { Briefcase, LucidePhoneCall } from 'lucide-react';
import React from 'react'

const MyPricing = () => {
    const { handleModalActiveState } = useWorkForm();

    return (
        <section>
            <Container>
                <div className=' flex flex-col gap-[16px] xl:gap-[32px]'>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-[16px] xl:gap-[32px]'>
                        <PricingCard
                            title='Custom Development'
                            price={2000}
                            description='Custom-built, high-performance websites with pixel-perfect design, smooth animations, and scalable architecture. No templates, just handcrafted solutions tailored to your needs.'
                            includes={[
                                "Custom UI design & pixel-perfect front-end",
                                "Smooth animations & responsive layouts",
                                "SEO-optimized and high-performance code",
                                "Headless CMS Integration (if needed)",
                                "A fast, scalable, and optimized solution"
                            ]}
                        />

                        <PricingCard
                            title='Web App Development'
                            hourlyRate={{
                                min: 20,
                                max: 30
                            }}
                            description='End-to-end web app development using JavaScript, TypeScript, React, Next.JS, and Tailwind CSS. Scalable, high-performance applications with seamless backend integration.'
                            includes={[
                                "Front-end development with modern frameworks",
                                "Backend integration with secure APIs",
                                "Scalable, high-performance architecture",
                                "API development & third-party service integration",
                                "Long-term collaboration & code maintenance"
                            ]}
                        />
                    </div>

                    <div className='border-t-2 border-solid border-black md:border-0 mt-6 md:mt-0 pt-6 p-0 md:p-[64px] md:bg-black md:rounded-[52px] flex justify-between items-start flex-col lg:flex-row gap-4 md:gap-6 lg:gap-0'>
                        <div className='max-w-[400px] 2xl:max-w-[466px] flex flex-col gap-4 md:gap-6'>
                            <h3 className={`${MediaSans.className} text-[64px] 2xl:text-[82px] leading-[100%] text-black md:text-white`}>Want Lower Budget?</h3>
                        </div>

                        <div className='lg:max-w-[420px] flex flex-col gap-[20px] md:gap-[24px] justify-start lg:items-end'>
                            <p className='text-black md:text-white text-[16px] md:text-[20px] leading-[140%] text-left lg:text-right'>I can accommodate lower budgets! Get in touch today and let&lsquo;s discuss your project.
                            </p>

                            <Button
                                onClick={() => handleModalActiveState(true)}
                                className='w-fit bg-black md:bg-white text-white md:text-black'>
                                <LucidePhoneCall width={22} height={22} /> Get In Touch
                            </Button>
                        </div>
                    </div>

                    <div className='border-t-2 border-solid border-black md:border-0 mt-6 md:mt-0 pt-6 p-0 md:p-[64px] md:bg-black md:rounded-[52px] flex justify-between items-start flex-col lg:flex-row gap-4 md:gap-6 lg:gap-0'>
                        <div className='max-w-[400px] 2xl:max-w-[466px] flex flex-col gap-4 md:gap-6'>
                            <h3 className={`${MediaSans.className} text-[64px] 2xl:text-[82px] leading-[100%] text-black md:text-white`}>Interested in Hiring Me?</h3>
                            <p className='text-[20px] md:text-[28px] 2xl:text-[32px] leading-[140%] w-fit text-black md:text-white'>
                                Hourly / Monthly<br />Contract Available
                            </p>
                        </div>

                        <div className='lg:max-w-[420px] xl:max-w-[514px] 2xl:max-w-[560px] flex flex-col gap-[20px] md:gap-[24px] justify-start lg:items-end'>
                            <p className='text-black md:text-white text-[16px] md:text-[20px] leading-[140%] text-left lg:text-right'>
                                Need a dedicated full-stack developer to work with your team?
                                <br /><br />
                                I bring 5+ years of experience in building high-quality web applications. Whether you need a developer for specific tasks or long-term support, I&lsquo;m available for flexible contracts.
                            </p>

                            <Button
                                onClick={() => window.open("mailto:hasnaatfreelancing@gmail.com?subject='Work Opporunity'")}
                                className='w-fit bg-black md:bg-white text-white md:text-black'>
                                <Briefcase width={22} height={22} /> Hire me
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default MyPricing;