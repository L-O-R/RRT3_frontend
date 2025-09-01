import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const SwiperComponent = () => {
  return (
    <section className="py-24 px-3">
      <div>
        <h2>Testimonials</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoFocus
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        navigation
        centeredSlides={true}
        allowSlideNext
        lazyPreloadPrevNext={true}
        pagination={{ type: "bullets" }}
        className="min-h-[600px] my-8">
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-black min-h-[400px]">
            Testimonials 1
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
