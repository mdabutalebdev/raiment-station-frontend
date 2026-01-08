'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

const CustomerReview = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('/data/CuatomarReview.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className="py-20   bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Customer Reviews
          </h2>
          <p className="text-gray-500 mt-2">
            Real feedback from our happy customers
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map(item => (
            <SwiperSlide key={item.id}>
              <div className="group mb-10 bg-white pb-10 p-7 h-70 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300  flex flex-col">

                {/* Quote Icon */}
                <span className="text-4xl text-gray-200 mb-4">“</span>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.review}
                </p>

                {/* Divider */}
                <div className="my-6 h-[1px] bg-gray-100" />

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={item.profile}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover ring-2 ring-gray-100"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default CustomerReview
