import React from 'react';

// Components
import { Footer, Header, PageHeader } from '@/app/components'
import Banner from '@/app/components/base/Banner';
import Faqs from '@/app/components/base/Faqs';
import Projects from './components/Projects';

// Icons
import { Code } from 'lucide-react';

const CaseStudies = () => {
    return (
        <main className='flex flex-col gap-[120px]'>
            <Header />

            <div className='flex flex-col gap-[96px]'>
                <PageHeader
                    headline='Case studies'
                    title='Real Projects, Real Impact'
                    description="Every project tells a story—of challenges, solutions, and results. Here, you'll find a collection of my best work, where I break down the process, tech stack, and lessons learned. Click on any case study to explore the full journey."
                />
            </div>

            <Projects />

            <Banner
                image=''
                headline='Hey, It’s me!!'
                title='Turning Ideas into Reality, One Line of Code at a Time'
                description='Building smooth, fast, and modern web apps isn’t just my work—it’s what I love doing. Every project I take on is crafted with care, ensuring quality, performance, and attention to detail.'
            />

            <Faqs />

            <div>
                <Banner
                    title='Let’s meet!'
                    description='Book a free 15-minute session where we will discuss your project, your issues and how to solve them.'
                    descriptionClassName='max-w-[370px]'
                    image="/"
                    buttons={[
                        {
                            children: "Book a free consultation",
                            onClick: () => { }
                        },
                        {
                            children: (
                                <>
                                    <Code width={22} height={22} />
                                    Start a project
                                </>
                            ),
                            style: "outline",
                            className: "bg-white"
                        }
                    ]}
                />

                <Footer />
            </div>
        </main>
    )
}

export default CaseStudies;