'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, UserRound } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"
import { useRef } from 'react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Lead Developer",
    company: "TechCorp Solutions",
    content: "The conference exceeded all expectations. The quality of presentations and networking opportunities were outstanding. I left with valuable insights and connections that have already impacted my work.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "AI Researcher",
    company: "Innovation Labs",
    content: "As a first-time speaker, I was impressed by the organization and support provided. The audience engagement was fantastic, and the feedback received was incredibly valuable for my research.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Future Systems",
    content: "The diverse range of topics and speakers made this conference truly unique. The interactive sessions and workshops provided practical knowledge that I could immediately apply to my projects.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "StartUp Innovations",
    content: "The conference created the perfect environment for meaningful discussions and collaboration. The caliber of speakers and attendees was exceptional, making it a must-attend event in our industry.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function TestimonialCarousel() {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )

  return (
    <section className="py-12 bg-gradient-to-b from-green-900 to-green-800 text-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Testimonials
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
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem 
                key={testimonial.id} 
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="bg-green-50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <UserRound className="h-full w-full rounded-full" />
                         
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-slate-600">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-emerald-800">
                        &quot;{testimonial.content}&quot;
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

