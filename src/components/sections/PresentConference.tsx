"use client"
import { useRef } from 'react'
import Image from 'next/image'
import { FileText, BookText, Youtube } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ConferenceMaterials } from './ConferenceMaterials'

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
import AOS from '../layout/AOS'

export default function PresentConference() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  
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
  const materials = [
    {
      id: 1,
      header: "YOUTUBE",
      link: "https://www.youtube.com/@toveroenergy3932/streams",
      icon: Youtube,
      description: "Watch conference presentations and highlights",
      color: "text-white",
      bgColor: "bg-red-600",
      iconBgColor: "bg-white",
      iconColor: "text-red-600"
    },
    {
      id: 2,
      header: "PROCEEDINGS",
      link: "https://www.scientific.net/book/africa-international-conference-on-clean-energy-and-energy-storage/978-3-0357-3771-4",
      icon: BookText,
      description: "Access published conference proceedings",
      color: "text-white",
      bgColor: "bg-blue-700",
      iconBgColor: "bg-white",
      iconColor: "text-blue-700"
    },
    {
      id: 3,
      header: "BOOK OF ABSTRACTS",
      link: "https://drive.google.com/uc?export=download&id=1lE93VeauJnyykfAe1ogiYFDLHE_V4KDD",
      icon: FileText,
      description: "Download conference abstracts",
      color: "text-white",
      bgColor: "bg-green-600",
      iconBgColor: "bg-white",
      iconColor: "text-green-600"
    },
  ]


  return (
    <AOS>
    <section className="w-full py-12 md:py-24 bg-green-50">
      <div className="container md:w-11/12 mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-green-600">
          AICCEES 2024
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed text-center mb-6">
          Get a glimpse of the exciting moments from AICCEES 2024
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
                          sizes="(max-width: 768px) 100vw, 50vw"
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
        <div className='mt-8'>
        
        <ConferenceMaterials 
            year={2024}
            materials={materials}
            titleColor="text-black"
            descColor="text-gray-200"
          />
        </div>
      </div>
    </section>
    </AOS>
  )
}