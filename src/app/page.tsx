"use client"
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SpeakersSection } from '@/components/sections/SpeakersSection'
import AboutUs from '@/components/sections/AboutUs'
import ConferenceThemes from '@/components/sections/ConferenceThemes'
import PublishingPapers from '@/components/sections/PublishingPapers'
import CookingDemonstration from '@/components/sections/CookingDemonstration'
import PresentConference from '@/components/sections/PresentConference'
import Sponsors from '@/components/sections/Sponsors'
import Submissions from '@/components/sections/Submissions'


export default function ConferencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutUs />
        <SpeakersSection />
        <ConferenceThemes />
        <PublishingPapers />
        <Submissions />
        <CookingDemonstration />
        <PresentConference />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}
