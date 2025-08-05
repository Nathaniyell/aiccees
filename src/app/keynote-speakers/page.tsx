"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Linkedin, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users,
  Award,
  Globe,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import AOS from "@/components/layout/AOS";
import Image from "next/image";

export default function KeynoteSpeakersPage() {
  const [activeTab, setActiveTab] = useState("2025");
  const [expandedSpeakers, setExpandedSpeakers] = useState<{[key: string]: boolean}>({});

  // Registration form URL for keynote speakers
  const keynoteSpeakerRegistrationUrl = "https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRUOVcxSTRVUVhNT0NUMTlFOFdWSExPWEVQVy4u&origin=lprLink&route=shorturl";

  // Mock data for 2024 speakers (you can replace with actual data)
  const keynoteSpeakers2025 = [
    {
      name: "Professor Yacob Mulugetta",
      picture: "/images/keynote_speakers/amina.jpeg", // Using existing image as placeholder
      description: "Professor Yacob Mulugetta is a leading expert in renewable energy policy and sustainable development. With over 15 years of experience in the energy sector, she has advised governments and organizations across Africa on clean energy transitions.",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      topics: ["Renewable Energy Policy", "Sustainable Development", "Energy Transitions"]
    },
    {
      name: "Professor Eletta",
      picture: "/images/keynote_speakers/emeka.jpg", // Using existing image as placeholder
      description: "Professor Eletta is a distinguished researcher in energy storage technologies and grid integration. His work focuses on developing innovative solutions for energy storage and smart grid systems.",
      linkedin: "https://linkedin.com/in/michael-chen",
      topics: ["Energy Storage", "Smart Grids", "Grid Integration"]
    }
  ];

  // Updated keynoteSpeakerData with correct image paths
  const keynoteSpeakers2024 = [
    {
      name: "Professor Youba Sokona",
      picture: "/images/keynote_speakers/sokono.jpg",
      description1: "Prof. Sokona, with over 40 years of experience addressing energy, environment, and sustainable development in Africa, has been at the heart of numerous national and continental initiatives. He was a Vice-Chair of the Intergovernmental Panel on Climate Change (IPCC) Sixth Assessment Report, after serving as Co-Chair of IPCC Working Group III for the Fifth Assessment Report, and has been a Lead Author since 1990. He has a proven track record of organizational leadership and management, including as the Inaugural Coordinator of the African Climate Policy Centre and as Executive Secretary of the Sahara and the Sahel Observatory.",
      description2: "Prof. Sokona is affiliated with numerous boards and organizations. He is, among others, an Honorary Professor at University College London, a member of The World Academy of Sciences, the African Academy of Sciences, the International Council of Science, an Associate Member of the National Academy of Sciences and Technology of Senegal, and an Honorary Member of the Academy of Sciences of Mali. In short, Prof. Sokona is a global figure with deep technical knowledge, extensive policy experience, and an unwavering personal commitment to African-led development."
    },
    {
      name: "Professor Foluke Ishola",
      picture: "/images/keynote_speakers/Foluke_Ishola.jpg",
      description1: "Mofoluwake Ishola, a distinguished Chemical Engineer, graduated from Ladoke Akintola University of Technology in 2002 and earned her M.Sc. with Distinction from Obafemi Awolowo University in 2008. She completed her PhD at the University of Borås, Sweden, in record time, focusing on biofuel ethanol production from lignocellulosic feedstocks. Her postdoctoral research was conducted at Chalmers University. Her expertise spans bioenergy, waste management, biofuels, and environmental sustainability. Mofoluwake has served as a university lecturer, environmental engineer, and journal reviewer, supervising numerous postgraduate students and authoring around thirty academic publications. She has received multiple scholarships and grants, including the Carnegie Scholarship (UK) and Fredrika Bremer Scholarship (Sweden). Currently, she is the Sustainability Ambassador and Senior R&D Engineer at Scanacon AB, Sweden, and a Visiting Professor at Ajayi Crowther University, Nigeria. She is affiliated with various professional engineering societies in Nigeria and Sweden."
    },
    {
      name: "Hon. (Prof) Robinah K. Nanyunja",
      picture: "/images/keynote_speakers/robinah.jpeg",
      description1: "Hon. (Prof) Robinah K. Nanyunja is an internationally recognized development expert and environmentalist, honored as an Honorary Professor by the Academic Union of the University of Oxford. She is the Founder and Chairman of Pilot International, a social enterprise based in Uganda that fosters sustainable development in over 100 countries. Prof. Nanyunja's work spans environmentalism, entrepreneurship, international development, and corporate governance. She has played a pivotal role in building business chambers, forming global partnerships, and facilitating investment in Africa and beyond. Additionally, she is the host of the upcoming Trans Africa Investment Summit, which will bring together entrepreneurs and investors from across the continent and the Diaspora.",
      description2: "With a profound career spanning environmentalism, entrepreneurship, international development, and corporate governance, Prof. Nanyunja has been instrumental in building business chambers, forming global partnerships, and driving investment throughout Africa and beyond. She also leads the upcoming Trans Africa Investment Summit, connecting entrepreneurs and investors across the continent and the diaspora."
    },
    {
      name: "Professor Emeka Oguzie",
      picture: "/images/keynote_speakers/emeka.jpg",
      description1: "Emeka Oguzie is a Professor of Physical Chemistry at the Federal University of Technology Owerri (FUTO). He earned his Ph.D. in Physical Chemistry from the University of Calabar. He has held significant research positions, including being a visiting post-doctoral research fellow at the State Key Laboratory for Corrosion and Protection in China and a TWAS-UNESCO Associate. Prof. Oguzie is recognized as a Young Affiliate of TWAS, a Fellow of the OPEC Fund for International Development (OFID), and serves as Nigeria's Battery Ambassador for the Faraday Institution in the UK. His research focuses on Electrochemistry/Electrochemical Technology and Environmental & Occupational Hazards Management, with his research group known as the Electrochemistry & Materials Science Research Unit (EMRU-FUTO)."
    },
    {
      name: "Professor Amina Lawal Batagarawa",
      picture: "/images/keynote_speakers/amina.jpeg",
      description1: "Amina Lawal Batagarawa is a distinguished specialist in Sustainable Built Environment with over 12 years of experience in Nigeria's educational sector. She holds a Doctor of Philosophy in Architecture from Newcastle University, a Masters of Science in Environmental Design of Buildings from Cardiff University, and a Bachelor's of Science in Architecture from Ahmadu Bello University. Her educational qualifications and extensive experience highlight her expertise in the field.",
      description2: "Currently, Amina serves as an Associate Professor of Architecture at Baze University in Abuja. She has previously held positions at Ahmadu Bello University and Applied Science University in Bahrain. Her leadership extends to roles in various organizations, including the World Renewable Energy Network and the Women in Renewable Energy Association of Nigeria. Beyond her professional achievements, Amina is a dedicated strategist, presenter, and mentor, actively involved in several organizations such as Muslimah Foundation and the ASTEVEN Energy Institute."
    },
    {
      name: "Professor Ioannis Tsipouridis",
      picture: "/images/keynote_speakers/Ioannis.jpeg",
      description1: "Professor Ioannis Tsipouridis is a distinguished expert in renewable energy with over 45 years of experience. He holds a B.Sc. in Chemical Engineering, an M.Sc. in Fuel and Energy, and a Ph.D. in Solar Energy from the University of Leeds. Throughout his career, he has been a key advocate for decarbonizing the global energy system and advancing renewable energy deployment. As CEO of Public Power Corporation Renewables in Greece, he expanded the company's project pipeline from 600 MW to 4,200 MW, leading initiatives in wind, solar, geothermal, and biomass energy during a period of national financial crisis. He also held leadership roles as Vice Chairman of the European Wind Energy Association and Chairman of the Hellenic Wind Energy Association. His advocacy has extended to global platforms, including COP21 in Paris and subsequent climate conferences, where he called for accelerated climate action.",
      description2: "Currently, Professor Tsipouridis directs the Renewable Energy & Climate Change Research Center at the Technical University of Mombasa and is a Visiting Professor and Technical Advisor at Meru University of Science and Technology in Kenya. He is deeply involved in promoting renewable energy in Sub-Saharan Africa through his consultancy, RED PRO Climate & Energy Consultants Ltd., and his leadership in organizations like the Loss & Damage Collaboration Group and the Fossil Fuel Non-Proliferation Treaty. An active voice in the climate movement, he also runs the e-mc2.gr platform to raise awareness of climate issues. His contributions to the field have earned him multiple awards, including the AIOLOS Prize for his work in wind energy and the Greek Green Award for lifetime achievement. He continues to mentor African students and contribute to the global dialogue on clean energy and sustainability."
    }
  ];

  // Mock data for 2023 speakers (expanding on existing data)
  const keynoteSpeakers2023Expanded = [
    {
      name: "Professor Yacob Mulugetta",
      picture: "/images/keynote_speakers/sokono.jpg", // Using existing image as placeholder
      description: "Professor Yacob Mulugetta is a renowned energy and development expert with extensive experience in African energy systems. He has been instrumental in shaping energy policies across the continent.",
      linkedin: "https://linkedin.com/in/yacob-mulugetta",
      topics: ["African Energy Future", "Energy Policy", "Development"]
    },
    {
      name: "Ifeoma Malo",
      picture: "/images/keynote_speakers/robinah.jpeg", // Using existing image as placeholder
      description: "Ifeoma Malo is a global climate and energy leader who has been at the forefront of industry-academia collaboration in advancing clean energy innovation across Africa.",
      linkedin: "https://linkedin.com/in/ifeoma-malo",
      topics: ["Industry-Academia Collaboration", "Clean Energy Innovation", "Climate Leadership"]
    }
  ];

  const toggleExpanded = (speakerId: string) => {
    setExpandedSpeakers(prev => ({
      ...prev,
      [speakerId]: !prev[speakerId]
    }));
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SpeakerCard = ({ speaker, year, index }: { speaker: any, year: string, index: number }) => {
    const speakerId = `${year}-${index}`;
    const isExpanded = expandedSpeakers[speakerId];
    const colorScheme = year === '2025' ? 'green' : year === '2024' ? 'red' : 'emerald';
    
    return (
      <Card className="hover:shadow-md transition-all duration-300 border border-gray-200 mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Speaker Image */}
            <div className="flex-shrink-0 self-center lg:self-start">
              <div className="w-48 h-48 rounded overflow-hidden bg-gray-100">
                <Image
                  src={speaker.picture}
                  alt={speaker.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Speaker Content */}
            <div className="flex-1 space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <h3 className="text-2xl text-center lg:text-left font-bold text-gray-900">{speaker.name}</h3>
                <Badge 
                  variant="secondary" 
                  className={`bg-${colorScheme}-100 text-${colorScheme}-700`}
                >
                  Keynote Speaker {year}
                </Badge>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  {isExpanded 
                    ? speaker.description1 || speaker.description
                    : truncateText(speaker.description1 || speaker.description)
                  }
                </p>
                
                {speaker.description2 && isExpanded && (
                  <p className="text-gray-600 leading-relaxed">
                    {speaker.description2}
                  </p>
                )}

                {/* Topics for 2024 and 2023 speakers */}
                {speaker.topics && (
                  <div className="flex flex-wrap gap-2">
                    {speaker.topics.map((topic: string, topicIndex: number) => (
                      <Badge key={topicIndex} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Read More/Less Button */}
                {(speaker.description1?.length > 200 || speaker.description?.length > 200) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(speakerId)}
                    className={`text-${colorScheme}-600 hover:text-${colorScheme}-700 hover:bg-${colorScheme}-50`}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Read Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Read More
                      </>
                    )}
                  </Button>
                )}
              </div>

              {/* LinkedIn Button */}
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={`border-${colorScheme}-600 text-${colorScheme}-600 hover:bg-${colorScheme}-600 hover:text-white`}
                >
                  <a
                    href={speaker.linkedin || `https://linkedin.com/in/${speaker.name.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-yellow-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Keynote Speakers
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Distinguished experts and thought leaders shaping the future of clean energy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>September 25-26, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Call-to-Action */}
      <AOS>
        <section className="py-12 bg-yellow-50 border-b border-yellow-200">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                Interested in Speaking?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Are you an expert in clean energy, energy storage, or sustainable development? 
                We&apos;re always looking for distinguished speakers to share their insights.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <a
                  href={keynoteSpeakerRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Apply as Keynote Speaker
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AOS>

      {/* Speakers by Year */}
      <AOS>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Meet Our Distinguished Speakers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the brilliant minds and industry leaders who will share their expertise 
                and insights at AICCEES conferences across the years.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="overflow-x-auto mb-12">
                <TabsList className="flex w-max !p-0 gap-4 md:gap-8 lg:gap-20">
                  <TabsTrigger 
                    value="2025" 
                    className="text-lg font-semibold data-[state=active]:text-green-600 data-[state=active]:bg-green-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 rounded-t-lg whitespace-nowrap"
                  >
                    2025 Speakers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="2024" 
                    className="text-lg font-semibold data-[state=active]:text-green-600 data-[state=active]:bg-green-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 rounded-t-lg whitespace-nowrap"
                  >
                    2024 Speakers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="2023" 
                    className="text-lg font-semibold data-[state=active]:text-green-600 data-[state=active]:bg-green-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 rounded-t-lg whitespace-nowrap"
                  >
                    2023 Speakers
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* 2025 Speakers */}
              <TabsContent value="2025" className="space-y-8">
                {keynoteSpeakers2025.map((speaker, index) => (
                  <SpeakerCard key={index} speaker={speaker} year="2025" index={index} />
                ))}
              </TabsContent>

              {/* 2024 Speakers */}
              <TabsContent value="2024" className="space-y-8">
                {keynoteSpeakers2024.map((speaker, index) => (
                  <SpeakerCard key={index} speaker={speaker} year="2024" index={index} />
                ))}
              </TabsContent>

              {/* 2023 Speakers */}
              <TabsContent value="2023" className="space-y-8">
                {keynoteSpeakers2023Expanded.map((speaker, index) => (
                  <SpeakerCard key={index} speaker={speaker} year="2023" index={index} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </AOS>

      {/* Call to Action Section */}
      <AOS>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Join Us at AICCEES 2025
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Don&apos;t miss the opportunity to hear from these distinguished speakers and 
                network with industry leaders in clean energy and energy storage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <a href="/registration">
                    <Users className="w-5 h-5 mr-2" />
                    Register for Conference
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <a href="/about">
                    <Globe className="w-5 h-5 mr-2" />
                    Learn More About AICCEES
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AOS>
    </div>
  );
} 