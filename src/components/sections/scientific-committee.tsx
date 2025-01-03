import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { GraduationCap, Building2, Globe2 } from 'lucide-react'
import { committeeMembers } from "../data_models/scientific-committee-data"
import AOS from "../layout/AOS"
import Link from "next/link"

export default function ScientificCommittee() {
    return (
        <AOS>
            <section className="py-12 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl tracking-tighter sm:text-5xl text-center font-bold mb-4 text-green-800">Scientific Committee</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our distinguished committee members bring together expertise from leading institutions worldwide
                            to ensure the highest standards of scientific excellence.
                        </p>
                        <p className="">To become a scientific committee member <Link href="" className="text-green-800 font-medium underline">register here</Link></p>
                    </div>

                    <div className="w-11/12 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {committeeMembers.map((member) => (
                            <Card key={member.id} className="group hover:shadow-lg transition-shadow bg-white border-slate-200">
                                <CardHeader className="text-center pb-4">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback className="bg-white rounded-full border-green-800 border text-slate-600">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-slate-800">{member.name}</CardTitle>
                                    <CardDescription className="font-medium text-slate-600">
                                        {member.role}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        {member.institution && <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Building2 className="w-4 h-4" />
                                            <span>{member.institution}</span>
                                        </div>}
                                        {member.country && <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Globe2 className="w-4 h-4" />
                                            <span>{member.country}</span>
                                        </div>}
                                        {member.expertise && member.expertise.length > 0 && (
                                            <div className="flex items-start gap-2 text-sm text-slate-600">
                                                <GraduationCap className="w-4 h-4 mt-1 flex-shrink-0" />
                                                <ScrollArea className="w-full whitespace-normal">
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {member.expertise.map((skill) => (
                                                            <Badge key={skill} variant="secondary" className="font-normal bg-green-700 text-green-50 hover:bg-green-600">
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <ScrollBar orientation="horizontal" />
                                                </ScrollArea>
                                            </div>
                                        )}
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

