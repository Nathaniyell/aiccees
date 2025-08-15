"use client";

import ConferenceCallToAction from "@/components/call-to-action";
import ConferenceChairs from "@/components/sections/conference-chairs";
import ScientificCommittee from "@/components/sections/scientific-committee";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import AboutHero from "@/components/sections/AboutHero";
import AboutStats from "@/components/sections/AboutStats";
import AboutOverview from "@/components/sections/AboutOverview";
import ConferenceHighlights from "@/components/sections/ConferenceHighlights";
import OrganizingCommittee from "@/components/sections/OrganizingCommittee";
import PreviousConferences from "@/components/sections/PreviousConferences";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Table, TableCell, TableRow, TableBody, TableHead, TableHeader } from "@/components/ui/table";
import { participationTypes } from "@/components/data_models/about-aiccees";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function AboutPage() {
  const [showNGN, setShowNGN] = useState(false)
 

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <AboutHero />

      <div className="py-16">
        {/* Animated Statistics */}
        <AboutStats />

        {/* Conference Overview */}
        <AboutOverview />

        {/* Conference Fees */}
        <div className="mb-20 max-w-7xl mx-auto px-6 py-20 space-y-20">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#AA0000]">About AICCEES 2025</h1>
          <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Participation at AICCEES 2025 will be open to all virtually and physically, however this will come with a determined fee.
            Participants can publish a paper, present a paper, or be audience members. Certificate of participation will be given to all paid conference participants.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Label htmlFor="currency">Show prices in NGN</Label>
            <Switch
              id="currency"
              checked={showNGN}
              onCheckedChange={setShowNGN}
            />
          </div>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className='text-green-900'>Conference Participation Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%] text-black">CATEGORY</TableHead>
                  <TableHead className="text-black">PHYSICAL</TableHead>
                  <TableHead className="text-black">VIRTUAL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {participationTypes.map((type) => (
                  <TableRow key={type.category}>
                    <TableCell className="font-medium text-lg">{type.category}</TableCell>
                    <TableCell>
                      {formatPrice(type.physical.regular, type.category.includes('Open Access'), showNGN)}
                      {type.physical.student && (
                        <div className="text-sm text-gray-500">
                          Students: ₦{type.physical.student.toLocaleString()}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {formatPrice(type.virtual.regular, type.category.includes('Open Access'), showNGN)}
                      {type.virtual.student && (
                        <div className="text-sm text-gray-500">
                          Students: ₦{type.virtual.student.toLocaleString()}
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
        <ConferenceHighlights />

        {/* Conference Chairs */}
        <div className="mb-20">
          <ConferenceChairs />
        </div>

        {/* Organizing Committee */}
        <OrganizingCommittee />

        {/* Previous Conferences */}
        <PreviousConferences />

        <ConferenceCallToAction />
      </div>
    </div>
  );
}
