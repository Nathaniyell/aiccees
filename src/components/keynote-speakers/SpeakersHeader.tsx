import { Separator } from "@/components/ui/separator";
import AOS from "@/components/layout/AOS";

const SpeakersHeader = () => (
  <AOS>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Meet Our Distinguished Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the brilliant minds and industry leaders who will share their expertise 
            and insights at AICCEES conferences across the years.
          </p>
        </div>
        <Separator />
      </div>
    </section>
  </AOS>
);

export default SpeakersHeader;
