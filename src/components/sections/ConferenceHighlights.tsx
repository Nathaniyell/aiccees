"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Award, Users, Network, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

export default function ConferenceHighlights() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/images/conference-pics/IMG_1922.jpg',
    '/images/conference-pics/IMG_1870.jpg',
    '/images/conference-pics/IMG_1880.jpg',
    '/images/conference-pics/IMG_1881.jpg',
    '/images/conference-pics/IMG_1885.jpg',
    '/images/herobg0.jpg',
    '/images/herobg1.jpg',
    '/images/herobg2.jpg',
    '/images/herobg3.jpg',
    '/images/herobg4.jpg',
    '/images/herobg5.jpg',
    '/images/herobg6.jpg',
    '/images/herobg7.jpg',
    '/images/cooking-demonstration/IMG_1753.jpg',
    '/images/cooking-demonstration/IMG_1765.jpg',
    '/images/cooking-demonstration/IMG_2213.jpg',
    '/images/cooking-demonstration/IMG_2216.jpg',
    '/images/cooking-demonstration/IMG_2217.jpg',
    '/images/cooking-demonstration/IMG_2330.jpg',
    '/images/cooking-demonstration/IMG_2385.jpg',
  ];

  // Auto-play functionality for background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl tracking-tighter sm:text-5xl font-bold mb-4 text-green-800">
          Conference Highlights
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left side - Content */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Keynote Sessions
              </h3>
              <p className="text-gray-600 text-sm">
                Industry-leading experts share cutting-edge insights
              </p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Breakout Sessions
              </h3>
              <p className="text-gray-600 text-sm">
                Paper presentations and panel discussions
              </p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Global Networking
              </h3>
              <p className="text-gray-600 text-sm">
                Connect with innovators from around the world
              </p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Business Mentorship Session
              </h3>
              <p className="text-gray-600 text-sm">
                Get personalized guidance from industry experts
              </p>
            </Card>
          </div>
        </div>

        {/* Right side - Image Carousel */}
        <div className="flex-1 relative min-h-[400px] rounded-lg overflow-hidden">
          {/* Background Image with Carousel */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-green-800/60 to-red-800/60"></div> */}
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
            {backgroundImages.map((_, index) => (
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
  );
} 