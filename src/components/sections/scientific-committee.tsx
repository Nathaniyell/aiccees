import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { GraduationCap, Building2, Globe2 } from 'lucide-react'
import { committeeMembers } from "../data_models/scientific-committee-data"
import AOS from "../layout/AOS"



export default function ScientificCommittee() {
  return (
    <AOS>
    <section className="py-12 bg-slate-100">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Scientific Committee</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our distinguished committee members bring together expertise from leading institutions worldwide
            to ensure the highest standards of scientific excellence.
          </p>
        </div>

        <div className=" w-11/12 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committeeMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>{member.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe2 className="w-4 h-4" />
                    <span>{member.country}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 mt-1 flex-shrink-0" />
                    <ScrollArea className="w-full whitespace-normal">
                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </AOS>
  )
}

