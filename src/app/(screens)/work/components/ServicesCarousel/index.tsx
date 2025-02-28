"use client";

import React, { CSSProperties } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

// Fonts
import { MediaSans } from '@/app/utils/fonts';

const ServicesCarousel = () => {
    return (
        <section className='py-[120px] overflow-hidden'>
            <div className='rotate-6'>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={0}
                    centeredSlides={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    speed={5000}
                    allowTouchMove={false}
                    className="!overflow-visible"
                    style={{
                        width: "100%",
                        transform: "translateX(0)",
                    }}
                >
                    {Array(8)
                        .fill("Show me what you’ve got! - ")
                        .map((text, index) => (
                            <SwiperSlide key={index} className="w-fit">
                                <h2
                                    style={{
                                        WebkitTextStroke: "2px black",
                                        color: "#fff",
                                    } as CSSProperties}
                                    className={`w-fit text-[64px] md:text-[82px] xl:text-[82px] 2xl:text-[120px] whitespace-nowrap ${MediaSans.className}`}
                                >
                                    {text}
                                </h2>
                            </SwiperSlide>
                        ))}
                </Swiper>

                <Swiper
                    slidesPerView="auto"
                    spaceBetween={0}
                    centeredSlides={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    speed={5000}
                    allowTouchMove={false}
                    className="!overflow-visible"
                    style={{
                        width: "100%",
                        transform: "translateX(0)",
                    }}
                >
                    {[" Front-End Development - ", " Back-End Development - ", " Design to Code - ", " Web Design - ", " Front-End Development - ", " Back-End Development - ", " Design to Code - ", " Web Design - "]
                        .map((text, index) => (
                            <SwiperSlide key={index} className="w-fit">
                                <h2
                                    className={`w-fit text-[64px] md:text-[82px] xl:text-[82px] 2xl:text-[120px] text-black ${MediaSans.className}`}
                                >
                                    {text}
                                </h2>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    )
}

export default ServicesCarousel;