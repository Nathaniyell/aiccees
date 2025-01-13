import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building2 } from 'lucide-react'
import { conferenceChairInfo } from "../data_models/conference-chairs"
import AOS from "../layout/AOS"

export default function ConferenceChairs() {
    return (
        <AOS>
            <section className="py-12 bg-white">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl tracking-tighter sm:text-5xl text-center font-bold mb-4 text-green-800">
                            Conference Chairs
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Meet our distinguished conference chairs
                        </p>
                    </div>

                    <div className="w-11/12 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {conferenceChairInfo.map((chair) => (
                            <Card key={chair.id} className="group hover:shadow-lg transition-shadow bg-white border-slate-200">
                                <CardHeader className="text-center pb-4">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src={chair.image} alt={chair.name} />
                                        <AvatarFallback className="bg-white rounded-full border-green-800 border text-slate-600">
                                            {chair.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-slate-800">{chair.name}</CardTitle>
                                    <CardDescription className="font-medium text-green-700">
                                        {chair.role}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                                        <Building2 className="w-4 h-4" />
                                        <span>{chair.school}</span>
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