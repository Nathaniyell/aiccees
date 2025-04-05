import React from 'react'
import { Button } from '../ui/button'
import AOS from '../layout/AOS'
import AnimatedFlowchart from '../animated-flowchart'
import Link from 'next/link'
import { registrationLink } from '../data_models/conferences'

const PublishingPapers = () => {
  return (
    <AOS>
      <section id="submissions"  className="w-full py-12 md:py-24  bg-white space-y-6">
        <div className="container md:w-11/12 mx-auto px-4 md:px-6 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">Submitting Papers</h2>
          {/* <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-6">
              Share your research with the energy experts, students and researchers across Africa. Submit your papers for a chance to present at the yearly Africa International Conference on Energy and Environmental Studies (AICCEES)
            </p> */}

        </div>
        <AnimatedFlowchart />
        <AOS>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 md:px-0">
          <Button asChild className="bg-green-800 text-white hover:bg-green-700">
            <Link target="_blank" href={registrationLink}>Register for conference</Link>
          </Button>
          <Link
            href="mailto:aiccees@uniport.edu.ng"
            target="_blank"
            className="bg-red-600 text-white hover:bg-red-700 rounded-md px-4 py-2 text-sm font-medium h-10 inline-flex items-center justify-center"
          >
            Submit Your Paper
          </Link>
        </div>
        </AOS>
      </section>
    </AOS>
  )
}

export default PublishingPapers