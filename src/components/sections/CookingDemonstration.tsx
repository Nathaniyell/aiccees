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
import Autoplay from "embla-carousel-autoplay"
import AOS from '../layout/AOS'
import { cookingImages } from '../data_models/conference-images'


const CookingDemonstration = () => {


  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <AOS>
      <section id="cooking" className="w-full py-12 md:py-24 border-t border-t-slate-200 bg-neutral-50">
        <div className="container md:w-11/12 mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">
            Cooking Demonstration
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-base/relaxed mb-6 text-justify">
            During the AICCEES 2024 conference, we hosted a cooking demonstration sponsored by <span className="font-bold">Modern Energy Cooking Services (MECS)</span>. The demonstration highlighted the power and versatility of modern energy technologies in transforming everyday cooking practices. Attendees witnessed firsthand how innovative energy solutions make cooking more efficient, environmentally friendly, and accessible, aligning with sustainable development goals for cleaner and healthier energy practices across Africa.
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
              {cookingImages.slice(0, 5).map((image, index) => (
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