import React, { FC } from 'react';

// Components
import Container from '../Container';
import Button from '../../ui/Button';

// Type definations
import { PageHeaderProps } from './index.d';

// Fonts
import { MediaSans } from '@/app/layout';

const PageHeader: FC<PageHeaderProps> = ({
  className = "",
  headline,
  title,
  description,
  button
}) => {
  return (
    <section
      className={className}
    >
      <Container>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='uppercase text-xl text-[#F68D00] tracking-[5px]'>
              {headline}
            </p>
            <h3 className={`${MediaSans.className} max-w-[1415px] mx-auto text-[96px] text-center leading-[100%]`}>
              {title}
            </h3>
            {description && (
              <p className='max-w-[840px] w-full mx-auto text-center text-[24px] leading-[140%]'>{description}</p>
            )}
          </div>

          {button && (
            <Button
              className='w-fit'
              style='outline'
              {...button}
            >
              {button.children}
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}

export default PageHeader;