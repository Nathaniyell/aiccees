import { Badge, Group, Star } from "lucide-react";
import { GiftIcon } from "lucide-react";


export function PartnersHero() {
    return (
        <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-emerald-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 pb-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 px-4 py-2 bg-green-500/20 text-green-100 border-green-400/30">
            <Star className="w-4 h-4 mr-2" />
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-white to-lime-400 bg-clip-text text-transparent">
          Sponsorship Opportunities
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
          Organisations, companies, groups, and individuals are invited to
            partner with the conference organisers for this conference by
            selecting any of the sponsorship packages listed below.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <GiftIcon className="w-4 h-4 mr-2" />
              Sponsorship Packages
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Group className="w-4 h-4 mr-2" />
              Ready to Become a Sponsor?
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}