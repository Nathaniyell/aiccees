"use client"
// import { Header } from '@/components/layout/Header'
// import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SpeakersSection } from '@/components/sections/SpeakersSection'
import AboutUs from '@/components/sections/AboutUs'
import ConferenceThemes from '@/components/sections/ConferenceThemes'
import PublishingPapers from '@/components/sections/PublishingPapers'
import CookingDemonstration from '@/components/sections/CookingDemonstration'
import PresentConference from '@/components/sections/PresentConference'
import Sponsors from '@/components/sections/Sponsors'
import Submissions from '@/components/sections/Submissions'
import ConferenceStats from '@/components/sections/ConferenceStats'


export default function ConferencePage() {
  return (
 
      <main className="flex-1">
        <HeroSection />
        <AboutUs />
        <ConferenceStats />
        <ConferenceThemes />
        <SpeakersSection />
        <PublishingPapers />
        <Submissions />
        <CookingDemonstration />
        <PresentConference />
        <Sponsors />
      </main>
    

  )
}
