import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
             Africa International Conference on Clean Energy & Energy Storage
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Empowering Africa’s Future Through Clean Energy Innovation and Sustainable Storage Solutions
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-red-600 text-white hover:bg-red-700">Register Now</Button>
            <Button variant="outline" className="!text-green-600 border-white hover:bg-white hover:!text-green-700">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
} 