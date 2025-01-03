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
    name: "Sammy Joel Panwal",
    role: "PhD Student",
    company: "National Open University of Nigeria",
    content: "The AICCEES conference has inspired me to be more proactive in driving change within this field, and I look forward to integrating these insights into my future projects and career trajectory.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Desire Mussa",
    role: "M.Sc Student",
    company: "Malawi University of Business and Applied Science",
    content: "Attending the AICCEES conference has taught me that young professionals in the energy sector have a significant role to play in increasing energy access across Africa. The AICCEES has inspired me to continue investing my time in sustainable energy research, innovation, and entrepreneurship. The AICCEES has shown me that I don’t need to be older to contribute to sustainable energy access development. I have been motivated that I can make a difference even in my youth days",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Dr. Veronica Akpasoh",
    role: "Chief Executive Officer",
    company: "Tovero Energy Limited",
    content: "The diversity of perspectives and innovative solutions presented reaffirmed the importance of collaborative efforts in advancing clean energy and sustainable development across the continent and the world.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 4,
    name: "Dr. Veronica Akpasoh",
    role: "Chief Executive Officer",
    company: "Tovero Energy Limited",
    content: "AICCESS 2024 combined exhibitions, networking, and electric cooking demonstrations to create a new formidable platform for knowledge sharing, collaboration, and innovation in clean energy and sustainable cooking.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 5,
    name: "Mourice Kausya",
    role: "Researcher",
    company: "Kenyatta University ",
    content: "The presentation on the direct use application of geothermal energy stood out to me. Coming from Kenya, a country rich in geothermal resources…. Our geothermal energy is primarily used for electricity generation in large power plants, but many neighbouring communities, often pastoral and without access to electricity, do not benefit directly from these resources. This innovative approach, which includes applications such as egg incubation, presents an opportunity to expand the direct use of geothermal energy in ways that can truly benefit these communities. For instance, small-scale geothermal projects could generate electricity for local use, offering an off-grid solution to connect remote communities. Additionally, geothermal energy could be harnessed to support greenhouse farming, which would help improve food security in these arid regions of the Rift Valley. This technology has the potential to significantly improve the quality of life for these communities by providing suitable sustainable energy",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 6,
    name: "G. Plason Z. Plakar",
    role: "Researcher",
    company: "",
    content: "The keynote lecture by Prof Foluke on waste management  particularly engaging and informative because Africa remains a hub for abundance of energy resources, which are termed as wastes. The speaker’s passion and expertise made the topic accessible and enjoyable. I learned a great deal from this presentation and believe it will be valuable in my future work.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
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

