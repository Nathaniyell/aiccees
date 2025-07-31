"use client";

import { partners } from "@/components/data_models/conferences";
import { PartnersHero } from "@/components/sections/PartnersHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GoogleFormExample from "@/components/GoogleFormExample";

export default function PartnersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <PartnersHero />

      {/* Partners Display */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200"
            >
              {/* Background Image with Overlay */}
              <div
                className="relative h-60 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${partner.logo.src})`,
                }}
                role="img"
                aria-label={`${partner.name} logo`}
              >
                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Partner Name */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-bold mb-2 drop-shadow-lg">
                    {partner.name}
                  </h3>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-fit text-green-700 border-green-700 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Link
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Visit Website</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <section className="container mx-auto pt-16 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-green-800 font-bold text-center">
              Ready to Become a Partner?
            </h2>
            <p className="text-center text-gray-600 md:text-lg mt-2">
              Join us in creating positive change and driving innovation.
              Together, we can achieve more.
            </p>

            <Button
              variant="outline"
              className="w-fit text-green-700 border-green-700 rounded-lg font-semibold transition-colors duration-200 mt-4"
              onClick={() => setIsModalOpen(true)}
            >
              Become a Partner
            </Button>
          </div>
        </section>
      </section>

      {/* Modal for Google Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] h-full overflow-hidden pb-32">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-green-800">
                Become a Partner
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsModalOpen(false)}
                className="hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Modal Content */}
            
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScVIYFm-SzrXsJCaO2Lt6gYAjoYgUgVte_VFZNTHt8ZCSfhBA/viewform?embedded=true" width="100%" height="100%" className="h-full w-full" >Loading…</iframe>
          </div>
        </div>
      )}
    </div>
  );
}
