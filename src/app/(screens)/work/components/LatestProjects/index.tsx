import React from 'react';

// Components
import { Container, SectionHeader } from '@/app/components';

// Fonts
import Card from '@/app/components/ui/Card';

const LatestProjects = () => {
  return (
    <section className='bg-[#1B1B1B] py-[120px]'>
        <Container>
            <SectionHeader title='Latest Projects' />

            <div className='mt-[64px] grid grid-cols-3 gap-4'>
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
        </Container>
    </section>
  )
}

export default LatestProjects;