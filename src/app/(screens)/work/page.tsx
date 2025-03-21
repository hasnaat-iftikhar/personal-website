"use client"

import React from 'react';

// Components
import { Header, PageHeader, IntroductoryVideo, useWorkForm, PageFooter } from '@/app/components';

// Sections
import ProjectsCarousel from './components/ProjectsCarousel';
import LatestProjects from './components/LatestProjects';
import ServicesCarousel from './components/ServicesCarousel';
import ServicesInfo from './components/ServicesInfo';

// Icons
import { Code } from 'lucide-react';

const Work = () => {
  const {
    handleModalActiveState
  } = useWorkForm();

  return (
    <main className='flex flex-col gap-[96px] lg:gap-[120px] 2xl:gap-[160px]'>
      <Header />

      <div className='flex flex-col gap-[24px] md:gap-[96px]'>
        <PageHeader
          headline='AI-Powered Development & Designing'
          title='Scalable, high-performance web solutions built for your success!'
          button={{
            children: (
              <>
                <Code width={22} height={22} />
                Let&apos;s build a project together
              </>
            ),
            onClick: () => handleModalActiveState(true)
          }}
        />

        <ProjectsCarousel />
      </div>

      <IntroductoryVideo />

      <LatestProjects />

      <ServicesCarousel />

      <ServicesInfo />

      <PageFooter />
    </main>
  )
}

export default Work;