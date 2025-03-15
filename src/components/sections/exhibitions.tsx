import type React from "react"
import { Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Exhibitions() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-theme-green sm:text-4xl md:text-5xl">
          Exhibition Packages
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose the right exhibition package for your needs at our academic event.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Open Booth Package */}
        <Card className="flex flex-col border-theme-green">
          <CardHeader className="border-b border-theme-green/20">
            <CardTitle className="text-2xl text-theme-green">Open Booth (Empty)</CardTitle>
            <CardDescription>Basic exhibition space</CardDescription>
            <div className="mt-4 text-4xl font-bold">₦50,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-6">
              <FeatureItem>Networking opportunities</FeatureItem>
              <FeatureItem>Advertisement</FeatureItem>
              <FeatureItem>Lunch (x2 people)</FeatureItem>
              <FeatureItem>Demarcation panel</FeatureItem>
              <FeatureItem>Frame (lighting point)</FeatureItem>
              <FeatureItem>AC/Fan</FeatureItem>
              <FeatureItem>Power Supply (Generator-100/200 KVA)</FeatureItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-theme-green hover:bg-theme-green/90 text-theme-white">Book Now</Button>
          </CardFooter>
        </Card>

        {/* Dedicated Booth Package */}
        <Card className="flex flex-col relative overflow-hidden border-theme-green">
          <div className="absolute top-0 right-0 bg-theme-red text-theme-white px-4 py-1 text-sm font-medium">
            Popular
          </div>
          <CardHeader className="border-b border-theme-green/20">
            <CardTitle className="text-2xl text-theme-green">Dedicated Booth</CardTitle>
            <CardDescription>Complete exhibition setup</CardDescription>
            <div className="mt-4 text-4xl font-bold">₦100,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-6">
              <FeatureItem>2 Tables (Plastic) - ₦1,000</FeatureItem>
              <FeatureItem>2 Tables (Wooden) - ₦2,000</FeatureItem>
              <FeatureItem>2 Chairs (Plastic) - ₦200</FeatureItem>
              <FeatureItem>Networking opportunities</FeatureItem>
              <FeatureItem>Advertisement</FeatureItem>
              <FeatureItem>Lunch (x2 people)</FeatureItem>
              <FeatureItem>Demarcation panel</FeatureItem>
              <FeatureItem>Frame</FeatureItem>
              <FeatureItem>AC/Fan</FeatureItem>
              <FeatureItem>Power Supply (Generator-100/200 KVA)</FeatureItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-theme-red hover:bg-theme-red/90 text-theme-white">Book Now</Button>
          </CardFooter>
        </Card>

        {/* Premium Booth Package */}
        <Card className="flex flex-col border-theme-green">
          <CardHeader className="border-b border-theme-green/20">
            <CardTitle className="text-2xl text-theme-green">Premium Booth</CardTitle>
            <CardDescription>Premium exhibition experience with branding</CardDescription>
            <div className="mt-4 text-4xl font-bold">₦150,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-6">
              <FeatureItem>All Dedicated Booth benefits</FeatureItem>
              <FeatureItem>Custom Branding</FeatureItem>
              <FeatureItem>Premium location</FeatureItem>
              <FeatureItem>Priority support</FeatureItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-theme-green hover:bg-theme-green/90 text-theme-white">Book Now</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-theme-green">Need More Information?</h2>
        <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
          Contact our exhibitions team for custom requirements or additional information about our exhibition packages.
        </p>
        <Button asChild className="bg-theme-red hover:bg-theme-red/90 text-theme-white">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center">
      <Check className="h-5 w-5 text-theme-green mr-2 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

