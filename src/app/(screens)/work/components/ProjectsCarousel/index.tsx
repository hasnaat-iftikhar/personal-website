"use client";

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

const ProjectsCarousel = () => {
  return (
    <section id="projectsCarousel">
        <Swiper
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 0
          }}
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          speed={5000}
        >
          <SwiperSlide>
            <div className='w-[520px] aspect-video bg-[#F1F1F1] rounded-[28px] flex justify-center items-center'>
            Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[520px] aspect-video bg-[#F1F1F1] rounded-[28px] flex justify-center items-center'>
            Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[520px] aspect-video bg-[#F1F1F1] rounded-[28px] flex justify-center items-center'>
            Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[520px] aspect-video bg-[#F1F1F1] rounded-[28px] flex justify-center items-center'>
            Slide 4
            </div>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default ProjectsCarousel;