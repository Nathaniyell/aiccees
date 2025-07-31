import React from "react";
import { GrantsHero } from "@/components/sections/GrantsHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Palette,
  GraduationCap,
  Microscope,
} from "lucide-react";
import TestimonialCarousel from "@/components/sections/testimonials";
import AOS from "@/components/layout/AOS";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GrantsPage() {
  const conferenceImages = [
    {
      src: "/images/conference-pics/IMG_1870.jpg",
      alt: "Conference attendees networking"
    },
    {
      src: "/images/conference-pics/IMG_1880.jpg", 
      alt: "Conference presentation session"
    },
    {
      src: "/images/conference-pics/IMG_1922.jpg",
      alt: "Conference workshop"
    },
    {
      src: "/images/conference-pics/IMG_2103.jpg",
      alt: "Conference panel discussion"
    },
    {
      src: "/images/conference-pics/IMG_2555.jpg",
      alt: "Conference closing ceremony"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GrantsHero />

      {/* About TEA-LP */}
      <AOS>
        <section className="container mx-auto pt-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-neutral-100 mb-6">
                About TEA-LP
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                The TEA-LP (Transforming Energy Access – Learning Partnership)
                grant is a UK Aid-funded initiative aimed at closing the skills
                gap in Africa’s energy access sector by supporting the
                development of postgraduate curricula in clean energy and
                sustainable development. It offers up to £20,000 for
                universities to design and implement new courses focused on
                energy access, including topics such as local energy solutions,
                mini-grid planning and design, and off-grid appliances. The
                grant also supports continued professional development (CPD)
                courses for professionals in the sector. The program is
                implemented across African, South Asian, and Indo-Pacific
                countries, with successful outcomes including the creation of 20
                new university programs and networking opportunities to foster
                collaboration in energy access.
              </p>
            </div>
            
            {/* Conference Images Carousel */}
            <div className="flex-1 w-full lg:w-96">
              <h3 className="text-xl font-bold text-green-800 dark:text-neutral-100 mb-4 text-center lg:text-left">
                Conference Highlights
              </h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {conferenceImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-lg">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </section>{" "}
      </AOS>

      {/* Mission Statement Section */}
      <AOS>
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-neutral-100 mb-6">
                Support Innovation. Fund Impact.
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                Your contribution helps advance groundbreaking research, fuel
                innovation, and empower the next generation of changemakers. By
                providing grants, you&apos;re not just funding projects —
                you&apos;re investing in solutions that tackle real-world
                challenges across health, education, technology, and community
                development.
              </p>
            </div>

            <div className="flex gap-4 flex-col lg:flex-row">
              {/* Cards Section - Left Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                        <Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      Explore Bold Ideas
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Enable researchers to pursue transformative and innovative
                      concepts
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                        <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      Access Essential Tools
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Provide training, mentorship, and resources for project
                      success
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                        <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      Deliver Measurable Outcomes
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Achieve tangible social and scientific impact through
                      funded projects
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Image Section - Right Side */}

              <div
                className="relative w-full lg:w-1/2 h-auto rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
      </AOS>

      {/* Types of Grants Section */}
      <AOS>
        <section
          className="py-16 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Section Header - Outside Flex */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Grants We Offer
              </h2>
              <p className="text-lg text-white/90 max-w-4xl mx-auto">
                We provide targeted support through three core grant categories
                designed to empower creativity, scholarship, and discovery:
              </p>
            </div>

            {/* Grants Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Palette className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                    Exhibition Grant
                  </h3>
                  <p className="text-neutral-600 text-center">
                    For artists, curators, and institutions showcasing
                    innovative work that inspires dialogue and cultural
                    engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <GraduationCap className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                    Student Grant
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Financial support for students pursuing academic excellence,
                    professional development, or impactful community projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Microscope className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                    Research Grant
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Funding for independent or institutional research aimed at
                    solving real-world problems and advancing knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AOS>
      {/* Testimonials Section */}
      <TestimonialCarousel
        title="Testimonials From Past Beneficiaries"
        bgColor="bg-white"
        titleStyle="text-green-800 md:text-4xl text-center font-bold tracking-tighter sm:text-4xl mb-12"
      />
    </div>
  );
}
