import { Button, Container } from '@/app/components';
import PricingCard from '@/app/components/ui/PricingCard';
import { MediaSans } from '@/app/utils/fonts';
import { Briefcase } from 'lucide-react';
import React from 'react'

const MyPricing = () => {
  return (
    <section>
        <Container className='flex flex-col gap-[32px]'>
            <div className='grid grid-cols-2 gap-[32px]'>
                <PricingCard
                    title='Custom Website Development'
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
            
            <div className='p-[64px] bg-black rounded-[52px] flex justify-between items-start'>
                <div className='max-w-[466px] flex flex-col gap-6'>
                    <h3 className={`${MediaSans.className} text-[82px] leading-[100%] text-white`}>Interested in Hiring Me?</h3>
                    <p className='text-[32px] w-fit text-white'>
                        Hourly / Monthly<br />Contract Available
                    </p>
                </div>

                <div className='max-w-[514px] flex flex-col gap-[24px] justify-start items-end'>
                    <p className='text-white text-[20px] leading-[140%] text-right'>Need a dedicated front-end developer to work with your team?
                    <br /><br />
                    I bring 5+ years of experience in building high-quality web applications. Whether you need a developer for specific tasks or long-term support, I’m available for flexible contracts.
                    </p>

                    <Button className='w-fit bg-white text-black'><Briefcase width={22} height={22} /> Hire me</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MyPricing;