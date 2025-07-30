"use client";

import { Card, CardContent } from "@/components/ui/card";
import { aboutAiccees } from "@/components/data_models/about-aiccees";

export default function AboutOverview() {
  return (
    <div className="container mx-auto mb-20">
      <Card className="border-none shadow-none rounded-none p-0">
        <CardContent className="p-0">
          <div className="space-y-6">
            {aboutAiccees.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed text-lg text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 