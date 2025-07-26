import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { aboutAiccees } from "@/components/data_models/about-aiccees";

export default function AboutPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 mb-12 overflow-hidden shadow-lg">
        <Image
          src="/images/herobg1.jpg"
          alt="AICCEES Conference Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About AICCEES
          </h1>
          {/* <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">
            Uniting Innovators in Computer, Electrical, and Electronics Sciences
          </p> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Conference Overview */}
        <Card className="mb-8 border-none animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">
              About the Conference
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aboutAiccees.map((paragraph, index) => (
                                   <p key={index} className="text-gray-600 md:text-base/relaxed text-justify mb-4">
                                       {paragraph}
                                   </p>
                               ))}
          </CardContent>
        </Card>

        {/* Keynote Speakers with Images */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Keynote Speakers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="flex flex-col items-center">
              <Image
                src="/public/keynote_speakers/jane_smith.jpg"
                alt="Dr. Jane Smith"
                width={120}
                height={120}
                className="rounded-full shadow-lg mb-2 object-cover"
              />
              <span className="font-semibold">Dr. Jane Smith</span>
              <span className="text-sm text-gray-600">
                Professor of Computer Science, MIT
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/keynote_speakers/robert_johnson.jpg"
                alt="Dr. Robert Johnson"
                width={120}
                height={120}
                className="rounded-full shadow-lg mb-2 object-cover"
              />
              <span className="font-semibold">Dr. Robert Johnson</span>
              <span className="text-sm text-gray-600">
                Director of Electrical Engineering, Stanford
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/keynote_speakers/emily_chen.jpg"
                alt="Dr. Emily Chen"
                width={120}
                height={120}
                className="rounded-full shadow-lg mb-2 object-cover"
              />
              <span className="font-semibold">Dr. Emily Chen</span>
              <span className="text-sm text-gray-600">
                Head of Research, NVIDIA
              </span>
            </div>
          </div>
        </div>

        {/* Scientific Committee with Images */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Scientific Committee
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
            <div className="flex flex-col items-center">
              <Image
                src="/public/conference-chairs/abam.jpg"
                alt="Prof. Alan Turing"
                width={80}
                height={80}
                className="rounded-full mb-1 object-cover"
              />
              <span className="text-sm font-medium">Prof. Alan Turing</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/conference-chairs/oyedepo.jpg"
                alt="Dr. Grace Hopper"
                width={80}
                height={80}
                className="rounded-full mb-1 object-cover"
              />
              <span className="text-sm font-medium">Dr. Grace Hopper</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/conference-chairs/roland.jpg"
                alt="Prof. Nikola Tesla"
                width={80}
                height={80}
                className="rounded-full mb-1 object-cover"
              />
              <span className="text-sm font-medium">Prof. Nikola Tesla</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/conference-chairs/ruona.jpg"
                alt="Dr. Katherine Johnson"
                width={80}
                height={80}
                className="rounded-full mb-1 object-cover"
              />
              <span className="text-sm font-medium">Dr. Katherine Johnson</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/conference-chairs/verro.jpg"
                alt="Prof. Claude Shannon"
                width={80}
                height={80}
                className="rounded-full mb-1 object-cover"
              />
              <span className="text-sm font-medium">Prof. Claude Shannon</span>
            </div>
          </div>
        </div>

        {/* Conference Highlights Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Conference Highlights
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/public/aicess/svg1.png"
                alt="Keynotes"
                width={48}
                height={48}
              />
              <span className="mt-2 font-semibold">12 Keynote Sessions</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/aicess/svg2.png"
                alt="Workshops"
                width={48}
                height={48}
              />
              <span className="mt-2 font-semibold">Workshops & Panels</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/aicess/svg3.png"
                alt="Networking"
                width={48}
                height={48}
              />
              <span className="mt-2 font-semibold">Global Networking</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/public/aicess/svg4.png"
                alt="Innovation"
                width={48}
                height={48}
              />
              <span className="mt-2 font-semibold">Innovation Challenge</span>
            </div>
          </div>
        </div>

        {/* Gallery Strip */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            AICCEES Moments
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-2">
            <Image
              src="/public/conference-pics/IMG_1870.jpg"
              alt="Conference 1"
              width={200}
              height={120}
              className="rounded-lg shadow"
            />
            <Image
              src="/public/conference-pics/IMG_1880.jpg"
              alt="Conference 2"
              width={200}
              height={120}
              className="rounded-lg shadow"
            />
            <Image
              src="/public/conference-pics/IMG_1922.jpg"
              alt="Conference 3"
              width={200}
              height={120}
              className="rounded-lg shadow"
            />
            <Image
              src="/public/conference-pics/IMG_1934.jpg"
              alt="Conference 4"
              width={200}
              height={120}
              className="rounded-lg shadow"
            />
            <Image
              src="/public/conference-pics/IMG_2110.jpg"
              alt="Conference 5"
              width={200}
              height={120}
              className="rounded-lg shadow"
            />
          </div>
        </div>

        {/* Conference Chairs */}
        <Card className="mb-8 border-red-600">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">
              Conference Chairs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-lg">General Chair</h3>
                <p>Dr. Michael Brown</p>
                <p className="text-sm">University of Technology</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Program Chair</h3>
                <p>Dr. Sarah Wilson</p>
                <p className="text-sm">Institute of Electrical Engineers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Organizing Committee */}
        <Card className="mb-8 border-green-700">
          <CardHeader>
            <CardTitle className="text-2xl text-red-600">
              Organizing Committee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold">Logistics</h3>
                <ul className="mt-2 space-y-1">
                  <li>John Davis</li>
                  <li>Maria Garcia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Technical</h3>
                <ul className="mt-2 space-y-1">
                  <li>David Kim</li>
                  <li>Lisa Wong</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Publicity</h3>
                <ul className="mt-2 space-y-1">
                  <li>Emma Thompson</li>
                  <li>James Wilson</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Previous Conferences */}
        <div className="space-y-8">
          <Card className="border-red-600">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">
                AICCEES 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The 2024 edition of AICCEES was held in San Francisco, CA, with
                over 500 participants from 30 countries. The conference featured
                12 keynote sessions and 45 technical paper presentations across
                three parallel tracks.
              </p>
              <p className="mt-2">
                Highlights included the workshop on Quantum Computing
                Applications and the panel discussion on Sustainable Electronics
                Manufacturing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">
                AICCEES 2023
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                AICCEES 2023 took place in Berlin, Germany, marking our first
                European venue. With 420 attendees, the conference focused on AI
                Ethics, Renewable Energy Systems, and Next-Generation Computing
                Architectures.
              </p>
              <p className="mt-2">
                The 2023 conference introduced the Student Innovation Challenge,
                which received 78 submissions from universities worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
