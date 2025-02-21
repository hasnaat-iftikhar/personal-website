import { MediaSans } from '@/app/utils/fonts';
import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "P1",
            description: "D1"
        },
        {
            title: "P2",
            description: "D2"
        },
        {
            title: "P3",
            description: "D3"
        },
    ];

    return (
        <div className='relative flex flex-col gap-6 mx-auto'>
            {projects.map((p, index) => (
                <div key={index} className='bg-white sticky top-5 h-[620px] aspect-video flex justify-start items-end p-[64px] rounded-[28px] overflow-hidden'>
                    <div
                        className='bg-gradient-to-b from-[#d9d9d900] via-[rgba(76,76,76,0.5)] to-[rgba(0,0,0,0.7)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 w-full h-full z-10'
                    />

                    <div className='relative z-10 flex flex-col gap-2'>
                        <h2 className={`${MediaSans.className} text-[40px] text-white`}>{p.title}</h2>
                        <p className='text-[20px] text-white'>{p.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;