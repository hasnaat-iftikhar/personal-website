"use client";

import React, { type FC } from 'react';

// Components
import { Container, SectionHeader, SpecialtyCard } from '@/app/components';

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
                    <div className='grid grid-cols-3 border border-solid border-[#323232]'>
                        {specialties.map((specialty, index) => (
                            <div key={specialty} className='flex justify-start items-start'>
                                <SpecialtyCard
                                    key={specialty}
                                    title={specialty}
                                    description={specialtyDetails[specialty].description}
                                    image={specialtyDetails[specialty].image}
                                    imageStyles='group-hover:skew-y-[9deg] group-hover:scale-95 origin-center transition-all duration-300'
                                />

                                {(index < specialties.length - 1) && (
                                    <div className='w-[1px] h-full bg-[#323232]' />
                                )}
                            </div>
                        ))}
                    </div>
                </SectionHeader>
            </Container>
        </section>
    );
};

export default Specialties;