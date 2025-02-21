import React, { FC } from 'react';

// Type definations
import { SectionHeaderProps } from './index.d';

// Fonts
import { MediaSans } from '@/app/layout';

const SectionHeader:FC<SectionHeaderProps> = ({
    title,
    description
}) => {
  return (
      <div className='flex flex-col justify-center items-center gap-2'>
          <h2 className={`${MediaSans.className} text-[64px] leading-[100%] text-white text-center`}>
              {title}
          </h2>

          {description && (
              <p className='text-[16px] leading-[140%] text-center'>{description}</p>
          )}
      </div>
  )
}

export default SectionHeader;