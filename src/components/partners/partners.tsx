import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { partners } from "../data-models/conferences"


export function Partners() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {partners.map((partner) => (
        <Card key={partner.name} className="overflow-hidden">
          <CardHeader className="space-y-4">
            <div className="h-20 w-20 relative mx-auto">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1 text-center">
              <CardTitle>{partner.name}</CardTitle>
              
            </div>
          </CardHeader>
        </Card>
      ))}
    </section>
  )
}

