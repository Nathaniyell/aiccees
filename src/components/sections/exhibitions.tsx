"use client"

import type React from "react"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Exhibitions() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    open: false,
    dedicated: false,
    premium: false,
  })

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  // Define visible and hidden features for each card
  const openBoothFeatures = {
    visible: ["Networking opportunities", "Advertisement", "Lunch (x2 people)"],
    hidden: ["Demarcation panel", "Frame (lighting point)", "AC/Fan", "Power Supply (Generator-100/200 KVA)"],
  }

  const dedicatedBoothFeatures = {
    visible: ["2 Tables (Plastic)", "2 Tables (Wooden)", "2 Chairs (Plastic)", "Networking opportunities"],
    hidden: [
      "Advertisement",
      "Lunch (x2 people)",
      "Demarcation panel",
      "Frame",
      "AC/Fan",
      "Power Supply (Generator-100/200 KVA)",
    ],
  }

  const premiumBoothFeatures = {
    visible: ["All Dedicated Booth benefits", "Custom Branding"],
    hidden: ["Premium location", "Priority support"],
  }

  return (
    <div id="exhibitions" className="mb-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-[#008751] sm:text-4xl md:text-5xl">
          Exhibition Packages
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Open Booth Package */}
        <Card className="flex flex-col border-[#008751]">
          <CardHeader className="border-b border-[#008751]/20">
            <CardTitle className="text-2xl text-[#008751]">Open Booth</CardTitle>
            <CardDescription>Basic exhibition space</CardDescription>
            <div className="mt-4 text-4xl font-bold">₦50,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-4">
              {openBoothFeatures.visible.map((feature, index) => (
                <FeatureItem key={`open-visible-${index}`}>{feature}</FeatureItem>
              ))}

              <div
                className={`overflow-hidden transition-all duration-300 ${expandedCards.open ? "max-h-96" : "max-h-0"}`}
              >
                {openBoothFeatures.hidden.map((feature, index) => (
                  <FeatureItem key={`open-hidden-${index}`}>{feature}</FeatureItem>
                ))}
              </div>
            </ul>

            <Button
              variant="outline"
              className="w-full border-[#008751] text-[#008751] hover:bg-[#008751]/10"
              onClick={() => toggleCard("open")}
            >
              {expandedCards.open ? (
                <span className="flex items-center">
                  Read Less <ChevronUp className="ml-2 h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center">
                  Read More <ChevronDown className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Dedicated Booth Package */}
        <Card className="flex flex-col relative overflow-hidden border-[#008751]">
          <div className="absolute top-0 right-0 bg-[#CE1126] text-white px-4 py-1 text-sm font-medium">Popular</div>
          <CardHeader className="border-b border-[#008751]/20">
            <CardTitle className="text-2xl text-[#008751]">Dedicated Booth</CardTitle>
            <CardDescription>Complete exhibition setup</CardDescription>
            <div className="mt-4 text-4xl font-bold">₦100,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-4">
              {dedicatedBoothFeatures.visible.map((feature, index) => (
                <FeatureItem key={`dedicated-visible-${index}`}>{feature}</FeatureItem>
              ))}

              <div
                className={`overflow-hidden transition-all duration-300 ${expandedCards.dedicated ? "max-h-96" : "max-h-0"}`}
              >
                {dedicatedBoothFeatures.hidden.map((feature, index) => (
                  <FeatureItem key={`dedicated-hidden-${index}`}>{feature}</FeatureItem>
                ))}
              </div>
            </ul>

            <Button
              variant="outline"
              className="w-full border-[#CE1126] text-[#CE1126] hover:bg-[#CE1126]/10"
              onClick={() => toggleCard("dedicated")}
            >
              {expandedCards.dedicated ? (
                <span className="flex items-center">
                  Read Less <ChevronUp className="ml-2 h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center">
                  Read More <ChevronDown className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Premium Booth Package */}
        <Card className="flex flex-col border-[#008751]">
          <CardHeader className="border-b border-[#008751]/20">
            <CardTitle className="text-2xl text-[#008751]">Premium Booth</CardTitle>
            <CardDescription>Premium exhibition experience with branding</CardDescription>
            <div className="mt-4 text-4xl font-bold">₦150,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-4">
              {premiumBoothFeatures.visible.map((feature, index) => (
                <FeatureItem key={`premium-visible-${index}`}>{feature}</FeatureItem>
              ))}

              <div
                className={`overflow-hidden transition-all duration-300 ${expandedCards.premium ? "max-h-96" : "max-h-0"}`}
              >
                {premiumBoothFeatures.hidden.map((feature, index) => (
                  <FeatureItem key={`premium-hidden-${index}`}>{feature}</FeatureItem>
                ))}
              </div>
            </ul>

            <Button
              variant="outline"
              className="w-full border-[#008751] text-[#008751] hover:bg-[#008751]/10"
              onClick={() => toggleCard("premium")}
            >
              {expandedCards.premium ? (
                <span className="flex items-center">
                  Read Less <ChevronUp className="ml-2 h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center">
                  Read More <ChevronDown className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-[#008751]">Need More Information?</h2>
        <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
          Please send us an email via{" "}
          <a href="mailto:aiccees@uniport.edu.ng" className="underline text-blue-600">
            aiccees@uniport.edu.ng
          </a>{" "}
          for custom requirements or additional information about our exhibition packages.
        </p>
      </div>
    </div>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center">
      <Check className="h-5 w-5 text-[#008751] mr-2 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

