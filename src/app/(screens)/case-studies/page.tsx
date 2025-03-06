"use client";

import React from 'react';

// Components
import { Header, PageHeader } from '@/app/components'
import PageFooter from '@/app/components/layout/PageFooter';
import Projects from '../../components/base/Projects';

const CaseStudies = () => {
    return (
        <main className='flex flex-col gap-[96px] md:gap-[120px]'>
            <Header />

            <div className='flex flex-col gap-[96px]'>
                <PageHeader
                    headline='Case studies'
                    title='Real Projects, Real Impact'
                    description="Every project tells a story—of challenges, solutions, and results. Here, you'll find a collection of my best work, where I break down the process, tech stack, and lessons learned. Click on any case study to explore the full journey."
                />
            </div>

            <Projects />

            <PageFooter />
        </main>
    )
}

export default CaseStudies;