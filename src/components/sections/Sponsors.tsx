"use client"

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import { sponsors_list } from '../data_models/conferences'

const Sponsors = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    dragFree: true
  })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(scrollNext, 3000)

    const onMouseEnter = () => clearInterval(autoplay)
    const onMouseLeave = () => {
      clearInterval(autoplay)
      const newAutoplay = setInterval(scrollNext, 3000)
      return () => clearInterval(newAutoplay)
    }

    const emblaNode = emblaApi.rootNode()
    emblaNode.addEventListener('mouseenter', onMouseEnter)
    emblaNode.addEventListener('mouseleave', onMouseLeave)

    return () => {
      clearInterval(autoplay)
      if (emblaNode) {
        emblaNode.removeEventListener('mouseenter', onMouseEnter)
        emblaNode.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [emblaApi, scrollNext])

  return (
    <section id="sponsors" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">
          Our Sponsors
        </h2>
        
        <Carousel
          ref={emblaRef}
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
      </div>
    </section>
  )
}

export default Sponsors