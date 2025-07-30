"use client";

import { Card } from "@/components/ui/card";
import { Award, Users, Network, Lightbulb } from "lucide-react";

export default function ConferenceHighlights() {
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
                12 Keynote Sessions
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
                Interactive Workshops
              </h3>
              <p className="text-gray-600 text-sm">
                Hands-on learning with industry professionals
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
                Innovation Challenge
              </h3>
              <p className="text-gray-600 text-sm">
                Showcase your breakthrough technologies and solutions
              </p>
            </Card>
          </div>
        </div>

        {/* Right side - Background Image */}
        <div className="flex-1 relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/60 to-red-800/60"></div>
        </div>
      </div>
    </div>
  );
} 