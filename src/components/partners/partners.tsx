import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { partners } from "@/components/data_models/conferences"

export function Partners() {
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="w-full overflow-hidden group-hover:pause-animation">
      <div className="relative flex">
        <div className="animate-marquee flex gap-6">
          {duplicatedPartners.map((partner, index) => (
            <Card
              key={`${partner.name}-${index}`}
              className="overflow-hidden min-w-[250px]"
            >
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
        </div>
      </div>
    </div>
  )
}

