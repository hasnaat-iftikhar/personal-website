"use client"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay } from "swiper/modules"

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
        {[1, 2, 3, 4, 1, 2, 3, 4].map((slideNumber, index) => (
          <SwiperSlide key={index} className="!w-auto transition-transform">
            <div className="w-[360px] md:w-[520px] aspect-video bg-[#F1F1F1] rounded-[18px] md:rounded-[28px] flex justify-center items-center">
              Slide {slideNumber}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProjectsCarousel

