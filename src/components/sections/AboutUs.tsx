import Image from 'next/image'
import React from 'react'
import { aicess } from '../data_models/conferences'
import AOS from '../layout/AOS'
import { aboutAiccees } from '../data_models/about-aiccees'

const AboutUs = () => {
    return (
      <AOS>
        <section id="about" className="w-full py-12 md:py-24">
            <div className="flex container md:w-11/12 mx-auto flex-col md:flex-row justify-center">
                <div className="md:w-3/4 px-4 md:px-6 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">About AICCEES</h2>
                    {aboutAiccees.map((paragraph, index) => (
                        <p key={index} className="text-gray-600 md:text-base/relaxed text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="w-full lg:w-[45%] grid grid-cols-2 gap-y-4 lg:gap-y-0 mt-4 lg:mt-0">
      {aicess["aicessStats"].map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between md:justify-end items-center gap-2"
        >
          <Image alt="Logo" src={item.logo} />
          <h1 className="text-4xl font-bold">{item.number}</h1>
          <p className="text-[12px] text-primary">{item.description}</p>
        </div>
      ))}
    </div>
            </div>
        </section>
      </AOS>
    )
}

export default AboutUs