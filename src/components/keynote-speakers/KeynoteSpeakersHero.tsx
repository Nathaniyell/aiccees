import { Award, Calendar, MapPin } from "lucide-react";

const KeynoteSpeakersHero = () => (
  <section className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Award className="h-12 w-12 text-yellow-400 mr-3" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Keynote Speakers
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-green-100 mb-8">
          Distinguished experts and thought leaders shaping the future of clean energy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>Annual Conference</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Port Harcourt, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default KeynoteSpeakersHero;
