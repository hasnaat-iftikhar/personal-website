"use client"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay } from "swiper/modules"
import Image from "next/image"

const ProjectsCarousel = () => {
  return (
    <section id="projectsCarousel" className="overflow-hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
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
        {[
          '/portfolio/mini-thumbnails/fweygo.svg',
          '/portfolio/mini-thumbnails/kove.svg',
          '/portfolio/mini-thumbnails/cambie.svg',
          '/portfolio/mini-thumbnails/fweygo.svg',
          '/portfolio/mini-thumbnails/kove.svg',
          '/portfolio/mini-thumbnails/cambie.svg',
          '/portfolio/mini-thumbnails/fweygo.svg',
          '/portfolio/mini-thumbnails/kove.svg',
          '/portfolio/mini-thumbnails/cambie.svg'
        ].map((slideNumber) => (
          <SwiperSlide key={slideNumber} className="!w-auto transition-transform">
            <div className="relative w-[360px] md:w-[520px] aspect-video bg-[#F1F1F1] rounded-[18px] overflow-hidden md:rounded-[16px]">
              <Image
                src={slideNumber}
                alt="Project"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProjectsCarousel

