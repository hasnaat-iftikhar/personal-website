import React, { FC } from 'react';

// Components
import { Container } from '@/app/components';

// Type definations
import { ProjectDetailGridProps } from '.';
import { MediaSans } from '@/app/utils/fonts';

const ProjectDetailGrid: FC<ProjectDetailGridProps> = ({
    className = "",
    label,
    description
}) => {
    return (
        <section className={className}>
            <Container>
                <div className='max-w-[1024px] mx-auto flex flex-col gap-2 md:gap-4 2xl:gap-6 justify-start items-start'>
                    <label className={`${MediaSans.className} leading-[100%]  text-[42px] md:text-[56px] 2xl:text-[64px]`}>{label}</label>
                    <div className='flex-1'>
                        <p className='text-[16px] md:text-[20px] 2xl:text-[24px] text-[#1C1C1C] leading-[140%]'>
                            {description.split("\n").map((line, index) =>
                                line.trim() === "" ? <br key={index} /> : (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            )}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProjectDetailGrid;