"use client";

import React from 'react';

// Components
import { Badge, Container, LabelGroup } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/utils/fonts';
import Image from 'next/image';

const BriefIntroduction = ({
    projectName,
    projectPurpose,
    projectRoles,
    projectDeliverables,
    projectDate,
    projectThumbnail
}: {
    projectName: string;
    projectPurpose: string;
    projectRoles: string[];
    projectDeliverables: string[];
    projectDate: string;
    projectThumbnail: string;
}) => {
    const projectNameClassName = "text-[16px] md:text-[20px] leading-[100%] uppercase tracking-[1px]";
    const projectPurposeClassName = `text-[48px] md:text-[62px] xl:text-[72px] leading-[100%] tracking-[2px] ${MediaSans.className}`;

    return (
        <section>
            <Container className='flex justify-between items-start'>
                <div className='max-w-[720px] flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-3'>
                            <p className={projectNameClassName}>{projectName}</p>
                            <h2 className={projectPurposeClassName}>{projectPurpose}</h2>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {projectRoles.map((role) => (
                                <Badge key={role}>{role}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 gap-y-8'>
                        <LabelGroup
                            label='Roles'
                            list={projectRoles}
                        />

                        <LabelGroup
                            label='Deliverables'
                            list={projectDeliverables}
                        />
                        
                        <LabelGroup
                            label='Date'
                            list={[
                                projectDate
                            ]}
                        />
                    </div>
                </div>

                <Image
                    src={projectThumbnail}
                    alt={projectName}
                    width={500}
                    height={600}
                    className="hidden lg:block object-cover rounded-[32px] bg-[#F1F0EB]"
                />
            </Container>
        </section>
    )
}

export default BriefIntroduction;