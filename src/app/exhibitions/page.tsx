import { ExhibitionHero } from "@/components/sections/ExhibitionHero";
import Exhibitions from "@/components/sections/exhibitions";

export default function ExhibitionPage() {
  return (
    <div>
        <ExhibitionHero />

        {/* Exhibitions */}
        <section className="bg-gray-50">
            <Exhibitions />
        </section>
      </div>
  );
}