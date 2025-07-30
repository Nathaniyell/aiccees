"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function PreviousConferences() {
  return (
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
  );
} 