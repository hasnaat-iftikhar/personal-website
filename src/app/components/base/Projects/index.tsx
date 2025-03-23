"use client";

import React, { type FC } from 'react';
import Image from 'next/image';

// Components
import { Container } from '@/app/components';

// Type definations
import type { ProjectsProps } from './index.d';

// Icons
import { ArrowUpRight } from 'lucide-react';

// Router
import { useRouter } from 'next/navigation';

const Projects:FC<ProjectsProps> = ({
    data
}) => {
    const router = useRouter();

    return (
        <Container>
            <div className=' w-full relative flex flex-col gap-6'>
                {data.map((p) => (
                    <div
                        key={p.title}
                        className='sticky top-5 w-full aspect-video flex justify-start items-end p-[64px] rounded-[18px] md:rounded-[24px] overflow-hidden'
                        onClick={() => {
                            router.push(`/case-studies/${p.id}`);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                router.push(`/projects/${p.id}`);
                            }
                        }}
                    >
                        <Image
                            src={p.media.coverImage}
                            fill
                            alt={p.title}
                            className='object-cover'
                        />

                        <div className='opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer absolute top-0 left-0 w-full h-full z-10 justify-center items-center bg-black/50'>
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-[164px] h-[164px] rounded-full bg-white'>
                                <ArrowUpRight className='text-black' width={84} height={84} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Projects;