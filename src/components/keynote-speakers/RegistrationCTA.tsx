import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from "@/components/layout/AOS";

const RegistrationCTA = () => (
  <AOS>
    <section className="py-12 bg-yellow-50 border-b border-yellow-200">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Interested in Speaking?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Are you an expert in clean energy, energy storage, or sustainable development? 
            We&apos;re always looking for distinguished speakers to share their insights.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRUOVcxSTRVUVhNT0NUMTlFOFdWSExPWEVQVy4u&origin=lprLink&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Apply as Keynote Speaker
            </a>
          </Button>
        </div>
      </div>
    </section>
  </AOS>
);

export default RegistrationCTA;
