import { Partners } from "@/components/partners"
import PartnershipPackages from "@/components/partnership-packages"


export default function PartnersPage() {
    return (
        <div className="container mx-auto py-12 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-green-700 tracking-tighter sm:text-5xl">
                        Partnership Opportunities
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Organisations, companies, groups, and individuals are invited to partner with the conference organisers for this conference by selecting any of the sponsorship packages listed below. 
                    </p>
                </section>
                <section>
                                     <PartnershipPackages />
                </section>
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-center">Our Partners</h2>
                    <Partners />
                </section>

                <section className="space-y-8 rounded-2xl border bg-white p-8 text-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Ready to Become a Partner?
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Take the first step towards a meaningful partnership. Fill out our partnership form and join our community of industry leaders and innovators.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://docs.google.com/forms/d/1UmXabWk7VkBlHPvO4zLtU4Ww87m1ci4VDrM1311FiFI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-700 hover:bg-green-600 rounded-md transition-colors"
                            >
                                Apply for Partnership
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

