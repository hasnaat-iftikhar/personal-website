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
    <main className='flex flex-col gap-[96px] md:gap-[120px]'>
      <Header />

      <div className='flex flex-col gap-[24px] md:gap-[96px]'>
        <PageHeader
          headline='AI-Powered Development & Designing'
          title='High-performance and scalable web solutions tailored to your needs.'
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