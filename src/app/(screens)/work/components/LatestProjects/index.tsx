import React from 'react';

// Components
import { Container } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/layout';

const LatestProjects = () => {
  return (
    <section className='bg-[#1B1B1B] py-[120px]'>
        <Container>
            <h2 className={`text-[64px] leading-[100%] text-white ${MediaSans.className} text-center`}>Latest Projects</h2>

            <div className='mt-[64px] grid grid-cols-3 gap-4'>
                <div className='bg-[#272727] w-full h-[540px] rounded-[28px] flex justify-start items-end p-[42px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <h3 className={`${MediaSans.className} text-[40px] text-white leading-[100%]`}>Project name</h3>
                        <p className='text-[20px] text-white leading-[100%]'>Project description here...</p>
                    </div>
                </div>
                <div className='bg-[#272727] w-full h-[540px] rounded-[28px] flex justify-start items-end p-[42px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <h3 className={`${MediaSans.className} text-[40px] text-white leading-[100%]`}>Project name</h3>
                        <p className='text-[20px] text-white leading-[100%]'>Project description here...</p>
                    </div>
                </div>
                <div className='bg-[#272727] w-full h-[540px] rounded-[28px] flex justify-start items-end p-[42px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <h3 className={`${MediaSans.className} text-[40px] text-white leading-[100%]`}>Project name</h3>
                        <p className='text-[20px] text-white leading-[100%]'>Project description here...</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default LatestProjects;