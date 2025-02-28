import React from 'react';

// Components
import { Footer, Header, PageHeader } from '@/app/components';
import Faqs from '@/app/components/base/Faqs';

// Sections
import ProjectsCarousel from './components/ProjectsCarousel';
import IntroductoryVideo from './components/Video';
import LatestProjects from './components/LatestProjects';
import ServicesCarousel from './components/ServicesCarousel';
import ServicesInfo from './components/ServicesInfo';
import Banner from '@/app/components/base/Banner';

// Icons
import { Code } from 'lucide-react';

const Work = () => {
  return (
    <main className='flex flex-col gap-[96px] md:gap-[120px]'>
      <Header />

      <div className='flex flex-col gap-[96px]'>
        <PageHeader
          headline='Front-End Development, Web DESIGNING & Design to Code'
          title='High-performance and scalable web solutions tailored to your needs.'
          button={{
            children: (
              <>
              <Code width={22} height={22} /> 
              Let&apos;s build a project together
              </>
            )
          }}
        />

        <ProjectsCarousel />
      </div>

      <IntroductoryVideo />

      <LatestProjects />

      <ServicesCarousel />

      <ServicesInfo />

      <Banner
        image=''
        headline='Hey, It&apos;s me!!'
        title='Turning Ideas into Reality, One Line of Code at a Time'
        description='Building smooth, fast, and modern web apps isn&apos;t just my work—it&apos;s what I love doing. Every project I take on is crafted with care, ensuring quality, performance, and attention to detail.'
      />

      <Faqs />
        
      <div>
        <Banner
          title='Let&apos;s meet!'
          description='Book a free 15-minute session where we will discuss your project, your issues and how to solve them.'
          descriptionClassName='max-w-[370px]'
          image="/"
          buttons={[
            {
              children: "Book a free consultation",
              onClick: () => {}
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

export default Work;