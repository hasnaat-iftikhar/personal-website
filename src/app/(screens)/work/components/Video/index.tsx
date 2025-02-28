import React from 'react';

// Components
import { Container } from '@/app/components';

// Icons
import { Play } from 'lucide-react';

const IntroductoryVideo = () => {
  return (
    <Container>
        <div className='mx-auto bg-[#F1F1F1] aspect-video max-w-[1200px] w-full rounded-[18px] md:rounded-[28px] flex justify-center items-center'>
            <div className='bg-black rounded-full w-[96px] md:w-[180px] 2xl:w-[245px] h-[96px] md:h-[180px] 2xl:h-[245px] flex justify-center items-center'>
                <Play width={120} height={120} className='text-white w-[42px] h-[42px] md:w-[92px] md:h-[92px] 2xl:w-[120px] 2xl:h-[120px]' />
            </div>
        </div>
    </Container>
  )
}

export default IntroductoryVideo;