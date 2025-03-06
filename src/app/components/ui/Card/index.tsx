import React, { FC } from 'react';
import Image from 'next/image';

// Type definations
import { CardProps } from './index.d';

// Layout
import { MediaSans } from '@/app/utils/fonts';

const Card: FC<CardProps> = ({
    title,
    description,
    image
}) => {
    return (
        <div className='outline-0 border-0 relative bg-[#272727] w-full h-[600px] rounded-[28px] flex justify-start items-end p-[36px] 2xl:p-[42px]'>
            <Image
                src={image}
                fill
                alt={`Card - ${title}`}       
                className='w-full h-full'     
            />

            <div className='relative z-10 flex flex-col gap-[16px] md:gap-[24px]'>
                <h3 className={`${MediaSans.className} text-[38px] md:text-[40px] text-white leading-[100%]`}>
                    {title}
                </h3>

                <p className='text-[16px] md:text-[20px] text-white leading-[100%]'>
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Card;