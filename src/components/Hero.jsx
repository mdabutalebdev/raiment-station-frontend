'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const slides = [
  "/images/banner-one.jpg",
  "/images/banner_two.jpg",
  "/images/banner_3.jpg",
  "/images/banner_four.jpg"
];

const Hero = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-[28rem] lg:h-[36rem]"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[28rem] lg:h-[36rem]">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-content w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
