import React, { FC } from 'react';
// import Image from 'next/image';

// Type definations
import { ServiceInfoProps } from './index.d';

// Fonts
import { MediaSans } from '@/app/layout';

const ServiceInfo:FC<ServiceInfoProps> = ({
  headline,
  title,
  description,
  // image,
  reverse = false
}) => {
  return (
    <div className={`flex justify-between items-center ${reverse ? "flex-row-reverse" : "flex-row"}`}>
      <div className='flex-1 max-w-[530px] flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='text-[20px] text-[#F68D00] tracking-[32%]'>{headline}</p>
          <h2 className={`${MediaSans.className} text-[64px] leading-[100%] text-[#1B1B1B]`}>{title}</h2>
        </div>

        <p className='text-[20px] leading-[140%] text-black'>{description}</p>
      </div>

      <div className='aspect-video w-[530px] rounded-[16px] bg-[#F1F1F1]' />
    </div>
  )
}

export default ServiceInfo;