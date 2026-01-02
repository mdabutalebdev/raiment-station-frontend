'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const slides = [
  "/images/banner-1.jpg",
  "/images/banner-2.jpg",
   "/images/banner-one.jpg"
];

const Hero = () => {
  return (
    <section className="pb-10  bg-white">
      <div className="container mx-auto px-20">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-[28rem] lg:h-[30rem]"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[28rem] lg:h-[36rem]">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-content w-full h-full rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Hero;
