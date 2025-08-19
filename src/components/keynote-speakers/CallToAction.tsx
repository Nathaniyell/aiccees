import { Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from "@/components/layout/AOS";

const CallToAction = () => (
  <AOS>
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Join Us at AICCEES 2025
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Don&apos;t miss the opportunity to hear from these distinguished speakers and 
            network with industry leaders in clean energy and energy storage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <a href="/registration">
                <Users className="w-5 h-5 mr-2" />
                Register for Conference
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              <a href="/about">
                <Globe className="w-5 h-5 mr-2" />
                Learn More About AICCEES
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </AOS>
);

export default CallToAction;
