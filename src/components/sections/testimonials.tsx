"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, UserRound } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { testimonials } from "../data_models/testimonials";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AOS from "../layout/AOS";

interface TestimonialProps {
  title?: string;
  bgColor?: string;
  titleStyle?: string;
}

export default function TestimonialCarousel({
  title = "Testimonials",
  bgColor = "bg-gradient-to-b from-green-900 to-green-800",
  titleStyle = "text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12",
}: TestimonialProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  return (
    <AOS>
      <section className={`py-12 ${bgColor} text-white px-4 overflow-hidden`}>
        <div className="container mx-auto">
          <h2 className={`${titleStyle}`}>{title}</h2>
          <div className="relative max-w-6xl mx-auto">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="relative bg-green-50 h-80 pb-4">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden">
                              <UserRound className="h-full w-full rounded-full" />
                            </div>
                            <div>
                              <h3 className="font-semibold">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-slate-600">
                                {testimonial.role} at {testimonial.company}
                              </p>
                            </div>
                          </div>
                          <div
                            className="flex mb-4"
                            aria-label={`Rated ${testimonial.rating} out of 5 stars`}
                          >
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <blockquote className="text-emerald-800 ">
                            &quot;{testimonial.content.slice(0, 120)}...&quot;
                            <button
                              onClick={() => setSelectedTestimonial(testimonial)}
                              className="w-fit absolute bottom-3 block border border-white rounded-md px-2 py-1 mt-2 text-sm font-medium text-rose-600 hover:text-rose-700 text-nowrap"
                            >
                              Read More
                            </button>
                          </blockquote>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex text-black" />
              <CarouselNext className="hidden md:flex text-black" />
            </Carousel>
          </div>
        </div>

        <Dialog
          open={!!selectedTestimonial}
          onOpenChange={() => setSelectedTestimonial(null)}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <UserRound className="h-full w-full rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold">{selectedTestimonial?.name}</h3>
                  <p className="text-sm text-slate-600">
                    {selectedTestimonial?.role} at{" "}
                    {selectedTestimonial?.company}
                  </p>
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="flex mb-4">
              {selectedTestimonial &&
                [...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
            </div>
            <blockquote className="text-emerald-800">
              &quot;{selectedTestimonial?.content}&quot;
            </blockquote>
          </DialogContent>
        </Dialog>
      </section>
    </AOS>
  );
}
