import React, { FC } from 'react';

// Type definations
import { SectionHeaderProps } from './index.d';

// Fonts
import { MediaSans } from '@/app/utils/fonts';

const SectionHeader: FC<SectionHeaderProps> = ({
    title,
    description,
    titleClassName = "",
    descriptionClassName = ""
}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className={`${MediaSans.className} text-[42px] md:text-[56px] 2xl:text-[64px] leading-[100%] text-center ${titleClassName}`}>
                {title}
            </h2>

            {description && (
                <p className={`text-[16px] md:text-[20px] leading-[140%] text-center ${descriptionClassName}`}>{description}</p>
            )}
        </div>
    )
}

export default SectionHeader;