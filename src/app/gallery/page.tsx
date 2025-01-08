import { conferenceImages, cookingImages } from "@/components/data_models/conference-images";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10 px-2">
            <div className="space-y-16">
                <div className="text-center space-y-4 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-red-700" />
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600 pt-8">
                        Event Gallery
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
                        Explore moments captured during our conference sessions, presentations, and cooking demonstrations
                    </p>
                </div>

                <section className="space-y-8">
                    <h2 className="text-2xl text-center font-semibold relative inline-block left-1/2 -translate-x-1/2">
                        <span className="bg-green-600 text-white px-6 py-2 rounded-full">Conference Highlights</span>
                    </h2>
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {conferenceImages.map((image, index) => (
                            <Card key={index} className="group overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {/* <p className="text-sm font-medium">{image.alt}</p> */}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-center relative">
                        <span className="bg-white text-green-700 px-2 md:px-8 py-3 rounded-lg shadow-lg border-2 border-green-600">
                            Cooking Demonstrations
                        </span>
                    </h2>
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cookingImages.map((image, index) => (
                            <Card key={index} className="group overflow-hidden transition-all hover:shadow-2xl rounded-xl">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {/* <p className="text-sm font-medium">{image.alt}</p> */}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
