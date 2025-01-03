"use client"
// import { Header } from '@/components/layout/Header'
// import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SpeakersSection } from '@/components/sections/SpeakersSection'
import AboutUs from '@/components/sections/AboutUs'
import ConferenceThemes from '@/components/sections/ConferenceThemes'
import PublishingPapers from '@/components/sections/PublishingPapers'
import Sponsors from '@/components/sections/Sponsors'
import Submissions from '@/components/sections/Submissions'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialCarousel from '@/components/sections/testimonails'



export default function ConferencePage() {
  return (

    <main className="flex-1">
      <HeroSection />
      <AboutUs />
      <ConferenceThemes />
      <SpeakersSection />
      <PublishingPapers />
      <Submissions />
      <Sponsors />
      <GallerySection />
      <TestimonialCarousel />
    </main>


  )
}
