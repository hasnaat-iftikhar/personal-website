"use client";

import React from 'react';

// Components
import { Badge, Container } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/utils/fonts';
import LabelGroup from '../../mini/LabelGroup';

const BriefIntroduction = () => {
    const projectNameClassName = "text-[20px] leading-[100%] uppercase";
    const projectPurposeClassName = `text-[72px] leading-[100%] tracking-[2px] ${MediaSans.className}`;

    return (
        <section>
            <Container className='flex justify-between items-start'>
                <div className='max-w-[720px] flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-3'>
                            <p className={projectNameClassName}>Koddex</p>
                            <h2 className={projectPurposeClassName}>Revolutionizing Business Data Management with an Innovative Work OS</h2>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <Badge>Product Design</Badge>
                            <Badge>Brand Design</Badge>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 gap-y-8'>
                        <LabelGroup
                            label='Roles'
                            list={[
                                "UX / UI Design",
                                "User Research",
                                "Project Management",
                                "Brand Design"
                            ]}
                        />

                        <LabelGroup
                            label='Deliverables'
                            list={[
                                "Persona",
                                "User Journey",
                                "Utility Test",
                                "Focus Group"
                            ]}
                        />
                        
                        <LabelGroup
                            label='Date'
                            list={[
                                "2024 - Ongoing"
                            ]}
                        />
                    </div>
                </div>

                <div className='w-[500px] h-[600px] bg-[#F1F0EB] rounded-[32px]'></div>
            </Container>
        </section>
    )
}

export default BriefIntroduction;