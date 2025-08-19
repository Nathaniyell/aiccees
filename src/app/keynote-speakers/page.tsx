"use client";

import KeynoteSpeakersHero from "@/components/keynote-speakers/KeynoteSpeakersHero";
import RegistrationCTA from "@/components/keynote-speakers/RegistrationCTA";
import SpeakersHeader from "@/components/keynote-speakers/SpeakersHeader";
import SpeakersTabs from "@/components/keynote-speakers/SpeakersTabs";
import CallToAction from "@/components/keynote-speakers/CallToAction";

export default function KeynoteSpeakersPage() {
  return (
    <div className="min-h-screen">
      {/* Fixed Hero Section - won't re-render when tabs change */}
      <KeynoteSpeakersHero />
      
      {/* Fixed Registration CTA Section - won't re-render when tabs change */}
      <RegistrationCTA />
      
      {/* Fixed Speakers Header Section - won't re-render when tabs change */}
      <SpeakersHeader />
      
      {/* State-dependent content - only the tabs and speaker cards */}
      <SpeakersTabs />
      
      {/* Fixed Call to Action Section - won't re-render when tabs change */}
      <CallToAction />
    </div>
  );
} 