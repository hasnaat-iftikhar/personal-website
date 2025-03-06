import { Container } from '@/app/components';
import ServiceInfo from '@/app/components/base/ServiceInfo';
import React from 'react'

const ServicesInfo = () => {
  return (
    <>
      <Container>
        <div className=''>
          <ServiceInfo
            headline='Pixel-Perfect Development'
            title='Your Design, Built to Perfection'
            description='No weird gaps, no misaligned buttons—just a clean, pixel-perfect build that looks exactly like the design. I make sure everything is in place, responsive, and smooth, so your website feels just right on every screen.'
            reverse={false}
            image=''
          />
        </div>
      </Container>

      <Container>
        <div className=''>
          <ServiceInfo
            headline='Pixel-Perfect Development'
            title='Latest Tech for a Faster, Better Website'
            description='I use updated tools like React, Next.JS, TypeScript, and Tailwind CSS to build websites that are fast, secure, and easy to scale. No outdated code—just clean, efficient development that keeps your site running smoothly for years.'
            reverse={true}
            image=''
          />
        </div>
      </Container>
    </>
  )
}

export default ServicesInfo;