"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import cooking from '@/public/images/cooking-demonstration/cooking.jpg'
import cooking1 from '@/public/images/cooking-demonstration/cooking1.jpg'
import cooking2 from '@/public/images/cooking-demonstration/cooking2.jpg'
import cooking3 from '@/public/images/cooking-demonstration/cooking3.jpg'
import cooking4 from '@/public/images/cooking-demonstration/cooking4.jpg'
import cooking5 from '@/public/images/cooking-demonstration/cooking5.jpg'
import Autoplay from "embla-carousel-autoplay"
import AOS from '../layout/AOS'


const CookingDemonstration = () => {
  const cookingImages = [
    { src: cooking, alt: "Cooking Demonstration 1" },
    { src: cooking1, alt: "Cooking Demonstration 2" },
    { src: cooking2, alt: "Cooking Demonstration 3" },
    { src: cooking3, alt: "Cooking Demonstration 4" },
    { src: cooking4, alt: "Cooking Demonstration 5" },
    { src: cooking5, alt: "Cooking Demonstration 6" },
  ];

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <AOS>
    <section id="cooking" className="w-full py-12 md:py-24">
      <div className="container md:w-11/12 mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">
          Cooking Demonstration
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-base/relaxed mb-6 text-justify">
          At the AICCEES 2024 conference, we are thrilled to present a cooking demonstration sponsored by <span className="font-bold">Modern Energy Cooking Services (MECS)</span>. This highlighted the power and versatility of modern energy technologies in transforming everyday cooking practices. Attendees witnessed firsthand how innovative energy solutions make cooking more efficient, environmentally friendly, and accessible, aligning with sustainable development goals for cleaner and healthier energy practices across Africa. 
        </p>
        
        <Carousel
           plugins={[plugin.current]}
           onMouseEnter={plugin.current.stop}
           onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {cookingImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="relative aspect-[4/3] p-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
                          priority={index < 2}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
    </AOS>
  )
}

export default CookingDemonstration