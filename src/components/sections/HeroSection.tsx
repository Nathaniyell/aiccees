"use client"
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import herobg0 from '@/public/images/herobg0.jpg'
import herobg1 from '@/public/images/herobg1.jpg'
import herobg2 from '@/public/images/herobg2.jpg'
import herobg3 from '@/public/images/herobg3.jpg'
import herobg4 from '@/public/images/herobg4.jpg'
import herobg5 from '@/public/images/herobg5.jpg'
import herobg6 from '@/public/images/herobg6.jpg'
import herobg7 from '@/public/images/herobg7.jpg'

const BACKGROUND_IMAGES = [
  herobg0,
  herobg1,
  herobg2,
  herobg3,
  herobg4,
  herobg5,
  herobg6,
  herobg7,
]

export function HeroSection() {
  return (
    <section className="w-full relative h-[60vh] md:h-[80vh] lg:h-[90vh]">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-[1]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {BACKGROUND_IMAGES.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div 
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute z-[2] inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90" />

      {/* Content */}
      <div className="relative z-[3] container h-full px-4 md:px-6 flex items-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Africa International Conference on Clean Energy & Energy Storage
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Empowering Africa&apos;s Future Through Clean Energy Innovation and Sustainable Storage Solutions
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-red-600 text-white hover:bg-red-700">Register Now</Button>
            <Button 
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline" 
              className="!text-green-700 border-white hover:bg-green-700 hover:!text-white hover:border-green-700"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 