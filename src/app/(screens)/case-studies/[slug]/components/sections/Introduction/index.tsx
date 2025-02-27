import { Container } from '@/app/components';
import { MediaSans } from '@/app/utils/fonts';
import Image from 'next/image';
import React, { FC } from 'react'

const Introduction: FC<{
    content: string;
}> = ({
    content = ""
}) => {
        return (
            <section className='bg-[#1B1B1B] py-[120px]'>
                <Container>
                    <div className='max-w-[1024px] mx-auto flex flex-col gap-16'>
                        <div className='flex flex-col gap-2'>
                            <h2 className={`${MediaSans.className} text-[64px] text-white tracking-[2px] leading-[100%]`}>Introduction</h2>
                            <p className='text-[24px] text-[#F1F0EB] leading-[140%]'>{content.split("\n").map((line, index) =>
                                line.trim() === "" ? <br key={index} /> : (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            )}</p>
                        </div>

                        <div className='bg-[#F1F0EB] rounded-3xl w-full h-auto aspect-video relative'>
                            <Image
                                fill
                                alt='Image'
                                src="/"
                            />
                        </div>
                    </div>
                </Container>
            </section>
        )
    }

export default Introduction;