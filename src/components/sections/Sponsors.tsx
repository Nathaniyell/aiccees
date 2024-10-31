"use client"
import Image from 'next/image'
import {sponsors_list} from "@/components/sponsors_carousel/carousel"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const Sponsors = () => {
  return (
    <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-11/12 mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">Our Sponsors</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full"
        >
          {sponsors_list.map((i) => (
            <SwiperSlide key={i.id} className="flex items-center justify-center">
              <Image
                src={`${i.image}`}
                alt={`Sponsor ${i.id}`}
                width={150}
                height={50}
                className="max-w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Sponsors