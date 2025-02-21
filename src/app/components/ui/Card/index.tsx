import React, { FC } from 'react';

// Type definations
import { CardProps } from './index.d';

// Layout
import { MediaSans } from '@/app/layout';

const Card: FC<CardProps> = ({
    title,
    description,
    image
}) => {
    return (
        <div className='bg-[#272727] w-full h-[540px] rounded-[28px] flex justify-start items-end p-[42px]'>
            <div className='flex flex-col gap-[24px]'>
                <h3 className={`${MediaSans.className} text-[40px] text-white leading-[100%]`}>
                    {title}
                </h3>
                <p className='text-[20px] text-white leading-[100%]'>
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Card;