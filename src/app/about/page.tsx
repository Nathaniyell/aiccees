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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <AboutHero />

      <div className="py-16">
        {/* Animated Statistics */}
        <AboutStats />

        {/* Conference Overview */}
        <AboutOverview />

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
