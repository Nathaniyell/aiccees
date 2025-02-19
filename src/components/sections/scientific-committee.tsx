import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { GraduationCap, Building2, Globe2, ChevronLeft, ChevronRight } from 'lucide-react'
import { committeeMembers } from "../data_models/scientific-committee-data"
import { Button } from "@/components/ui/button"
import AOS from "../layout/AOS"
import Link from "next/link"
import { useState } from "react"

export default function ScientificCommittee() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 9
    const totalPages = Math.ceil(committeeMembers.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentMembers = committeeMembers.slice(startIndex, endIndex)

    return (
        <AOS>
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl tracking-tighter sm:text-5xl text-center font-bold mb-4 text-green-800">Scientific Committee</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our distinguished committee members bring together expertise from leading institutions worldwide
                            to ensure the highest standards of scientific excellence.
                        </p>
                        <p className="px-4 md:px-0">To become a scientific committee member <Link href="https://forms.gle/bM4SjcfATn8XPAyf7"
                            target="_blank"
                            className="text-green-800 font-medium underline">register here</Link></p>
                    </div>

                    <div className="w-11/12 mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {currentMembers.map((member) => (
                            <Card key={member.id} className="group hover:shadow-lg transition-shadow bg-white border-slate-200">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-slate-800 text-lg">{member.name}</CardTitle>
                                    {member.role && <CardDescription className="font-medium text-slate-600">
                                        {member.role}
                                    </CardDescription>}
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-2">
                                        {member.institution && <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Building2 className="w-4 h-4 flex-shrink-0" />
                                            <span className="line-clamp-1">{member.institution}</span>
                                        </div>}
                                        {member.country && <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Globe2 className="w-4 h-4 flex-shrink-0" />
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

                    {/* Pagination Info and Controls */}
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <p className="text-sm text-slate-600">
                            Showing {startIndex + 1}-{Math.min(endIndex, committeeMembers.length)} of {committeeMembers.length} members
                        </p>
                        <div className="flex justify-center items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-slate-600">
                                Page {currentPage} of {totalPages}
                            </span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </AOS>
    )
}

