import { deets } from "@/components/data_models/conferences";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 md:px-6">
      <div className="space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold text-[#008751] tracking-tight sm:text-4xl md:text-5xl">
          Journal of Clean Energy, Circular Economy and Digitalisation
        </h1>
      </div>
      <section className="flex flex-col-reverse items-center justify-center md:items-start md:flex-row-reverse gap-8">

        <div className="p-2 md:p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Journal</h2>
          <p className="text-gray-700 leading-relaxed">
            The <span className="text-red-600 font-bold">Journal of Clean Energy, Circular Economy, and Digitalisation</span> (JCECED; ISSN: )  is a peer-reviewed publication dedicated to advancing research and innovation in
            sustainable energy, circular economy strategies, and digital transformation. It provides a platform for scholars, industry experts, and policymakers to share
            cutting-edge research, case studies, and technological developments that support Africa’s clean energy transition.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 my-3">Scope of the Journal</h3>
          <p className="text-gray-700 mb-3">
            The journal covers topics not limited to the themes of the <span className="text-red-600 font-bold">Africa International Conference on Clean Energy and Energy Storage (AICCEES)</span>, including:
          </p>

          <ol className="flex list-decimal list-inside flex-col md:flex-row md:items-center gap-4 flex-wrap text-gray-700">
            {deets.map((topic, index) => (
              <li key={index} className="font-medium">{topic.text}</li>
            ))}
          </ol>

          <p className="text-gray-700 mt-3">
            Papers from the Africa International Conference on Clean Energy and Energy Storage (AICCEES) are published in this journal, contributing to the global discourse on clean energy and sustainable development.
          </p>
          <div className="mt-3 flex items-center justify-center gap-6 flex-wrap">
          <Button asChild className="bg-green-800 text-white hover:bg-green-700">
            <Link target="_blank" href="https://docs.google.com/forms/d/1FxgRduMD96dFgxJW6RtaZgCOUD2rfnfPp_D6U4_kAoA/edit">Register for conference</Link>
          </Button>
          <Link
            href="mailto:aiccees@uniport.edu.ng"
            target="_blank"
            className="bg-red-600 text-white hover:bg-red-700 rounded-md px-4 py-2 text-sm font-medium h-10 inline-flex items-center justify-center"
          >
            Submit Your Paper
          </Link>
          </div>
        </div>

        {/* Volume 1, Issue 1 Card */}
        <div className="flex flex-col justify-center">
          <div className="bg-white shadow border border-stone-200 rounded-lg p-6 w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Volume 1, Issue 1</h3>
            <p className="text-gray-600 mb-4">
              Explore the latest research and advancements in clean energy, circular economy, and digitalization from leading experts and scholars.
            </p>
            <a
              href="/AICCEES 2024 BOA.pdf"
              target="_blank"
              download="AICCEES 2024 BOA.pdf"
              rel="noopener noreferrer"
              className="inline-block bg-[#008751] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              View Issue
            </a>
          </div>
          {/* Submit Paper Button */}
          <div className="mt-8 text-center md:text-left">
          <Link
            href="mailto:aiccees@uniport.edu.ng"
            target="_blank"
            className="bg-red-600 text-white hover:bg-red-700 rounded-md px-4 py-2 text-sm font-medium h-10 inline-flex items-center justify-center"
          >
            Submit Your Paper
          </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
