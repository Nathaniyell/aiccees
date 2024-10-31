"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import cooking from '@/public/images/cooking-demonstration/cooking.jpg'
import cooking1 from '@/public/images/cooking-demonstration/cooking1.jpg'
import cooking2 from '@/public/images/cooking-demonstration/cooking2.jpg'
import cooking3 from '@/public/images/cooking-demonstration/cooking3.jpg'
import cooking4 from '@/public/images/cooking-demonstration/cooking4.jpg'
import cooking5 from '@/public/images/cooking-demonstration/cooking5.jpg'

const CookingDemonstration = () => {
  const cookingImages = [
    { src: cooking, alt: "Cooking Demonstration 1" },
    { src: cooking1, alt: "Cooking Demonstration 2" },
    { src: cooking2, alt: "Cooking Demonstration 3" },
    { src: cooking3, alt: "Cooking Demonstration 4" },
    { src: cooking4, alt: "Cooking Demonstration 5" },
    { src: cooking5, alt: "Cooking Demonstration 6" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-11/12 mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">
          Cooking Demonstration
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-base/relaxed mb-6 text-center">
          At the AICCEES 2024 conference, we are thrilled to present a cooking demonstration sponsored by <span className="font-bold">Modern Energy Cooking Services (MECS)</span>. This highlighted the power and versatility of modern energy technologies in transforming everyday cooking practices. Attendees witnessed firsthand how innovative energy solutions make cooking more efficient, environmentally friendly, and accessible, aligning with sustainable development goals for cleaner and healthier energy practices across Africa. 
        </p>
        
        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
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
            // navigation={true}
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
            {cookingImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative md:ml-auto aspect-[4/3] h-[300px]">
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

export default CookingDemonstration