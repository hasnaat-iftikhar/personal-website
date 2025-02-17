import React, { FC } from 'react';

// Components
import { Button, Container } from '@/app/components';
import { MediaSans } from '@/app/layout';

// Icons
import { Code } from 'lucide-react';

// Type definations
import { HeroSectionProps } from './index.d';

const HeroSection:FC<HeroSectionProps> = ({
  className = ""
}) => {
  return (
    <section
      className={className}
    >
      <Container>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='uppercase text-xl text-[#F68D00] tracking-[5px]'>Front-End Development, Web DESIGNING & Design to Code</p>
            <h3 className={`${MediaSans.className} max-w-[1415px] mx-auto text-[96px] text-center leading-[100%]`}>High-performance and scalable web solutions tailored to your needs.</h3>
          </div>

          <Button
            className='w-fit'
            style='outline'
          ><Code width={22} height={22} /> Let's build a project together</Button>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection;