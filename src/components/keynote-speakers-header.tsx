import { Sparkles } from 'lucide-react'

export default function KeynoteHeader() {
  return (
    <div className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--muted)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Meet Our Keynote Speakers
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Industry leaders and visionaries sharing insights that will shape the future of technology
          </p>
        </div>
      </div>
    </div>
  )
}

