"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Components
import { Container } from '@/app/components';

// Icons
import { Film, Play } from 'lucide-react';

const IntroductoryVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <Container>
      <div className="relative overflow-hidden mx-auto bg-[#F1F1F1] aspect-video max-w-[1440px] w-full rounded-[18px] md:rounded-[28px] flex justify-center items-center">
        {isVideoPlaying ? (
          // Embedded YouTube video
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tvwmdZyUHMo?autoplay=1&controls=0"
            title="Introductory Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // Thumbnail with film icon overlay
          <div className="relative w-full h-full">
            <Image
              src="/pictures/video-thumbnail.jpg"
              fill
              className="object-cover"
              alt="Video Thumbnail"
            />
            <button
              onClick={handlePlayClick}
              className="absolute bottom-16 right-16 bg-white rounded-full w-[96px] md:w-[180px] 2xl:w-[245px] h-[96px] md:h-[180px] 2xl:h-[245px] flex justify-center items-center"
              aria-label="Play video"
              type="button"
            >
              <Play fill='red' className="text-red-600 w-[42px] h-[42px] md:w-[92px] md:h-[92px] 2xl:w-[120px] 2xl:h-[120px]" />
            </button>
          </div>
        )}
      </div>
    </Container>
  )
}

export default IntroductoryVideo;