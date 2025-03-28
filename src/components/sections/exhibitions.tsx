"use client"

import React from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Exhibitions() {
  const packages = [
    {
      name: "Basic Booth",
      price: "₦60,000",
      features: [
        "7ft by 7ft dedicated exhibition space",
        "Standard furniture (1 table & 1 chair)",
        "Networking opportunities"
      ],
      popular: false
    },
    {
      name: "Standard Booth",
      price: "₦120,000",
      features: [
        "All Basic Booth benefits",
        "Extra furniture",
      ],
      popular: true
    },
    {
      name: "Premium Booth",
      price: "₦260,000",
      features: [
        "All Standard Booth benefits",
        "Custom branded booth design",
      ],
      popular: false
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
            Showcase your products and services in the biggest conference on clean energy in Africa. Join our exhibition session and have audience to a widespread of individuals from across Africa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
                <div className="mt-4 text-4xl font-bold">
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
                  className={`w-full ${pkg.popular
                      ? "bg-[#CE1126] hover:bg-[#CE1126]/90"
                      : "border-[#008751] text-[#008751] hover:bg-[#008751]/10"
                    }`}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-[#008751] mb-4">
            Package Inclusions
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">All Packages Include:</h4>
              <ul className="space-y-2">
                <FeatureItem>7x7ft branded booth frame</FeatureItem>
                <FeatureItem>Furniture (tables & chairs)</FeatureItem>
                <FeatureItem>24-hour power supply</FeatureItem>
                <FeatureItem>2 meal tickets per day</FeatureItem>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Premium Add-ons:</h4>
              <ul className="space-y-2">
                <FeatureItem>Custom booth design</FeatureItem>
                <FeatureItem>Roll-up banners</FeatureItem>
                <FeatureItem>Priority placement</FeatureItem>
                <FeatureItem>Enhanced promotion</FeatureItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#008751] mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We offer tailored exhibition packages for larger displays or special requirements.
            Contact our team to discuss your specific needs.
          </p>
          <Button asChild variant="outline" className="border-[#008751] text-[#008751] hover:bg-[#008751]/10">
            <a href="mailto:aiccees@uniport.edu.ng">
              Contact Exhibition Team
            </a>
          </Button>
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