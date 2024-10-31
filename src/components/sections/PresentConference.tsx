"use client"
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import all conference images
import conferencePics from "@/public/images/conference-pics/IMG_1922.jpg"
import conferencePics1 from "@/public/images/conference-pics/IMG_1870.jpg"
import conferencePics2 from "@/public/images/conference-pics/IMG_1880.jpg"
import conferencePics3 from "@/public/images/conference-pics/IMG_1881.jpg"
import conferencePics4 from "@/public/images/conference-pics/IMG_1885.jpg"
import conferencePics5 from "@/public/images/conference-pics/IMG_1923.jpg"
import conferencePics6 from "@/public/images/conference-pics/IMG_1934.jpg"
import conferencePics7 from "@/public/images/conference-pics/IMG_1938.jpg"
import conferencePics8 from "@/public/images/conference-pics/IMG_2015.jpg"
import conferencePics9 from "@/public/images/conference-pics/IMG_2020.jpg"
import conferencePics10 from "@/public/images/conference-pics/IMG_2103.jpg"
import conferencePics11 from "@/public/images/conference-pics/IMG_2026.jpg"
import conferencePics12 from "@/public/images/conference-pics/IMG_2107.jpg"
import conferencePics13 from "@/public/images/conference-pics/IMG_2417.jpg"
import conferencePics14 from "@/public/images/conference-pics/IMG_2431.jpg"

const PresentConference = () => {
  // Create array of all conference images
  const conferenceImages = [
    { src: conferencePics, alt: "Conference Image 1" },
    { src: conferencePics1, alt: "Conference Image 2" },
    { src: conferencePics2, alt: "Conference Image 3" },
    { src: conferencePics3, alt: "Conference Image 4" },
    { src: conferencePics4, alt: "Conference Image 5" },
    { src: conferencePics5, alt: "Conference Image 6" },
    { src: conferencePics6, alt: "Conference Image 7" },
    { src: conferencePics7, alt: "Conference Image 8" },
    { src: conferencePics8, alt: "Conference Image 9" },
    { src: conferencePics9, alt: "Conference Image 10" },
    { src: conferencePics10, alt: "Conference Image 11" },
    { src: conferencePics11, alt: "Conference Image 12" },
    { src: conferencePics12, alt: "Conference Image 13" },
    { src: conferencePics13, alt: "Conference Image 14" },
    { src: conferencePics14, alt: "Conference Image 15" },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-green-50">
      <div className="w-11/12 mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-green-600">
          This Year&apos;s Conference
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed text-center mb-6">
          Get a glimpse of the exciting moments from AICCEES 2024 so far.
        </p>
        
        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              }
            }}
            className="pb-12 w-11/12 mx-auto !grid !place-items-center !justify-center !items-center"
            style={{
              "--swiper-navigation-color": "#16a34a",
              "--swiper-pagination-color": "#16a34a",
            } as React.CSSProperties}
            >
            {conferenceImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative md:ml-auto  aspect-[4/3] h-[300px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default PresentConference