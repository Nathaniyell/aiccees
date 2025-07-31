"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { organizingCommitteeMembers } from "@/components/data_models/organizing-committee";

export default function OrganizingCommittee() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(organizingCommitteeMembers.length / itemsPerPage);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return organizingCommitteeMembers.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl tracking-tighter sm:text-5xl font-bold mb-4 text-green-800">
          Organising Committee
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the dedicated team behind AICCEES, working tirelessly to bring you an exceptional conference experience.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex gap-8 justify-center items-start">
              {getCurrentItems().map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center text-center max-w-xs border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Profile Image */}
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200 flex items-center justify-center border-2 border-gray-100">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-4xl font-semibold text-gray-500">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Member Info */}
                  <h4 className="text-xl font-bold text-green-800 mb-2">
                    {member.name}
                  </h4>
                  
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {member.role}
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.affiliation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 