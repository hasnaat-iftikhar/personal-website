import React, { FC } from 'react';
import Image from 'next/image';

// Type definations
import { BannerProps } from './index.d';

// Components
import { MediaSans } from '@/app/layout';
import Container from '../../layout/Container';
import Button from '../../ui/Button';

const Banner:FC<BannerProps> = ({
    className="",
    image,
    headline,
    title,
    description,
    descriptionClassName,
    buttons,
    ...rest
}) => {
  return (
    <section className={`relative py-[140px] ${className}`} {...rest}>
        <Container>
            <Image
                fill
                src={image}
                alt={`Banner Image | ${title}`}
                className='z-20'
            />

            <div
                className='bg-gradient-to-l from-[#d9d9d900] via-[rgba(76,76,76,0.5)] to-[rgba(0,0,0,0.7)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 w-full h-full z-30'
            />

            <div className='z-40 relative max-w-[600px] mr-auto flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    {headline && (
                        <p className='text-[20px] text-[#F68D00] tracking-[5px] uppercase'>{headline}</p>
                    )}
                    <h2 className={`${MediaSans.className} capitalize tracking-[2px] text-[64px] leading-[100%] text-white`}>{title}</h2>
                </div>

                {description && (
                    <p className={`text-[20px] text-white leading-[140%] ${descriptionClassName}`}>{description}</p>
                )}

                {buttons && (
                    <div className='flex justify-start items-start gap-3'>
                        {buttons?.length > 0 && buttons.map(btn => (
                            <Button
                            style={btn.style}
                            type={btn.type} 
                                className={btn.className}
                            >
                                {btn.children}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    </section>
  )
}

export default Banner