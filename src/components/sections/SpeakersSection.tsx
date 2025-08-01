"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

import profFoluwake from "@/public/images/keynote_speakers/Foluke_Ishola.jpg"
import profSokona from "@/public/images/keynote_speakers/sokono.jpg"
import emeka from "@/public/images/keynote_speakers/emeka.jpg"
import robinah from "@/public/images/keynote_speakers/robinah.jpeg"
import amina from "@/public/images/keynote_speakers/amina.jpeg"
import Ioannis from "@/public/images/keynote_speakers/Ioannis.jpeg"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AOS from '../layout/AOS'

const SPEAKERS = [
    {
        name: "Professor Youba Sokona",
        role: "Climate Change Expert",
        status: "current",
        image: profSokona,
        bio: "Prof. Sokona, with over 40 years of experience addressing energy, environment, and sustainable development in Africa, has been at the heart of numerous national and continental initiatives. He was a Vice-Chair of the Intergovernmental Panel on Climate Change (IPCC) Sixth Assessment Report, after serving as Co-Chair of IPCC Working Group III for the Fifth Assessment Report, and has been a Lead Author since 1990. He has a proven track record of organizational leadership and management, including as the Inaugural Coordinator of the African Climate Policy Centre and as Executive Secretary of the Sahara and the Sahel Observatory.",
        bio2: "Prof. Sokona is affiliated with numerous boards and organizations. He is, among others, an Honorary Professor at University College London, a member of The World Academy of Sciences, the African Academy of Sciences, the International Council of Science, an Associate Member of the National Academy of Sciences and Technology of Senegal, and an Honorary Member of the Academy of Sciences of Mali. In short, Prof. Sokona is a global figure with deep technical knowledge, extensive policy experience, and an unwavering personal commitment to African-led development."
    },
    {
        name: "Professor Foluke Ishola",
        role: "Sustainability and Bioenergy Expert",
        status: "current",
        image: profFoluwake,
        bio: "Mofoluwake Ishola, a distinguished Chemical Engineer, graduated from Ladoke Akintola University of Technology in 2002 and earned her M.Sc. with Distinction from Obafemi Awolowo University in 2008. She completed her PhD at the University of Borås, Sweden, in record time, focusing on biofuel ethanol production from lignocellulosic feedstocks. Her postdoctoral research was conducted at Chalmers University. Her expertise spans bioenergy, waste management, biofuels, and environmental sustainability. Mofoluwake has served as a university lecturer, environmental engineer, and journal reviewer, supervising numerous postgraduate students and authoring around thirty academic publications. She has received multiple scholarships and grants, including the Carnegie Scholarship (UK) and Fredrika Bremer Scholarship (Sweden). Currently, she is the Sustainability Ambassador and Senior R&D Engineer at Scanacon AB, Sweden, and a Visiting Professor at Ajayi Crowther University, Nigeria. She is affiliated with various professional engineering societies in Nigeria and Sweden.",
    },
    {
        name: "Hon. (Prof) Robinah K. Nanyunja",
        role: "Development Expert & Environmentalist",
        status: "previous",
        image: robinah,
        bio: "Hon. (Prof) Robinah K. Nanyunja is an internationally recognized development expert and environmentalist, honored as an Honorary Professor by the Academic Union of the University of Oxford. She is the Founder and Chairman of Pilot International, a social enterprise based in Uganda that fosters sustainable development in over 100 countries. Prof. Nanyunja’s work spans environmentalism, entrepreneurship, international development, and corporate governance. She has played a pivotal role in building business chambers, forming global partnerships, and facilitating investment in Africa and beyond. Additionally, she is the host of the upcoming Trans Africa Investment Summit, which will bring together entrepreneurs and investors from across the continent and the Diaspora.",
        bio2: "With a profound career spanning environmentalism, entrepreneurship, international development, and corporate governance, Prof. Nanyunja has been instrumental in building business chambers, forming global partnerships, and driving investment throughout Africa and beyond. She also leads the upcoming Trans Africa Investment Summit, connecting entrepreneurs and investors across the continent and the diaspora.",

    },
    {
        name: "Professor Emeka Oguzie",
        image: emeka,
        status: "previous",
        role: "Physical Chemistry & Electrochemistry Expert",
        bio: "Emeka Oguzie is a Professor of Physical Chemistry at the Federal University of Technology Owerri (FUTO). He earned his Ph.D. in Physical Chemistry from the University of Calabar. He has held significant research positions, including being a visiting post-doctoral research fellow at the State Key Laboratory for Corrosion and Protection in China and a TWAS-UNESCO Associate. Prof. Oguzie is recognized as a Young Affiliate of TWAS, a Fellow of the OPEC Fund for International Development (OFID), and serves as Nigeria's Battery Ambassador for the Faraday Institution in the UK. His research focuses on Electrochemistry/Electrochemical Technology and Environmental & Occupational Hazards Management, with his research group known as the Electrochemistry & Materials Science Research Unit (EMRU-FUTO).",

    },
    {
        name: "Professor Amina Lawal Batagarawa",
        image: amina,
        status: "previous",
        role: "Sustainable Built Environment Specialist",
        bio: "Amina Lawal Batagarawa is a distinguished specialist in Sustainable Built Environment with over 12 years of experience in Nigeria's educational sector. She holds a Doctor of Philosophy in Architecture from Newcastle University, a Masters of Science in Environmental Design of Buildings from Cardiff University, and a Bachelor's of Science in Architecture from Ahmadu Bello University. Her educational qualifications and extensive experience highlight her expertise in the field.",
        bio2: "Currently, Amina serves as an Associate Professor of Architecture at Baze University in Abuja. She has previously held positions at Ahmadu Bello University and Applied Science University in Bahrain. Her leadership extends to roles in various organizations, including the World Renewable Energy Network and the Women in Renewable Energy Association of Nigeria. Beyond her professional achievements, Amina is a dedicated strategist, presenter, and mentor, actively involved in several organizations such as Muslimah Foundation and the ASTEVEN Energy Institute.",

    },
    {
        name: "Professor Ioannis Tsipouridis",
        image: Ioannis,
        status: "current",
        role: "Renewable Energy Expert",
        bio: "Professor Ioannis Tsipouridis is a distinguished expert in renewable energy with over 45 years of experience. He holds a B.Sc. in Chemical Engineering, an M.Sc. in Fuel and Energy, and a Ph.D. in Solar Energy from the University of Leeds. Throughout his career, he has been a key advocate for decarbonizing the global energy system and advancing renewable energy deployment. As CEO of Public Power Corporation Renewables in Greece, he expanded the company’s project pipeline from 600 MW to 4,200 MW, leading initiatives in wind, solar, geothermal, and biomass energy during a period of national financial crisis. He also held leadership roles as Vice Chairman of the European Wind Energy Association and Chairman of the Hellenic Wind Energy Association. His advocacy has extended to global platforms, including COP21 in Paris and subsequent climate conferences, where he called for accelerated climate action.",
        bio2: "Currently, Professor Tsipouridis directs the Renewable Energy & Climate Change Research Center at the Technical University of Mombasa and is a Visiting Professor and Technical Advisor at Meru University of Science and Technology in Kenya. He is deeply involved in promoting renewable energy in Sub-Saharan Africa through his consultancy, RED PRO Climate & Energy Consultants Ltd., and his leadership in organizations like the Loss & Damage Collaboration Group and the Fossil Fuel Non-Proliferation Treaty. An active voice in the climate movement, he also runs the e-mc2.gr platform to raise awareness of climate issues. His contributions to the field have earned him multiple awards, including the AIOLOS Prize for his work in wind energy and the Greek Green Award for lifetime achievement. He continues to mentor African students and contribute to the global dialogue on clean energy and sustainability.",

    },
]

