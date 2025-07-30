"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

interface TouristAttraction {
  id: string;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
}

const touristAttractions: TouristAttraction[] = [
  {
    id: "beach",
    name: "Port Harcourt Tourist Beach",
    description: "A pristine beach located along the Atlantic coastline, perfect for relaxation, water sports, and enjoying the beautiful sunset. The beach offers clean sands and clear waters ideal for swimming and beach activities.",
    location: "Port Harcourt Tourist Beach, Rivers State",
    imageUrl: "https://www.hlimg.com/images/things2do/738X538/ttd_1520855395m2.jpg",
    imageAlt: "Port Harcourt Tourist Beach"
  },
  {
    id: "park",
    name: "Isaac Boro Park",
    description: "A beautiful park named after the famous Niger Delta activist. The park features lush greenery, walking paths, and recreational facilities. It&apos;s a perfect spot for morning walks, picnics, and outdoor activities.",
    location: "Port Harcourt City Centre",
    imageUrl: "https://www.finelib.com/images/about/665_IMAGE.jpg",
    imageAlt: "Isaac Boro Park"
  },
  {
    id: "zoo",
    name: "Port Harcourt Zoo",
    description: "Home to various species of animals and birds, the Port Harcourt Zoo offers an educational experience for visitors. The zoo is well-maintained and provides a great opportunity to learn about wildlife conservation.",
    location: "Port Harcourt Zoo, Rivers State",
    imageUrl: "https://ak-d.tripcdn.com/images/0HJ3f12000hcc7xl64D68.jpg",
    imageAlt: "Port Harcourt Zoo"
  },
  {
    id: "nature-park",
    name: "Finima Nature Park",
    description: "A protected mangrove forest area that showcases the rich biodiversity of the Niger Delta region. The park is home to various species of birds, monkeys, and other wildlife, making it perfect for nature enthusiasts and bird watchers.",
    location: "Bonny Island, Rivers State",
    imageUrl: "https://finimanaturepark.com/wp-content/uploads/2024/02/32374294_210810026389595_1654496864994590720_n.jpg",
    imageAlt: "Finima Nature Park"
  },
  {
    id: "cultural-centre",
    name: "Port Harcourt Cultural Centre",
    description: "A hub for cultural activities, art exhibitions, and performances. The centre showcases the rich cultural heritage of the Niger Delta region through traditional dances, music, and art displays.",
    location: "Port Harcourt City Centre",
    imageUrl: "https://img.rezdy.com/PRODUCT_IMAGE/13699/PORT_HARCOURT.jpg",
    imageAlt: "Port Harcourt Cultural Centre"
  },
  {
    id: "bonny-island",
    name: "Bonny Island",
    description: "A historic island known for its beautiful beaches, rich history, and cultural significance. The island offers stunning views of the Atlantic Ocean and provides a peaceful retreat from the city&apos;s hustle and bustle.",
    location: "Bonny Island, Rivers State",
    imageUrl: "https://i.ytimg.com/vi/J0D8IoPisy0/maxresdefault.jpg",
    imageAlt: "Bonny Island"
  }
];

export function TouristAttractions() {
  return (
    <section className="pt-10 pb-6 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Explore Port Harcourt
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover the beautiful tourist attractions in Port Harcourt while attending the conference. 
            From pristine beaches to cultural landmarks, there&apos;s something for everyone to enjoy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristAttractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src={attraction.imageUrl}
                  alt={attraction.imageAlt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {attraction.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {attraction.description}
                </p>
                <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{attraction.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Make the most of your conference visit by exploring these amazing attractions in Port Harcourt!
          </p>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a href="https://www.google.com/maps/search/tourist+attractions+in+port+harcourt" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Explore More Attractions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
} 