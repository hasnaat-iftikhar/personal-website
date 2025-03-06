import React from 'react';

// Components
import { Container, SectionHeader } from '@/app/components';

// Fonts
import Card from '@/app/components/ui/Card';

const LatestProjects = () => {
  return (
    <section className='bg-[#1B1B1B] py-[96px] md:py-[120px]'>
        <Container>
            <div className='max-w-[1440px] mx-auto'>
                <SectionHeader title='Latest Projects' titleClassName='text-white' />

                <div className='mt-[42px] md:mt-[64px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4'>
                    <Card
                        title='Project name'
                        description='Project description here...'
                        image='/'
                    />
                    <Card
                        title='Project name'
                        description='Project description here...'
                        image='/'
                    />
                    <Card
                        title='Project name'
                        description='Project description here...'
                        image='/'
                    />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default LatestProjects;