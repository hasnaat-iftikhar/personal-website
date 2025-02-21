import React from 'react';

// Components
import { Container } from '@/app/components';

// Icons
import { Play } from 'lucide-react';

const IntroductoryVideo = () => {
  return (
    <Container>
        <div className='mx-auto bg-[#F1F1F1] aspect-video w-[1200px] rounded-[28px] flex justify-center items-center'>
            <div className='bg-black rounded-full w-[245px] h-[245px] flex justify-center items-center'>
                <Play width={120} height={120} className='text-white' />
            </div>
        </div>
    </Container>
  )
}

export default IntroductoryVideo;