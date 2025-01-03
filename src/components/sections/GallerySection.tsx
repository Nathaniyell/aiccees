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
import { conferenceImages } from '../data_models/conference-images'
import Link from 'next/link'


const CookingDemonstration = () => {


  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <AOS>
      <section id="cooking" className="w-full py-12 md:pb-24">
        <div className="container md:w-11/12 mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">
            Gallery
          </h2>


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
              {conferenceImages.map((image, index) => (
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
          <div className="mt-16 text-center flex items-center justify-center">
            <Link href="/gallery" className="bg-emerald-900 text-white hover:bg-emerald-800 font-semibold px-8 py-6 text-lg">
              View More
            </Link>
          </div>
        </div>
      </section>
    </AOS>
  )
}
export default CookingDemonstration
