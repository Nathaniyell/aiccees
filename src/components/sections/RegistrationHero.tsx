"use client";
import React from "react";
import {
  Users,
  FileText,
  CheckCircle,
  Calendar,
  MapPin,
} from "lucide-react";

export function RegistrationHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-emerald-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-white to-lime-400 bg-clip-text text-transparent">
            Register Now
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Secure Your Spot at Africa&apos;s Premier Clean Energy Conference
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-12">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-2" />
              September 26-27, 2025
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2" />
              University of Port Harcourt, Nigeria
            </div>
            
          </div>

          {/* Registration Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Conference Attendance Registration
              </h3>
              <p className="text-sm text-green-100">
                Fill out the registration form to secure your spot
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Visa Support Application
              </h3>
              <p className="text-sm text-green-100">
                Fill out the visa application form to secure your visa
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex justify-center mb-4">
                <FileText className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Scientific Committee Membership Application
              </h3>
              <p className="text-sm text-green-100">
                Fill out the committee application form to secure your spot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
