import { Partners } from "@/components/partners"
import PartnershipPackages from "@/components/partnership-packages"


export default function PartnersPage() {
    return (
        <div className="container mx-auto py-12 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto space-y-16">
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-green-700 tracking-tighter sm:text-5xl">
                    Partnership Opportunities
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Join us as a sponsor and connect with leading researchers and industry professionals
                    </p>
                </section>
                <PartnershipPackages />

                <Partners />

                <section className="space-y-8 rounded-2xl border bg-white p-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Become a Partner
                        </h2>
                        <p className="text-slate-500">
                            To start your partnership journey with us  <a href="https://forms.gle/" className="text-green-700 hover:text-green-600">please visit this link</a>.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

