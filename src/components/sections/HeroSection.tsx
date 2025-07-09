"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import herobg0 from '@/public/images/herobg0.jpg'
import herobg1 from '@/public/images/herobg1.jpg'
import herobg2 from '@/public/images/herobg2.jpg'
import herobg3 from '@/public/images/herobg3.jpg'
import herobg4 from '@/public/images/herobg4.jpg'
import herobg5 from '@/public/images/herobg5.jpg'
import herobg6 from '@/public/images/herobg6.jpg'
import herobg7 from '@/public/images/herobg7.jpg'
import Link from 'next/link'
import { registrationLink } from '../data_models/conferences'
import { Clock } from 'lucide-react'

const BACKGROUND_IMAGES = [
  herobg0,
  herobg1,
  herobg2,
  herobg3,
  herobg4,
  herobg5,
  herobg6,
  herobg7,
]

function CountdownTimer() {
  const targetDate = new Date('2025-09-25T00:00:00Z').getTime()
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  if (timeLeft <= 0) return <span className="text-2xl font-bold text-red-600">Conference is Live!</span>

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <div className="flex items-center justify-center gap-2 text-white text-lg md:text-2xl font-semibold bg-black/40 rounded-lg px-4 py-2 shadow-lg">
      <span className="flex items-center gap-1">
        <Clock className="text-yellow-400 mr-1" />
       <span className="text-white hidden sm:block">Days left:</span>
      </span>
      <span>{days}days</span>:
      <span>{hours}h</span>:
      <span>{minutes}m</span>:
      <span>{seconds}s</span>
    </div>
  )
}

function SponsorshipSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-6 sm:py-8 text-center">
      <div className="mx-auto w-full bg-black/70  p-4 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">Research Paper Presentation Sponsorship</h2>
        </div>
        <p className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 font-semibold drop-shadow">
          <span className="font-semibold text-green-200">AICCEES 2025</span> is offering sponsorship support for selected high-impact full papers that address <span className="font-semibold">Africa&apos;s energy access challenges</span>!
        </p>
        <div className="hidden lg:flex flex-row items-center gap-20 max-w-4xl w-full mx-auto justify-between mb-4 sm:mb-6 mt-10">
          <div className="flex-1 mb-4 lg:mb-0">
            <h3 className="text-base text-left sm:text-lg md:text-2xl font-bold text-green-400 mb-2 drop-shadow">Who Can Apply?</h3>
            <ul className="text-left text-white list-disc list-inside space-y-1 text-sm sm:text-base md:text-lg">
              <li>Researchers (especially early-career) whose full papers:</li>
              <ul className="ml-4 sm:ml-6 list-[circle]">
                <li>Align with the conference theme</li>
                <li>Offer innovative, practical solutions</li>
                <li>Address real-world clean energy challenges in Africa</li>
              </ul>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-base text-left sm:text-lg md:text-2xl font-bold text-green-400 mb-2 drop-shadow">What the Sponsorship Covers</h3>
            <ul className="text-left text-white list-disc list-inside space-y-1 text-sm sm:text-base md:text-lg">
              <li>Conference Registration</li>
              <li>Travel Support</li>
              <li>Accommodation</li>
              <li>Presentation Slot</li>
            </ul>
            {/* <p className="text-xs sm:text-sm text-gray-200 mt-2">* Only full papers (not abstracts) will be reviewed.</p> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-white font-semibold bg-red-600/90 px-3 sm:px-4 py-2 rounded-lg shadow mb-2 sm:mb-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
              <span>Submission Deadline:</span>
              <span className="font-bold text-white">31st July 2025</span>
            </span>
            <a
              href="https://bit.ly/25CFRP3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-base sm:text-lg shadow border-2 border-green-700"
            >
              Apply here
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm sm:text-base text-white/90 italic flex-wrap justify-center">
            <span>For inquiries, contact us via email:</span>
            <a href="mailto:aiccees@uniport.edu.ng" className="text-green-200 underline font-semibold flex items-center gap-1">
              aiccees@uniport.edu.ng
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1)

  // Auto-slide between hero and sponsorship every 20s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0))
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full relative h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Carousel (always visible) */}
      <div className="absolute inset-0 z-[1]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {BACKGROUND_IMAGES.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Gradient Overlay (always visible) */}
      <div className="absolute z-[2] inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90 transition-all duration-700" />
      {/* Slides (content only) */}
      <div className="relative z-[3] container mx-auto h-full px-2 sm:px-4 flex items-center justify-center">
        <div className={`w-full transition-transform duration-700 ${activeSlide === 0 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} absolute left-0 top-0 h-full flex flex-col items-center justify-center space-y-4 text-center pointer-events-${activeSlide === 0 ? 'auto' : 'none'}`}> 
          <div className="relative z-[3] container mx-auto h-full px-4 md:px-6 flex items-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Africa International Conference on Clean Energy & Energy Storage
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Empowering Africa&apos;s Future Through Clean Energy Innovation and Sustainable Storage Solutions
                </p>
              </div>
              <div className="space-x-4 !mb-10">
                <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                  <Link target="_blank" href={registrationLink}>Register Now</Link>
                </Button>
                <Button
                  onClick={() => {
                    document.getElementById('submissions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  className="!text-green-700 border-white hover:bg-green-700 hover:!text-white hover:border-green-700"
                >
                  Submit Paper
                </Button>
              </div>
              <CountdownTimer />
            </div>
          </div>
        </div>
        <div className={`w-full transition-transform duration-700 ${activeSlide === 1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} absolute left-0 top-0 h-full flex flex-col items-center justify-center pointer-events-${activeSlide === 1 ? 'auto' : 'none'}`}> 
          <SponsorshipSection />
        </div>
        {/* Manual navigation dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-4 h-4 rounded-full border-2 ${activeSlide === idx ? 'bg-green-700 border-green-700' : 'bg-white border-gray-400'} transition-all duration-300`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 