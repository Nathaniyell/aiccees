"use client"
import { HeroSection } from '@/components/sections/HeroSection'
import { SpeakersSection } from '@/components/sections/SpeakersSection'
import AboutUs from '@/components/sections/AboutUs'
import ConferenceThemes from '@/components/sections/ConferenceThemes'
import PublishingPapers from '@/components/sections/PublishingPapers'
import Sponsors from '@/components/sections/Sponsors'
import Submissions from '@/components/sections/Submissions'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialCarousel from '@/components/sections/testimonials'
import ConferenceCallToAction from '@/components/call-to-action'
import ScientificCommittee from '@/components/sections/scientific-committee'
import CookingDemonstration from '@/components/sections/CookingDemonstration'
import ConferenceChairs from '@/components/sections/conference-chairs'
import Participation from '@/components/sections/participation'



export default function ConferencePage() {
  return (

    <main className="flex-1">
      <HeroSection />
      <AboutUs />
      <div className="flex justify-center items-center">
        <ConferenceCallToAction />
      </div>
      <Submissions />
      <ConferenceThemes />
      <SpeakersSection />
      <div className="flex justify-center items-center">
        <ConferenceCallToAction />
      </div>
      <ConferenceChairs />
      <ScientificCommittee />
      <PublishingPapers />
      <Participation />
      <div className="flex justify-center items-center">
        <ConferenceCallToAction />
      </div>
      <GallerySection />
      <CookingDemonstration />
      <Sponsors />
      <TestimonialCarousel />
      <div className="lg:px-16 flex justify-center items-center">
        <ConferenceCallToAction />
      </div>
    </main>


  )
}
