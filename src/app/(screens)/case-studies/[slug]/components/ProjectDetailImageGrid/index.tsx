"use client";

import React, { type FC } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Components
import { Container } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/utils/fonts';

const ProjectDetailImageGrid: FC<{
    title: string;
    content: string;
    gallery: string[];
}> = ({
    title,
    content,
    gallery
}) => {
        return (
            <section>
                <Container>
                    <div className='max-w-[1024px] mx-auto flex flex-col gap-[42px]'>
                        <div className='flex flex-col gap-4 2xl:gap-6'>
                            <h2 className={`${MediaSans.className} text-[42px] md:text-[56px] 2xl:text-[64px] leading-[100%] text-[#1B1B1B]`}>{title}</h2>
                            <div className='flex-1'>
                            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ ...props }) => (
                  <p
                    className='text-[16px] md:text-[20px] 2xl:text-[24px] text-[#1C1C1C] leading-[140%] mb-4'
                    {...props}
                  />
                ),
                ul: ({ ...props }) => (
                  <ul className='list-disc pl-5 mb-4' {...props} />
                ),
                li: ({ ...props }) => (
                  <li className='mb-2' {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {gallery.map((image) => (
                                <div key={image} className='bg-[#F1F0EB] w-full h-full aspect-square relative rounded-2xl'>
                                    <Image
                                        fill
                                        src={image}
                                        alt='Gallery image'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        )
    }

export default ProjectDetailImageGrid;