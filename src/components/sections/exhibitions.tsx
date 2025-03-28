"use client"

import type React from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Exhibitions() {
  const basicBoothFeatures = ["5x7ft Dedicated Space", "Networking opportunities", "Advertisement"]
  const dedicatedBoothFeatures = ["All Basic Booth Benefits", "Extra Furniture"]
  const premiumBoothFeatures = ["All Standard Booth benefits", "Branding Services"]

  return (
    <div id="exhibitions" className="mb-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-[#008751] sm:text-4xl md:text-5xl">
          Exhibition Packages
        </h1>

      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="flex flex-col border-[#008751]">
          <CardHeader className="border-b border-[#008751]/20">
            <CardTitle className="text-2xl text-[#008751]">Basic Booth</CardTitle>
            {/* <CardDescription>Basic exhibition space</CardDescription> */}
            <div className="mt-4 text-4xl font-bold">₦60,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-4">
              {basicBoothFeatures.map((feature, index) => (
                <FeatureItem key={`open-visible-${index}`}>{feature}</FeatureItem>
              ))}

            </ul>

            <Button
              variant="outline"
              className="w-full border-[#008751] text-[#008751] hover:bg-[#008751]/10"
            >
              Apply Here
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col relative overflow-hidden border-[#008751]">
          <div className="absolute top-0 right-0 bg-[#CE1126] text-white px-4 py-1 text-sm font-medium">Popular</div>
          <CardHeader className="border-b border-[#008751]/20">
            <CardTitle className="text-2xl text-[#008751]">Standard Booth</CardTitle>
            {/* <CardDescription>Complete exhibition setup</CardDescription> */}
            <div className="mt-4 text-4xl font-bold">₦120,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-4">
              {dedicatedBoothFeatures.map((feature, index) => (
                <FeatureItem key={`dedicated-visible-${index}`}>{feature}</FeatureItem>
              ))}


            </ul>

            <Button
              variant="outline"
              className="w-full border-[#CE1126] text-[#CE1126] hover:bg-[#CE1126]/10"

            >
              Apply Here
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col border-[#008751]">
          <CardHeader className="border-b border-[#008751]/20">
            <CardTitle className="text-2xl text-[#008751]">Premium Booth</CardTitle>
            {/* <CardDescription>Premium exhibition experience with branding</CardDescription> */}
            <div className="mt-4 text-4xl font-bold">₦260,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-4">
              {premiumBoothFeatures.map((feature, index) => (
                <FeatureItem key={`premium-visible-${index}`}>{feature}</FeatureItem>
              ))}


            </ul>

            <Button
              variant="outline"
              className="w-full border-[#008751] text-[#008751] hover:bg-[#008751]/10"

            >
              Apply Here
            </Button>
          </CardContent>
        </Card>
      </div>
      <section className="space-y-2 mt-2">
        <p>Please note that every Dedicated Space contains: a 5x7ft fram, furniture(1 table & chair), Electricity supply and 2 meal tickets</p>
        <p>Branding Includes: 2 Medium sized roll-up banners and a designed/branded booth frams and tables</p>
      </section>
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