export function SpeakersSection() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({})

  const toggleCard = (speakerName: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [speakerName]: !prev[speakerName]
    }))
  }

  return (
    <AOS>
      <section id="speakers" className="w-full py-12 md:py-24 bg-gradient-to-b from-green-700 to-green-900">
        <div className="container md:w-11/12 mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-white">Keynote Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker) => (
              <Card
                key={speaker.name}
                className="bg-white border-green-200 hover:shadow-xl transition-transform duration-300 transform hover:scale-[1.02]"
              >
                <CardHeader className="relative">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={300}
                    height={300}
                    className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                  />
                  <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-semibold ${
                    speaker.status === "current" ? "bg-green-600 text-white" : "bg-yellow-500 text-white"
                  }`}>
                    {speaker.status === "current" ? "2025 Speaker" : "2024 Speaker"}
                  </span>
                  <CardTitle className="text-green-700 text-center">{speaker.name}</CardTitle>
                  <CardDescription className="text-red-600 font-semibold text-center">{speaker.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">
                    {expandedCards[speaker.name]
                      ? speaker.bio
                      : speaker.bio.slice(0, 200) + '...'}
                  </p>
                  {expandedCards[speaker.name] && speaker.bio2 && (
                    <p className="text-sm text-gray-600">{speaker.bio2}</p>
                  )}
                  <Button
                    variant="outline"
                    className="mt-2 text-green-600 hover:text-green-700 w-full"
                    onClick={() => toggleCard(speaker.name)}
                  >
                    {expandedCards[speaker.name] ? 'Read Less' : 'Read More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center flex items-center justify-center gap-6 flex-col sm:flex-row text-white bg-[rgba(0,0,0,0.3)] p-4 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold">Want to be a Keynote Speaker?</h3>
            <p>
              Reach out to us at{" "}
              <Link href="mailto:aiccees@uniport.edu.ng" className="font-medium underline">
                aiccees@uniport.edu.ng
              </Link>
            </p>
          </div>
        </div>
      </section>
    </AOS>
  )
}
