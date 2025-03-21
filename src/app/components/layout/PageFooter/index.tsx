import React from 'react';

// Components
import { Banner, Faqs, useWorkForm, Footer } from '@/app/components';

// Icons
import { Code } from 'lucide-react';

// Mock data
import { faqsData } from '@/app/mock'

const PageFooter = () => {
    const {
        handleModalActiveState
    } = useWorkForm();

    return (
        <div className='flex flex-col gap-[96px] md:gap-[160px]'>
            <Banner
                image='/pictures/portfolio.jpg'
                headline='Hey, It&apos;s me!!'
                title='Turning Ideas into Reality, One Line of Code at a Time'
                description='Building smooth, fast, and modern web apps isn&apos;t just my work—it&apos;s what I love doing. Every project I take on is crafted with care, ensuring quality, performance, and attention to detail.'
            />

            <Faqs
                data={faqsData}
            />

            <div>
                <Banner
                    title='Let&apos;s meet!'
                    description='Book a free 15-minute session where we will discuss your project, your issues and how to solve them.'
                    descriptionClassName='max-w-[370px]'
                    image="/"
                    buttons={[
                        {
                            children: "Book a free consultation",
                            onClick: () => window.open("https://cal.com/hasnaat-iftikhar/30min", "_blank")
                        },
                        {
                            children: (
                                <>
                                    <Code width={22} height={22} />
                                    Start a project
                                </>
                            ),
                            style: "outline",
                            className: "bg-white",
                            onClick: () => handleModalActiveState(true)
                        }
                    ]}
                />

                <Footer />
            </div>
        </div>
    )
}

export default PageFooter;