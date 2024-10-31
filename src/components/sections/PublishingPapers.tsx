import React from 'react'
import { Button } from '../ui/button'

const PublishingPapers = () => {
  return (
    <section className="w-full py-12 md:py-24  bg-green-50">
          <div className="w-11/12 mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">Publishing Papers</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-6">
              Share your research with the energy experts, students and researchers across Africa community. Submit your papers for a chance to present at AICCEES 2024.
            </p>
            <div className="flex justify-center">
              <Button className="bg-red-600 text-white hover:bg-red-700">Submit Your Paper</Button>
            </div>
          </div>
        </section>

  )
}

export default PublishingPapers