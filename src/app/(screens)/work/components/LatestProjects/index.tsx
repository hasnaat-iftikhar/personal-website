import React from 'react';

// Components
import { Container, SectionHeader } from '@/app/components';

// Fonts
import Card from '@/app/components/ui/Card';
import { projectsData } from '@/app/mock';

const LatestProjects = () => {
    const projects = projectsData.map(project => ({
        id: project.id,
        title: project.title,
        thumbnail: project.media.thumbnail,
        purpose: project.purpose
    })).slice(0, 3);

    return (
        <section className='bg-[#1B1B1B] py-[96px] md:py-[120px]'>
            <Container>
                <SectionHeader title='Latest Projects' titleClassName='text-white'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4'>
                        {projects.map((p) => (
                            <Card
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                description={p.purpose}
                                image={p.thumbnail}
                            />
                        ))}
                    </div>
                </SectionHeader>
            </Container>
        </section>
    )
}

export default LatestProjects;