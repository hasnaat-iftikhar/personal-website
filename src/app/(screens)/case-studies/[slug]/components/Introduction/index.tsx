import React, { type FC } from 'react'
import { Container } from '@/app/components';
import { MediaSans } from '@/app/utils/fonts';
import Image from 'next/image';

const Introduction: FC<{
    content: string;
    projectIntroductionPicture: string;
}> = ({
    content = "",
    projectIntroductionPicture = ""
}) => {
        return (
            <section className='bg-black py-[96px] md:py-[120px]'>
                <Container>
                    <div className='max-w-[1024px] mx-auto flex flex-col gap-8 2xl:gap-16'>
                        <div className='flex flex-col gap-4 2xl:gap-6'>
                            <h2 className={`${MediaSans.className} text-[42px] md:text-[56px] 2xl:text-[64px] text-white tracking-[2px] leading-[100%]`}>Introduction</h2>
                            <p className='text-[16px] md:text-[20px] 2xl:text-[24px] text-[#F1F0EB] leading-[140%]'>{content.split("\n").map((line, index) =>
                                line.trim() === "" ? <br key={index} /> : (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            )}</p>
                        </div>

                        <div className='bg-[#F1F0EB] overflow-hidden rounded-2xl w-full h-auto aspect-video relative'>
                            <Image
                                fill
                                alt='Image'
                                src={projectIntroductionPicture}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        )
    }

export default Introduction;