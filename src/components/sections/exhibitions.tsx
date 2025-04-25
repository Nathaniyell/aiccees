"use client"

import React from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { officeNumber } from "@/lib/utils"

export default function Exhibitions() {
  const packages = [
    {
      name: "Basic Booth",
      price: "₦100,000 or $70",
      features: [
        "7ft by 7ft dedicated exhibition space",
        "1 table & 2 chairs",
        "24-hour electricity supply",
        "2 meal tickets per day"
      ],
      popular: false,
      applicationLink: "https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRURFlaM0lVQ0tWRFFPNEFMUjFPRDlLOVlSUy4u&route=shorturl"
    },
    {
      name: "Standard Booth",
      price: "₦200,000 or $135",
      features: [
        "All Basic Booth benefits",
        "Extra furniture (additional tables & chairs)",
        "Additional meal tickets"
      ],
      popular: false,
      applicationLink: "https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRUNTY2UFRBRjYxMEpQUkxaS1VaTlhBM0pRSS4u&route=shorturl"
    },
    {
      name: "Standard Deluxe Booth",
      price: "₦300,000 or $200",
      features: [
        "All Standard Booth benefits",
        "2 medium-sized roll-up banners",
        "Custom branded booth design & tables"
      ],
      popular: true,
      applicationLink:"https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRUNzBVMFNBRjBWUkgwQU5LMkZLWUxaR0JBWi4u&route=shorturl"
    },
    {
      name: "Premium Booth",
      price: "₦400,000 or $300",
      features: [
        "12ft by 12ft deluxe exhibition space",
        "All Standard Deluxe Booth benefits",
        "Priority booth placement",
        "Enhanced promotional opportunities"
      ],
      popular: false,
      applicationLink: "https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRUQjE1SlBLUTkySEtPMEpLUlY2WU85WEROVS4u&route=shorturl"
    }
  ]

  return (
    <section id="exhibitions" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#008751] sm:text-4xl md:text-5xl mb-4">
            Exhibition Packages
          </h2>
          <p className="text-gray-700">
            Showcase your products and services in the biggest conference on clean energy in Africa.
            Join our exhibition session and gain exposure to a wide audience from across the continent.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`flex flex-col border-[#008751] h-full relative transition-all hover:shadow-lg ${pkg.popular ? "border-2 border-[#CE1126]" : ""
                }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#CE1126] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <CardHeader className="border-b border-[#008751]/20">
                <CardTitle className="text-2xl text-[#008751]">
                  {pkg.name}
                </CardTitle>
                <div className="mt-4 text-3xl font-bold">
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent className="flex-1 pt-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <FeatureItem key={`${pkg.name}-feature-${index}`}>
                      {feature}
                    </FeatureItem>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                  className={`w-full ${pkg.popular
                      ? "bg-[#CE1126] hover:bg-[#CE1126]/90"
                      : "border-[#008751] text-[#008751] hover:bg-[#008751]/10"
                    }`}
                >
                  <a
                    href={pkg.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* 
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-[#008751] mb-4">
            Package Details
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Every Dedicated Space Includes:</h4>
              <ul className="space-y-2">
                <FeatureItem>7ftx7ft exhibition frame</FeatureItem>
                <FeatureItem>1 table & 2 chairs</FeatureItem>
                <FeatureItem>24-hour electricity supply</FeatureItem>
                <FeatureItem>2 meal tickets per day</FeatureItem>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Branding Packages Include:</h4>
              <ul className="space-y-2">
                <FeatureItem>2 medium-sized roll-up banners</FeatureItem>
                <FeatureItem>Custom branded booth & tables</FeatureItem>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#008751] mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We offer tailored exhibition packages for larger displays or special requirements.
            Contact our exhibition team on phone or email for more information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="border-[#008751] text-[#008751] hover:bg-[#008751]/10">
              <a href="tel:+2341234567890">
                Call: {officeNumber}
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#008751] text-[#008751] hover:bg-[#008751]/10">
              <a href="mailto:aiccees@uniport.edu.ng">
                Email: aiccees@uniport.edu.ng
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <Check className="h-5 w-5 text-[#008751] mr-2 flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{children}</span>
    </li>
  )
}