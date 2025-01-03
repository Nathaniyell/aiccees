import React from 'react'
import { Button } from '../ui/button'
import AOS from '../layout/AOS'
import AnimatedFlowchart from '../animated-flowchart'

const PublishingPapers = () => {
  return (
    <AOS>
    <section id="publish" className="w-full py-12 md:py-24  bg-[#fafafa] space-y-6">
          <div className="container md:w-11/12 mx-auto px-4 md:px-6 mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">Submitting Papers</h2>
            {/* <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-6">
              Share your research with the energy experts, students and researchers across Africa. Submit your papers for a chance to present at the yearly Africa International Conference on Energy and Environmental Studies (AICCEES)
            </p> */}
           
          </div>
          <AnimatedFlowchart />
          <div className="flex justify-center gap-4">
              <Button className="bg-green-800 text-white hover:bg-green-700">Register for conference</Button>
              <Button className="bg-red-600 text-white hover:bg-red-700">Submit Your Paper</Button>
            </div>
        </section>
    </AOS>
  )
}

export default PublishingPapers