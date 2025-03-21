import React, { type FC } from 'react';
import Image from 'next/image';

// Type definations
import type { SpecialtyCardProps } from './index.d';

// Layout
import { MediaSans } from '@/app/utils/fonts';

const SpecialityCard: FC<SpecialtyCardProps> = ({
    title,
    description,
    image,
    footer,
    imageStyles
}) => {
  return (
    <div className='group outline-0 overflow-hidden relative w-full h-[600px] flex flex-col justify-start items-end p-[54px] 2xl:p-[54px] hover:bg-[#161616] transition-all duration-300'>
            <div className='flex-1 relative z-10 flex flex-col gap-[16px] md:gap-[24px]'>
                <h3 className={`${MediaSans.className} text-[38px] md:text-[40px] 2xl:text-[44px] tracking-[1px] text-white leading-[100%]`}>
                    {title}
                </h3>

                <p className='text-[16px] md:text-[20px] text-white leading-[140%]'>
                    {description}
                </p>
                
                {footer && footer}
            </div>

            <div className={`w-full h-auto aspect-video relative ${imageStyles}`}>
                <Image
                    src={image}
                    alt={`Card - ${title}`}
                    fill
                    className='object-fit h-auto'
                />
            </div>
        </div>
  )
}

export default SpecialityCard;