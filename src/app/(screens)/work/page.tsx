"use client"

import React from 'react';

// Components
import { Header, PageHeader } from '@/app/components';
import PageFooter from '@/app/components/layout/PageFooter';

// Sections
import ProjectsCarousel from './components/ProjectsCarousel';
import IntroductoryVideo from './components/Video';
import LatestProjects from './components/LatestProjects';
import ServicesCarousel from './components/ServicesCarousel';
import ServicesInfo from './components/ServicesInfo';

// Icons
import { Code } from 'lucide-react';

// Hooks
import { useWorkForm } from '@/app/components/base/WorkForm/context/context';

const Work = () => {
  const {
    handleModalActiveState
  } = useWorkForm();

  return (
    <main className='flex flex-col gap-[96px] md:gap-[120px]'>
      <Header />

      <div className='flex flex-col gap-[24px] md:gap-[96px]'>
        <PageHeader
          headline='Front-End Development, Web DESIGNING & Design to Code'
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