import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ slides = [] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{
            el: ".custom-swiper-pagination", // Ensure it matches the div class below
            clickable: true,
          }}
        className="w-full swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!relative !flex items-center justify-center h-[800px] max-2xl:h-[700px] max-sxl:h-[580px] max-mmmd:h-[500px] max-ssm:h-[400px]"
          >
            <img
              loading="lazy"
              src={slide.image}
              className="w-full max-h-[600px] h-full object-cover"
              alt={`Slide ${slide.id}`}
            />
            <h2 className="absolute z-[99] max-w-[800px] mx-auto text-white font-source_serif_proregular text-[70px] max-mmmd:text-[50px] max-sxl:text-6xl leading-[80px] max-ssm:text-4xl text-center px-4 py-2">
              {slide.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination */}
      <div className="custom-swiper-pagination absolute bottom-[58px] left-1/2 -translate-x-[50%] z-20 flex gap-x-3 ssm:bottom-5 ssm:gap-x-4"></div>
    </div>
  );
}
