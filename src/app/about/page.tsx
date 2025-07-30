"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutAiccees } from "@/components/data_models/about-aiccees";
import {
  Users,
  Calendar,
  MapPin,
  Award,
  Cpu,
  Network,
  Globe,
  Lightbulb,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import ConferenceCallToAction from "@/components/call-to-action";
import ConferenceChairs from "@/components/sections/conference-chairs";
import ScientificCommittee from "@/components/sections/scientific-committee";
import { SpeakersSection } from "@/components/sections/SpeakersSection";

// Counter animation hook
function useCountAnimation(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

// Stats component with animated counters
function StatsCard({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const animatedValue = useCountAnimation(value);

  return (
    <div>
      <div className="text-7xl text-center font-bold text-gray-800 mb-2">
        {animatedValue}
        {suffix}
      </div>
      <div className="text-2xl text-center text-green-700 font-medium">{label}</div>
    </div>
  );
}

export default function AboutPage() {


  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
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
              Premier Technology Conference
            </Badge>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-white to-lime-400 bg-clip-text text-transparent">
              About AICCEES
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Uniting Innovators in Computer, Electrical, and Electronics
              Sciences
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Calendar className="w-4 h-4 mr-2" />
                September 26-27, 2025
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

      <div className="py-16">
        {/* Animated Statistics */}
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 place-items-center gap-6 mb-14 mt-10 relative z-10">
          <StatsCard
           
            value={1173}
            label="Global Attendees"
            suffix="+"
          />
          <StatsCard value={86} label="Abstract Submissions" />
          <StatsCard value={51} label="Papers Accepted" />
          <StatsCard value={45} label="Paper Presentations" />
          <StatsCard value={5} label="Panel Sessions" />
          <StatsCard value={7} label="Keynote Speakers" />
        </div>

        {/* Conference Overview */}
        <div className="container mx-auto mb-20">

          <Card className="border-none shadow-none rounded-none p-0">
            <CardContent className="p-0">
              <div className="space-y-6">
                {aboutAiccees.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-lg text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Keynote Speakers */}
        <div className="mb-20">
          <SpeakersSection />
        </div>

        {/* Scientific Committee */}
        <div className="mb-20">
          <ScientificCommittee />
        </div>

        {/* Conference Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Conference Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto rounded-full"></div>
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

        {/* Conference Chairs */}
        <div className="mb-20">
          <ConferenceChairs />
        </div>

        {/* Organizing Committee */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Organizing Committee
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left side - Background Image */}
            <div className="flex-1 relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat" 
                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-800/60 to-red-800/60"></div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1">
              <Card className="border-green-200 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Network className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-green-700 mb-3">
                        Logistics
                      </h3>
                      <ul className="space-y-2">
                        <li className="font-medium">John Davis</li>
                        <li className="font-medium">Maria Garcia</li>
                      </ul>
                    </div>
                    <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-red-700 mb-3">
                        Technical
                      </h3>
                      <ul className="space-y-2">
                        <li className="font-medium">David Kim</li>
                        <li className="font-medium">Lisa Wong</li>
                      </ul>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-green-700 mb-3">
                        Publicity
                      </h3>
                      <ul className="space-y-2">
                        <li className="font-medium">Emma Thompson</li>
                        <li className="font-medium">James Wilson</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Previous Conferences */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Previous Conferences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200">
                <CardTitle className="text-2xl text-red-700 flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  AICCEES 2024
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The 2024 edition of AICCEES was held in San Francisco, CA,
                    with over 500 participants from 30 countries. The conference
                    featured 12 keynote sessions and 45 technical paper
                    presentations across three parallel tracks.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Highlights included the workshop on Quantum Computing
                    Applications and the panel discussion on Sustainable
                    Electronics Manufacturing.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-red-100 text-red-700 border-red-300">
                      500+ Participants
                    </Badge>
                    <Badge className="bg-red-100 text-red-700 border-red-300">
                      30 Countries
                    </Badge>
                    <Badge className="bg-red-100 text-red-700 border-red-300">
                      45 Technical Papers
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
                <CardTitle className="text-2xl text-green-700 flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  AICCEES 2023
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    AICCEES 2023 took place in Berlin, Germany, marking our
                    first European venue. With 420 attendees, the conference
                    focused on AI Ethics, Renewable Energy Systems, and
                    Next-Generation Computing Architectures.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The 2023 conference introduced the Student Innovation
                    Challenge, which received 78 submissions from universities
                    worldwide.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      420 Attendees
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      First European Venue
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      78 Student Submissions
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <ConferenceCallToAction />
      </div>
    </div>
  );
}
