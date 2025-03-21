import React, { type FC } from 'react';

// Type definations
import type { SectionHeaderProps } from './index.d';

// Fonts
import { MediaSans } from '@/app/utils/fonts';

const SectionHeader: FC<SectionHeaderProps> = ({
    title,
    description,
    titleClassName = "",
    descriptionClassName = "",
    children
}) => {
    return (
        <div className='w-full flex flex-col gap-[42px] md:gap-[64px]'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className={`${MediaSans.className} text-[54px] md:text-[64px] xl:text-[72px] leading-[100%] text-center tracking-[1px] ${titleClassName}`}>
                    {title}
                </h2>

                {description && (
                    <p className={`text-[18px] md:text-[20px] leading-[140%] text-center ${descriptionClassName}`}>{description}</p>
                )}
            </div>
        
            {children}
        </div>
    )
}

export default SectionHeader;