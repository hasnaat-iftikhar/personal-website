"use client";

import React, { type FC } from 'react';

// Components
import { Card, Container, SectionHeader } from '@/app/components';

// Type definations
import type { SpecialtyProps } from './index.d';

// Mock data
import { specialties, specialtyDetails } from '@/app/mock';

const Specialties: FC<SpecialtyProps> = () => {
    return (
        <section className="bg-[#1B1B1B] py-[96px] md:py-[120px]">
            <Container>
                <SectionHeader
                    title='My Specialties'
                    description='Idea to implementation by leveraging power of AI tools.'
                    titleClassName='text-white'
                    descriptionClassName='text-white'
                >
                    <div className='grid grid-cols-3 gap-6'>
                        {specialties.map((specialty) => (
                            <Card
                                key={specialty}
                                title={specialty}
                                description={specialtyDetails[specialty].description}
                                image='/'
                            />
                        ))}
                    </div>
                </SectionHeader>
            </Container>
        </section>
    );
};

export default Specialties;