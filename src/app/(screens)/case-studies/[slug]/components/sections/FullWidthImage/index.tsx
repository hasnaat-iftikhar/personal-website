import { Container } from '@/app/components';
import Image from 'next/image';
import React from 'react'

const FullWidthImage = ({
    className = "",
    url = ""
}: {
    className?: string;
    url: string
}) => {
  return (
    <Container>
        <div className={`${className} relative aspect-video w-full bg-[#F1F0EB] rounded-3xl`}>
            <Image
                src={url}
                alt="Video"
                fill
            />
        </div>
    </Container>
  )
}

export default FullWidthImage;