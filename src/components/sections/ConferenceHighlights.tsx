"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Two text sections */}
          <div className="flex-1 space-y-8">
            <div className="text-center lg:text-left">
              <div className="text-xl font-semibold text-green-600 mb-2">01</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Keynote Sessions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Industry-leading experts share cutting-edge insights and innovative perspectives on the latest developments in energy and sustainability.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-xl font-semibold text-green-600 mb-2">02</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Breakout Sessions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Engage in focused paper presentations and dynamic panel discussions that explore specific themes and emerging trends in the field.
              </p>
            </div>
          </div>

          {/* Center - Image Carousel */}
          <div className="flex-1 relative min-h-[500px] w-full rounded overflow-hidden">
            <div 
              className="w-full h-full min-h-[500px] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {backgroundImages.slice(0, 8).map((_, index) => (
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

          {/* Right side - Two text sections */}
          <div className="flex-1 space-y-8">
            <div className="text-center lg:text-right">
              <div className="text-xl font-semibold text-green-600 mb-2">03</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Global Networking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with innovators, researchers, and industry leaders from around the world to build lasting professional relationships and collaborations.
              </p>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-xl font-semibold text-green-600 mb-2">04</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Business Mentorship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized guidance from industry experts and successful entrepreneurs to accelerate your career growth and business development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 