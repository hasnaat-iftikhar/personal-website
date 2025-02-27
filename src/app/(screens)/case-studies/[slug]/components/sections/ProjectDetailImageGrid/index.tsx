import { Container } from '@/app/components';
import { MediaSans } from '@/app/utils/fonts';
import Image from 'next/image';
import React, { FC } from 'react'

const ProjectDetailImageGrid: FC<{
    title: string;
    content: string;
    gallery: {
        image1: string,
        image2: string
    }
}> = ({
    title,
    content,
    gallery: {
        image1 = "/",
        image2 = "/"
    }
}) => {
        return (
            <section>
                <Container>
                    <div className='max-w-[1024px] mx-auto flex flex-col gap-[42px]'>
                        <div className='flex flex-col gap-6'>
                            <h2 className={`${MediaSans.className} text-[64px] text-[#1B1B1B]`}>{title}</h2>
                            <p className='text-[20px] leading-[140%] text-[#1B1B1B]'>
                                {content.split("\n").map((line, index) =>
                                    line.trim() === "" ? <br key={index} /> : (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    )
                                )}
                            </p>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div className='bg-[#F1F0EB] w-full h-full aspect-square relative rounded-2xl'>
                                <Image
                                    fill
                                    src={image1}
                                    alt='Gallery image'
                                />
                            </div>

                            <div className='bg-[#F1F0EB] w-full h-full aspect-square relative rounded-2xl'>
                                <Image
                                    fill
                                    src={image2}
                                    alt='Gallery image'
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }

export default ProjectDetailImageGrid;