import { Partners } from "@/components/partners";
import PartnershipPackages from "@/components/partnership-packages";
import { PartnersHero } from "@/components/sections/SponsorshipHero";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <PartnersHero />
      
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        
        <section className="space-y-8">
          <PartnershipPackages />
        </section>

        <section className="space-y-8 bg-white p-12 text-center shadow-sm">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ready to Become a Partner?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Take the first step towards a meaningful partnership. Fill out our
              partnership form and join our community of industry leaders and
              innovators.
            </p>
            <div className="pt-6">
              <Link
                href="https://docs.google.com/forms/d/1UmXabWk7VkBlHPvO4zLtU4Ww87m1ci4VDrM1311FiFI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-green-700 hover:bg-green-600 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Apply for Partnership
              </Link>
            </div>
          </div>
        </section>
        
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Partners
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We&apos;re proud to work with leading organizations in the clean energy sector.
            </p>
          </div>
          <div className="py-8">
            <Partners />
          </div>
        </section>
      </div>
    </div>
  );
}
