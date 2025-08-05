"use client";

import React from "react";
import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Download, 
  Lightbulb,
  Handshake,
  BookOpen,
  Award,
  Globe
} from "lucide-react";
import AOS from "@/components/layout/AOS";

export default function ConferenceProgramPage() {
  const conferencePrograms = [
    {
      id: 1,
      title: "GECCO Roundtable",
      description: "Join industry leaders and experts for an engaging roundtable discussion on the latest developments in clean energy and energy storage technologies. This session will feature interactive discussions on policy frameworks, technological innovations, and market opportunities.",
      time: "09:00 - 11:00",
      date: "September 25, 2025",
      location: "Main Conference Hall",
      type: "Roundtable",
      icon: Globe,
      color: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200",
      participants: "Industry Leaders & Experts",
      highlights: ["Policy Discussions", "Technology Innovation", "Market Opportunities", "Interactive Q&A"]
    },
    {
      id: 2,
      title: "Business Mentorship Session",
      description: "Connect with experienced business leaders and entrepreneurs in the clean energy sector. This session provides valuable insights on business development, funding opportunities, and strategic planning for energy startups and established companies.",
      time: "11:30 - 13:00",
      date: "September 25, 2025",
      location: "Business Center",
      type: "Mentorship",
      icon: Handshake,
      color: "bg-green-100 text-green-700",
      borderColor: "border-green-200",
      participants: "Entrepreneurs & Business Leaders",
      highlights: ["One-on-One Mentoring", "Business Strategy", "Funding Guidance", "Network Building"]
    },
    {
      id: 3,
      title: "Paper Presentations",
      description: "Explore cutting-edge research and innovations through academic paper presentations. Researchers and scholars will present their latest findings in clean energy technologies, energy storage solutions, and sustainable development practices.",
      time: "14:00 - 17:00",
      date: "September 25-26, 2025",
      location: "Research Halls A & B",
      type: "Academic",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-700",
      borderColor: "border-purple-200",
      participants: "Researchers & Scholars",
      highlights: ["Research Presentations", "Technical Discussions", "Poster Sessions", "Peer Review"]
    }
  ];

  const additionalSessions = [
    {
      title: "Keynote Addresses",
      description: "Inspiring talks from distinguished speakers and industry pioneers",
      icon: Award,
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      title: "Panel Discussions",
      description: "Expert panels on emerging trends and challenges in clean energy",
      icon: Users,
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      title: "Workshop Sessions",
      description: "Hands-on workshops on practical applications and technologies",
      icon: Lightbulb,
      color: "bg-orange-100 text-orange-700"
    },
    {
      title: "Networking Events",
      description: "Opportunities to connect with peers and industry professionals",
      icon: Handshake,
      color: "bg-teal-100 text-teal-700"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="h-12 w-12 text-yellow-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Conference Program
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Discover the comprehensive agenda for AICCEES 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>September 25-26, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <AOS>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Conference Highlights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                AICCEES 2025 brings together leading experts, researchers, and industry professionals 
                for two days of intensive learning, networking, and collaboration in clean energy and energy storage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {additionalSessions.map((session, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${session.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <session.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{session.title}</h3>
                    <p className="text-sm text-gray-600">{session.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AOS>

      {/* Main Program Sessions */}
      <AOS>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Featured Program Sessions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the key sessions that will shape the future of clean energy and energy storage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {conferencePrograms.map((program) => (
                <Card key={program.id} className={`group hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border-0 shadow overflow-hidden ${program.borderColor.replace('border-', '')}`}>
                  {/* Header with Icon */}
                 

                  {/* Content */}
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm mb-4">
                        {program.description}
                      </p>
                    </div>

                    {/* Program Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span>{program.date}</span>
                      </div>
                     
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-green-600" />
                        <span>{program.participants}</span>
                      </div>
                    </div>

                    {/* Session Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Session Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, highlightIndex) => (
                          <Badge key={highlightIndex} variant="outline" className="text-xs border-green-200 text-green-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info Cards */}
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSessions.map((session, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${session.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <session.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{session.title}</h3>
                    <p className="text-sm text-gray-600">{session.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AOS>

      {/* Download Full Program */}
      <AOS>
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <Download className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                  Download Complete Conference Program
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get the full detailed schedule, including all sessions, workshops, networking events, 
                  and special activities planned for AICCEES 2025.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Complete session schedule</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Speaker biographies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Workshop details</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Networking event schedule</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Venue maps and directions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Poster presentation details</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Social events information</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Contact information</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Download className="w-6 h-6 mr-2" />
                  Download Full Conference Program (PDF)
                </a>
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                * The complete program will be available for download closer to the conference date
              </p>
            </div>
          </div>
        </section>
      </AOS>

      {/* Call to Action */}
      <AOS>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Ready to Join AICCEES 2025?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Don&apos;t miss this opportunity to connect with industry leaders, learn from experts, 
                and contribute to the future of clean energy and energy storage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <a href="/registration">
                    <Users className="w-5 h-5 mr-2" />
                    Register for Conference
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <a href="/keynote-speakers">
                    <Award className="w-5 h-5 mr-2" />
                    Meet Our Speakers
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AOS>
    </div>
  );
} 