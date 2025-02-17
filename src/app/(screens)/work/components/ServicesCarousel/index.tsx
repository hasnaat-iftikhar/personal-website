"use client";

import React, { CSSProperties } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

// Fonts
import { MediaSans } from '@/app/layout';

const ServicesCarousel = () => {
    return (
        <section className='py-[120px] overflow-hidden'>
            <div className='rotate-6'>
                <Swiper
                    slidesPerView="auto"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    modules={[Autoplay]}
                    loop={true}
                    freeMode={true}
                    speed={5000}
                >
                    {Array(4)
                        .fill("Show me what you’ve got! - ")
                        .map((text, index) => (
                            <SwiperSlide key={index} className="w-fit">
                                <h2
                                    style={{
                                        WebkitTextStroke: "2px black",
                                        color: "#fff",
                                    } as CSSProperties}
                                    className={`w-fit text-[120px] whitespace-nowrap ${MediaSans.className}`}
                                >
                                    {text}
                                </h2>
                            </SwiperSlide>
                        ))}
                </Swiper>

                <Swiper
                    slidesPerView="auto"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    spaceBetween={0}
                    modules={[Autoplay]}
                    loop={true}
                    freeMode={true}
                    speed={5000}
                    dir="rtl"
                >
                    {["Front-End,", "No-code,", "Web Design,", "Design to Code,"].map(
                        (text, index) => (
                            <SwiperSlide key={index} className="w-fit">
                                <h2
                                    className={`w-fit text-[120px] whitespace-nowrap ${MediaSans.className} text-[#1B1B1B]`}
                                >
                                    {text}
                                </h2>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </section>
    )
}

export default ServicesCarousel;