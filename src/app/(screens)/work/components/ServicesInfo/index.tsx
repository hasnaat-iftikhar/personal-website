import { Container } from '@/app/components';
import ServiceInfo from '@/app/components/base/ServiceInfo';
import React from 'react'

const ServicesInfo = () => {
  return (
    <>
      <Container>
        <ServiceInfo
          headline='Optimized Front-End Solutions'
          title='Latest Tools and Techniques'
          description='Latest tools and techniques to ensure your web application is optimized, scalable, and well structured. No outdated code—just clean, efficient development that keeps your site running smoothly for years.'
          reverse={false}
          image=''
        />
      </Container>

      <Container>
        <ServiceInfo
          headline='Scalable Back-End Solutions'
          title='Performance-Driven Architecture'
          description='Leverage modern back-end technologies to build secure, type-safe, high-performing, and scalable systems. From API development to database optimization. I use 3-tier architecture to build robust applications.'
          reverse={true}
          image=''
        />
      </Container>

      <Container>
        <ServiceInfo
          headline='AI-Powered Development'
          title='Latest AI Tools and Techniques'
          description='Leverage modern AI tools like OpenAI, Grok AI, V0.dev, Bolt.new, GitHub Copilot, Cursor, etc to build scalable web applications by using power of AI tools.'
          reverse={false}
          image=''
        />
      </Container>
      
      <Container>
        <ServiceInfo
          headline='Web Application Designing'
          title='Minimal Design with a touch of elegance'
          description='I design web applications that are not only functional but also aesthetically pleasing. I use Figma to design web applications that are responsive and user-friendly.'
          reverse={true}
          image=''
        />
      </Container>
    </>
  )
}

export default ServicesInfo;