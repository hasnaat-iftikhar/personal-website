import React from 'react';

// Components
import { Header } from '@/app/components';

// Sections
import HeroSection from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import IntroductoryVideo from './components/Video';
import LatestProjects from './components/LatestProjects';
import ServicesCarousel from './components/ServicesCarousel';

const Work = () => {
  return (
    <main className='flex flex-col gap-[120px]'>
      <Header />

      <div className='flex flex-col gap-[96px]'>
        <HeroSection />

        <ProjectsCarousel />
      </div>

      <IntroductoryVideo />

      <LatestProjects />

      <ServicesCarousel />
    </main>
  )
}

export default Work;