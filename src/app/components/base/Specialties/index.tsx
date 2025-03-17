"use client";

import React, { type FC, useState } from 'react';

// Components
import { Badge, Container, SectionHeader } from '@/app/components';

// Type definations
import type { SpecialtyProps } from './index.d';

// Icons
import { ArrowRight } from 'lucide-react';

// Font files
import { MediaSans } from '@/app/utils/fonts';

// Mock data
import { specialties, specialtyDetails } from '@/app/mock';

const Specialties: FC<SpecialtyProps> = () => {
    const [activeSpecialty, setActiveSpecialty] = useState<string>('Front-End Development');

    return (
        <section className="bg-[#1B1B1B] py-[96px] md:py-[120px]">
            <Container>
                <SectionHeader
                    title='My Specialties'
                    description='Idea to implementation, I&apos;ve got you covered.'
                    titleClassName='text-white'
                    descriptionClassName='text-white'
                >
                    <div className='w-full flex justify-between items-start gap-[42px] flex-col xl:flex-row'>
                        {/* Sidebar for navigating specialties */}
                        <div className="flex-1 w-full flex flex-col gap-6">
                            {specialties.map((specialty, index) => (
                                <>
                                    <div
                                        key={specialty}
                                        onClick={() => setActiveSpecialty(specialty)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                setActiveSpecialty(specialty);
                                            }
                                        }}
                                        className={`
                                            cursor-pointer
                                            flex justify-between items-center
                                            text-[36px] md:text-[40px] tracking-[1px] text-white
                                            ${MediaSans.className}
                                            ${activeSpecialty === specialty ? 'opacity-100' : 'opacity-30'}
                                        `}
                                    >
                                        {specialty}

                                        {activeSpecialty === specialty && (
                                            <ArrowRight width={42} height={42} className='text-[#F68D00] hidden md:block' />
                                        )}
                                    </div>

                                    {index !== specialties.length - 1 && (
                                        <div className='w-full h-[2px] bg-[#272727]' />
                                    )}
                                </>
                            ))}
                        </div>

                        {/* Details panel for the selected specialty */}
                        <div className="w-full xl:w-[600px] 2xl:w-[720px] h-[400px] md:h-[670px] overflow-y-auto hidden-vertical-scrollBar bg-[#272727] flex flex-col rounded-2xl overflow-hidden">
                            <div className='flex-1 flex flex-col'>
                                <div className='sticky top-0 bg-[#F68D00] p-[18px] md:py-[20px] md:px-[24px]'>
                                    <h2 className={`${MediaSans.className} text-[36px] md:text-[40px] tracking-[1px] leading-[100%] text-black`}>{activeSpecialty}</h2>
                                </div>

                                <p className="text-white leading-[140%] text-[16px] md:text-[20px] p-[18px] md:p-6">
                                    {specialtyDetails[activeSpecialty].description?.split(/\r?\n/).map((line: string) =>
                                        line.trim() === "" ? (
                                            <br key={line} />
                                        ) : (
                                            <React.Fragment key={line}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        )
                                    )}
                                </p>
                            </div>

                            <div className="sticky bottom-0  border-t border-solid bg-[#272727] border-[#3D3D3D] p-[18px] md:p-[24px] flex flex-wrap justify-start items-start gap-[10px]">
                                {specialtyDetails[activeSpecialty].technologies.map((tech) => (
                                    <Badge size='small' variant='dark' key={tech}>
                                        <div className='w-[4px] h-[4px] bg-[#F68D00]' /> {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionHeader>
            </Container>
        </section>
    );
};

export default Specialties;