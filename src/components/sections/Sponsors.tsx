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
import { sponsors_list } from '../data_models/conferences'
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link'
import AOS from '../layout/AOS'

const Sponsors = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 

  return (
    <AOS>
    <section id="partners" className="w-full py-12 md:pt-24 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">
          Our Partners
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
            {sponsors_list.map((sponsor) => (
              <CarouselItem 
                key={sponsor.id} 
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
              >
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="relative w-[150px] h-[50px]">
                        <Image
                          src={sponsor.image}
                          alt={`Sponsor ${sponsor.id}`}
                          fill
                          className="object-contain"
                          sizes="150px"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
        <div className="mt-16 text-center flex items-center justify-center gap-2 flex-col sm:flex-row">
                        <h3 className="text-xl font-semibold">Do you want to partner with us?</h3>
                        <Link href="/partners" className="text-blue-700 hover:text-blue-800 underline text-lg">
                       Read more about our partnership packages here
                        </Link>
                        
                    </div>
      </div>
    </section>
    </AOS>
  )
}

export default Sponsors