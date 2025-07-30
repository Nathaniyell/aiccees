"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { organizingCommitteeMembers } from "@/components/data_models/organizing-committee";

export default function OrganizingCommittee() {
  const leadershipMembers = organizingCommitteeMembers.filter(member => 
    member.role.includes("Chair")
  );
  
  const committeeMembers = organizingCommitteeMembers.filter(member => 
    !member.role.includes("Chair")
  );

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl tracking-tighter sm:text-5xl font-bold mb-4 text-green-800">
          Organising Committee
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the dedicated team behind AICCEES, working tirelessly to bring you an exceptional conference experience.
        </p>
      </div>

      <div className="container mx-auto">
        {/* Leadership Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipMembers.map((member) => (
              <Card key={member.id} className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-gray-100 text-green-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-semibold text-green-800 mb-2">{member.name}</h4>
                  <Badge variant="secondary" className="mb-3 text-sm">
                    {member.role}
                  </Badge>
                  <p className="text-sm">{member.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Committee Members Section */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">Committee Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member) => (
              <Card key={member.id} className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12 flex-shrink-0">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-sm font-medium bg-gray-100 text-green-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-green-800 mb-1 truncate">{member.name}</h4>
                      <Badge variant="outline" className="text-xs mb-2">
                        {member.role}
                      </Badge>
                      <p className="text-sm leading-relaxed">{member.affiliation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 