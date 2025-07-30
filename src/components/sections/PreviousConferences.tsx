"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function PreviousConferences() {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl tracking-tighter sm:text-5xl font-bold mb-4 text-green-800">
          Previous Conferences
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200">
            <CardTitle className="text-2xl text-red-700 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              AICCEES 2024
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis culpa excepturi. Non quam rerum perspiciatis laboriosam consectetur deleniti, quia excepturi recusandae sequi nam itaque id explicabo veritatis minima numquam neque, culpa eveniet modi, harum illum. Provident voluptate alias, aspernatur laborum nobis architecto dolores dolorem quae nihil assumenda culpa et ipsam rerum odit praesentium eaque fugiat temporibus modi, aliquam est! Quas ad distinctio sit nisi inventore ratione aspernatur dolor deleniti! Voluptatibus totam voluptatum maxime alias officia maiores quibusdam, deserunt nesciunt nihil ipsam tempore aperiam! Iste, alias tempore modi a architecto dolores quis impedit quos odio esse neque aliquam natus recusandae.
              </p>
              <p className="text-gray-700 leading-relaxed">
                  Highlights included the Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis omnis, quibusdam ullam eveniet fugiat enim quod. Consequuntur, sed. At!
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-red-100 text-red-700 border-red-300">
                  500+ Participants
                </Badge>
                <Badge className="bg-red-100 text-red-700 border-red-300">
                  30 Countries
                </Badge>
                <Badge className="bg-red-100 text-red-700 border-red-300">
                  45 Technical Papers
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              AICCEES 2023
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                AICCEES 2023 took place in Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt maxime quod vel commodi eius accusantium nihil ipsum veritatis laborum excepturi, et obcaecati rem voluptas voluptate molestias alias, nostrum corrupti, exercitationem incidunt fugit fuga quos! Commodi quisquam quasi soluta, est cum provident nulla ad dignissimos, totam quas inventore vitae? Eius aut porro numquam suscipit dignissimos aliquam iste labore obcaecati eum quasi facere doloribus modi architecto soluta illum, ipsam ducimus, qui velit. Facilis, deserunt animi. Aut aperiam id ut sequi recusandae atque consequatur adipisci quis? Maxime suscipit officia harum similique perspiciatis cum dolores. Asperiores nihil labore non quos itaque dicta nemo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The 2023 conference introduced the Student Innovation
                Challenge, which received 78 submissions from universities
                worldwide.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, autem quam! Iusto sit nisi voluptate facilis ratione neque sed.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-green-100 text-green-700 border-green-300">
                  420 Attendees
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-300">
                  First European Venue
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-300">
                  78 Student Submissions
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 