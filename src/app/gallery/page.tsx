import { conferenceImages } from "@/components/data_models/conference-images";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function GalleryPage() {
    return (
        <main className="container mx-auto py-16 px-4">
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-green-700">Conference Gallery</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore moments captured during our conference sessions, presentations, and cooking demonstrations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conferenceImages.map((image, index) => (
                        <Card key={index} className="group overflow-hidden transition-all hover:shadow-xl">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-medium">{image.alt}</p>
                                    </div> */}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
