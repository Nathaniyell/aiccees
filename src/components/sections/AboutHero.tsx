"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Star } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-emerald-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-32 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 px-4 py-2 bg-green-500/20 text-green-100 border-green-400/30">
            <Star className="w-4 h-4 mr-2" />
            Clean Energy Conference
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-white to-lime-400 bg-clip-text text-transparent">
            About AICCEES
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
          Uniting Clean Energy Researchers, Innovators and Policy makers across Africa
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-2" />
              September 25-26, 2025
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2" />
              University of Port Harcourt, Nigeria
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Users className="w-4 h-4 mr-2" />
              600+ Expected Attendees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 