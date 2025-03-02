import { Button, Container } from '@/app/components';
import PricingCard from '@/app/components/ui/PricingCard';
import { MediaSans } from '@/app/utils/fonts';
import { Briefcase } from 'lucide-react';
import React from 'react'

const MyPricing = () => {
  return (
    <section>
        <Container className='flex flex-col gap-[16px] xl:gap-[32px]'>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-[16px] xl:gap-[32px]'>
                <PricingCard
                    title='Custom Development'
                    price={1600}
                    description='Get a website built from scratch—custom design, smooth animations, and pixel-perfect development. No templates, just handcrafted solutions.'
                    includes={[
                        "Custom UI design & pixel-perfect front-end",
                        "Smooth animations & responsive layouts",
                        "SEO-optimized and high-performance code",
                        "Headless CMS Integration (If needed)",
                        "A fast, scalable, and optimized solution"  
                    ]}
                />

                <PricingCard
                    title='Web App Development'
                    hourlyRate={{
                        min:20,
                        max:30
                    }}
                    description='Building scalable web apps with React, Next.js, and Tailwind CSS. High performance, seamless backend integration, and future-proof development.'
                    includes={[
                        "Front-end development",
                        "Backend integration",
                        "Scalable, high-performance architecture",
                        "API development & third-party service integration",
                        "Long-term collaboration"
                    ]}
                />
            </div>
            
            <div className='border-t-2 border-solid border-black md:border-0 mt-6 md:mt-0 pt-6 p-0 md:p-[64px] md:bg-black md:rounded-[52px] flex justify-between items-start flex-col lg:flex-row gap-4 md:gap-6 lg:gap-0'>
                <div className='max-w-[400px] 2xl:max-w-[466px] flex flex-col gap-4 md:gap-6'>
                    <h3 className={`${MediaSans.className} text-[64px] 2xl:text-[82px] leading-[100%] text-black md:text-white`}>Interested in Hiring Me?</h3>
                    <p className='text-[20px] md:text-[28px] 2xl:text-[32px] leading-[140%] w-fit text-black md:text-white'>
                        Hourly / Monthly<br />Contract Available
                    </p>
                </div>

                <div className='lg:max-w-[420px] xl:max-w-[514px] 2xl:max-w-[620px] flex flex-col gap-[20px] md:gap-[24px] justify-start lg:items-end'>
                    <p className='text-black md:text-white text-[16px] md:text-[20px] 2xl:text-[24px] leading-[140%] text-left lg:text-right'>Need a dedicated front-end developer to work with your team?
                    <br /><br />
                    I bring 5+ years of experience in building high-quality web applications. Whether you need a developer for specific tasks or long-term support, I’m available for flexible contracts.
                    </p>

                    <Button
                        onClick={() => window.open("https://www.linkedin.com/in/hasnaat-iftikhar", "_blank")}
                        className='w-fit bg-black md:bg-white text-white md:text-black'>
                        <Briefcase width={22} height={22} /> Hire me
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MyPricing;