import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { currentCommitteeMembers, previousCommitteeMembers } from "../data_models/scientific-committee-data"
import { Button } from "@/components/ui/button"
import AOS from "../layout/AOS"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ScientificCommittee() {
    const [activeTab, setActiveTab] = useState<"current" | "previous">("current")
    const [currentPage, setCurrentPage] = useState(1)

    const members = activeTab === "current" ? currentCommitteeMembers : previousCommitteeMembers
    const itemsPerPage = 10
    const totalPages = Math.ceil(members.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentMembers = members.slice(startIndex, endIndex)

    return (
        <AOS>
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl tracking-tighter sm:text-5xl font-bold mb-4 text-green-800">
                            Scientific Committee
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our distinguished committee members bring together expertise from leading institutions worldwide
                            to ensure the highest standards of scientific excellence.
                        </p>
                    </div>

                    {/* Tabs for switching */}
                    <div className="flex justify-center gap-4 mb-6">
                        <Button
                            variant={activeTab === "current" ? "default" : "outline"}
                            onClick={() => {
                                setActiveTab("current")
                                setCurrentPage(1)
                            }}
                        >
                            Current Members
                        </Button>
                        <Button
                            variant={activeTab === "previous" ? "default" : "outline"}
                            onClick={() => {
                                setActiveTab("previous")
                                setCurrentPage(1)
                            }}
                        >
                            Previous Members
                        </Button>
                    </div>

                    {/* Table */}
                    <div className="w-11/12 lg:w-9/12 mx-auto">
                        <div className="border bg-white">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-black">Name</TableHead>
                                        <TableHead className="text-black">Country</TableHead>
                                        <TableHead className="text-black">Area of Expertise</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {currentMembers.map((member) => (
                                        <TableRow key={member.id}>
                                            <TableCell className="font-medium text-lg space-y-2">
                                                {member.name}
                                                <p className="text-sm text-slate-600">{member.role}</p>
                                                <p className="text-sm text-slate-600 break-words md:w-3/5">{member.institution}</p>
                                            </TableCell>
                                            <TableCell>{member.country}</TableCell>
                                            <TableCell>
                                                {member.expertise?.length > 0 && (
                                                    <ScrollArea className="w-full max-w-[300px] whitespace-normal">
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {member.expertise.map((skill) => (
                                                                <Badge
                                                                    key={skill}
                                                                    variant="secondary"
                                                                    className="font-normal text-green-700"
                                                                >
                                                                    {skill}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal" />
                                                    </ScrollArea>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-col items-center gap-4 mt-8">
                            <p className="text-sm text-slate-600">
                                Showing {startIndex + 1}-{Math.min(endIndex, members.length)} of {members.length} members
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
                </div>
            </section>
        </AOS>
    )
}
