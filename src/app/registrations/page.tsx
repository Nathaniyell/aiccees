"use client";

import React, { useState } from "react";
import { GoogleForm } from "@/components/ui/iframe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RegistrationHero } from "@/components/sections/RegistrationHero";
import { TouristAttractions } from "@/components/sections/TouristAttractions";
import {
  FileText,
  Plane,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import AOS from "@/components/layout/AOS";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
  const [aiccees2025Registration, setAiccees2025Registration] = useState(true);
  const [aiccees2025ScientificCommittee, setAiccees2025ScientificCommittee] =
    useState(false);
  const router = useRouter();
  // Form URLs - replace with actual URLs
  const registrationFormUrl =
    "https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRUOVcxSTRVUVhNT0NUMTlFOFdWSExPWEVQVy4u&origin=lprLink&route=shorturl";
  const visaFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScmC2LPj6Jtw7w6N9Lm9YpP7ge6DiVlSRlEZ5RSWsYaGt5SUg/viewform";
  const scientificCommitteeFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfu0upSJBsHxmILPS1JGDr1je9pYOHMHy2OCNcCMMkNvewaxw/viewform?embedded=true";

  const openAiccees2025RegistrationForm = () => {
    setAiccees2025Registration(true);
    setAiccees2025ScientificCommittee(false);
    router.push("#registration-form");
  };
  
  const openAiccees2025ScientificCommittee = () => {
    setAiccees2025ScientificCommittee(true);
    setAiccees2025Registration(false);
    router.push("#registration-form");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <RegistrationHero />

      {/* Application Cards Section */}
      <AOS>
        <section className="pt-10 bg-white dark:bg-neutral-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Conference Registrations
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Choose the appropriate application form based on your needs.
                Each form is designed to collect specific information for
                different aspects of the conference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Registration Information Card */}
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 dark:hover:border-green-600">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                      <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    AICCEES 2025 Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4 justify-between text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <Calendar className="w-4 h-4" />
                        <p>September 26-27, 2025</p>
                      </div>
                      <div className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <MapPin className="w-4 h-4" />
                        <p>Port Harcourt, Nigeria</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                    Register for the Africa International Conference on Clean
                    Energy & Energy Storage. This is the main registration form
                    for all participants.
                  </p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={openAiccees2025RegistrationForm}
                  >
                    View Registration Form
                  </Button>
                </CardContent>
              </Card>

              {/* Visa Support Form Card */}
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-600">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Plane className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Visa Support Application
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <Users className="w-4 h-4" />
                      <span>For International Attendees</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                    Apply for visa support and travel assistance. This form is
                    for international participants who need assistance with visa
                    applications and travel arrangements.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a
                      href={visaFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apply for Visa Support
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Scientific Committee Application Card */}
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-300 dark:hover:border-purple-600">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                      <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Scientific Committee Application
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <FileText className="w-4 h-4" />
                      <span>Review Papers & Moderate Sessions</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                    Join our scientific committee and contribute to the
                    conference organization. Help review papers, moderate
                    sessions, and shape the conference program.
                  </p>
                  <Button
                    className="w-full bg-purple-600 hover:bg-green-700 text-white px-4"
                    onClick={openAiccees2025ScientificCommittee}
                  >
                    Apply for Scientific Committee Membership
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AOS>

      {/* Tourists Attraction Section */}
      <TouristAttractions />

      {/* Registration Form Section */}
      <AOS>
        <section
          id="registration-form"
          className="py-16 bg-neutral-50 dark:bg-neutral-800"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Complete Your Registration
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                {aiccees2025Registration &&
                  "Please fill out the form below to complete your registration for the AICCEES Conference 2025."}{" "}
                {aiccees2025ScientificCommittee &&
                  "Please fill out the form below to complete your registration for the Scientific Committee Membership Application."}
              </p>
            </div>

            <Card className="w-full max-w-4xl mx-auto shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">
                  {aiccees2025Registration &&
                    "Conference Attendance Registration Form"}
                  {aiccees2025ScientificCommittee &&
                    "Scientific Committee Membership Application Form"}
                </CardTitle>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {aiccees2025Registration &&
                    "Please provide your details to register for the conference"}
                  {aiccees2025ScientificCommittee &&
                    "Please provide your details to register for the Scientific Committee Membership Application"}
                </p>
              </CardHeader>
              <CardContent>
                {aiccees2025Registration && (
                  <GoogleForm
                    formUrl={registrationFormUrl}
                    height="700"
                    showTitle={false}
                    className="w-full"
                  />
                )}
                {aiccees2025ScientificCommittee && (
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfu0upSJBsHxmILPS1JGDr1je9pYOHMHy2OCNcCMMkNvewaxw/viewform?embedded=true" width="100%" height="100%" className="h-[700px] w-full" >Loading…</iframe>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </AOS>
    </div>
  );
}
