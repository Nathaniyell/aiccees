"use client";

import React, { useState, useEffect } from "react";
import { GrantsHero } from "@/components/sections/GrantsHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Palette,
  GraduationCap,
  Microscope,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TestimonialCarousel from "@/components/sections/testimonials";
import AOS from "@/components/layout/AOS";
import trans from "@/public/images/home/trans.svg";
import Image from "next/image";

export default function GrantsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  // Auto-play functionality for conference images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % conferenceImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [conferenceImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % conferenceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + conferenceImages.length) % conferenceImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GrantsHero />

      {/* About TEA-LP Section */}
      <AOS>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                {/* TEA-LP Logo and Title */}
                <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <Image
                      src={trans}
                      alt="TEA-LP Logo"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-neutral-100">
                      TEA-LP Grant
                    </h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                      Transforming Energy Access – Learning Partnership
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  The TEA-LP (Transforming Energy Access – Learning Partnership)
                  grant is a UK Aid-funded initiative aimed at closing the skills
                  gap in Africa's energy access sector by supporting the
                  development of postgraduate curricula in clean energy and
                  sustainable development.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  It offers up to £20,000 for universities to design and implement 
                  new courses focused on energy access, including topics such as 
                  local energy solutions, mini-grid planning and design, and 
                  off-grid appliances.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  The grant also supports continued professional development (CPD)
                  courses for professionals in the sector. The program is
                  implemented across African, South Asian, and Indo-Pacific
                  countries, with successful outcomes including the creation of 20
                  new university programs and networking opportunities to foster
                  collaboration in energy access.
                </p>
              </div>
              
              {/* Conference Images Carousel */}
              <div className="flex-1 w-full lg:w-96">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <div 
                    className="w-full h-[60vh] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
                    style={{ backgroundImage: `url(${conferenceImages[currentImageIndex].src})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {conferenceImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AOS>

      {/* Mission Statement Section */}
      <AOS>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-neutral-100 mb-8">
                Support Innovation. Fund Impact.
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Your contribution helps advance groundbreaking research, fuel
                innovation, and empower the next generation of changemakers. By
                providing grants, you&apos;re not just funding projects —
                you&apos;re investing in solutions that tackle real-world
                challenges across health, education, technology, and community
                development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Cards Section - Left Side */}
              <div className="space-y-6">
                <Card className="text-left hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                        <Lightbulb className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                          Explore Bold Ideas
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          Enable researchers to pursue transformative and innovative
                          concepts that push the boundaries of what's possible.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-left hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                        <Target className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                          Access Essential Tools
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          Provide comprehensive training, mentorship, and resources 
                          needed for project success and sustainable impact.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-left hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                          Deliver Measurable Outcomes
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          Achieve tangible social and scientific impact through
                          well-funded projects that create lasting positive change.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Image Section - Right Side */}
              <div className="relative">
                <div
                  className="w-full h-96 rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AOS>

      {/* Types of Grants Section */}
      <AOS>
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Types of Grants We Offer
              </h2>
              <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                We provide targeted support through three core grant categories
                designed to empower creativity, scholarship, and discovery:
              </p>
            </div>

            {/* Grants Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 rounded-full">
                      <Palette className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                    Exhibition Grant
                  </h3>
                  <p className="text-neutral-600 text-center leading-relaxed">
                    For artists, curators, and institutions showcasing
                    innovative work that inspires dialogue and cultural
                    engagement across diverse communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 rounded-full">
                      <GraduationCap className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                    Student Grant
                  </h3>
                  <p className="text-neutral-600 text-center leading-relaxed">
                    Financial support for students pursuing academic excellence,
                    professional development, or impactful community projects 
                    that drive positive change.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 rounded-full">
                      <Microscope className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                    Research Grant
                  </h3>
                  <p className="text-neutral-600 text-center leading-relaxed">
                    Funding for independent or institutional research aimed at
                    solving real-world problems and advancing knowledge in 
                    critical areas of study.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AOS>

      {/* Testimonials Section */}
      <AOS>
        <section className="py-20 bg-gray-50">
          <TestimonialCarousel
            title="Hear from past beneficiaries"
            bgColor="bg-gray-50"
            titleStyle="text-green-800 md:text-7xl text-center font-semibold tracking-tighter sm:text-4xl mb-16"
          />
        </section>
      </AOS>
    </div>
  );
}
