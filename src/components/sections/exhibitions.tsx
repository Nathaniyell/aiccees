import type React from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Exhibitions() {
  return (
    <div className="container md:w-11/12 mx-auto px-4 py-12">
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

        </Card>

        {/* Dedicated Booth Package */}
        <Card className="flex flex-col relative overflow-hidden border-[#008751]">
          <div className="absolute top-0 right-0 bg-[#CE1126] text-white px-4 py-1 text-sm font-medium">
            Popular
          </div>
          <CardHeader className="border-b border-[#008751]/20">
            <CardTitle className="text-2xl text-[#008751]">Dedicated Booth</CardTitle>
            <CardDescription>Complete exhibition setup</CardDescription>
            <div className="mt-4 text-4xl font-bold">₦100,000</div>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ul className="space-y-2 mb-6">
              <FeatureItem>2 Tables (Plastic)</FeatureItem>
              <FeatureItem>2 Tables (Wooden)</FeatureItem>
              <FeatureItem>2 Chairs (Plastic)</FeatureItem>
              <FeatureItem>Networking opportunities</FeatureItem>
              <FeatureItem>Advertisement</FeatureItem>
              <FeatureItem>Lunch (x2 people)</FeatureItem>
              <FeatureItem>Demarcation panel</FeatureItem>
              <FeatureItem>Frame</FeatureItem>
              <FeatureItem>AC/Fan</FeatureItem>
              <FeatureItem>Power Supply (Generator-100/200 KVA)</FeatureItem>
            </ul>
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
            <ul className="space-y-2 mb-6">
              <FeatureItem>All Dedicated Booth benefits</FeatureItem>
              <FeatureItem>Custom Branding</FeatureItem>
              <FeatureItem>Premium location</FeatureItem>
              <FeatureItem>Priority support</FeatureItem>
            </ul>
          </CardContent>

        </Card>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-[#008751]">Need More Information?</h2>
        <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
        Please send us an email via <a href="mailto:aiccees@uniport.edu.ng" className="underline text-blue-600">aiccees@uniport.edu.ng</a> for custom requirements or additional information about our exhibition packages.
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

