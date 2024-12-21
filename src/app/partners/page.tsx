import { Partners } from "@/components/partners"
import { PartnerForm } from "@/components/partners"

export default function PartnersPage() {
    return (
        <div className="container mx-auto py-12 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto space-y-16">
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-green-700 tracking-tighter sm:text-5xl">
                        Our Partners
                    </h1>
                    <p className="text-slate-500 text-lg max-w-[600px] mx-auto">
                        Join our growing network of industry leaders and innovators who are shaping the future together.
                    </p>
                </section>

                <Partners />

                <section className="space-y-8 rounded-2xl border bg-white p-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Become a Partner
                        </h2>
                        <p className="text-slate-500">
                            Fill out the form below to start your partnership journey with us.
                        </p>
                    </div>
                    <PartnerForm />
                </section>
            </div>
        </div>
    )
}

