import React, { FC } from 'react';

// Type definations
import { BadgeProps } from './index.d';

const Badge: FC<BadgeProps> = ({
  children
}) => {
  return (
    <div className='h-[32px] px-3 text-[16px] md:text-[20px] rounded-[8px] bg-[#f1f0ea] flex justify-center items-center'>
      {children}
    </div>
  )
}

export default Badge;