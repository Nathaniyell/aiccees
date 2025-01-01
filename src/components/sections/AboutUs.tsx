import Image from 'next/image'
import React from 'react'
import { aicess } from '../data_models/conferences'
import AOS from '../layout/AOS'

const AboutUs = () => {
    return (
      <AOS>
        <section id="about" className="w-full py-12 md:py-24">
            <div className="flex container md:w-11/12 mx-auto flex-col md:flex-row justify-center">
                <div className="md:w-3/4 px-4 md:px-6 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">About AICCEES</h2>
                    <p className="text-gray-600 md:text-base/relaxed text-justify">
                        More than 600 million people in Sub-Saharan Africa are living without electricity according to World Bank research. While countries in the African continent are committed to achieving SDG7 which is ensuring access to affordable, reliable, sustainable, and modern energy for all by 2030, various studies have shown that the major challenges in the renewable energy sector include the high cost of renewable energy solutions, the lack of knowledge about them, the absence of technologies that are suitable to the local context, low research and development efforts, and technical skills gap in the field of clean energy.
                    </p>
                    <p className="text-gray-600 md:text-base/relaxed text-justify">
                    In order to achieve the Sustainable Development Goals in Africa, effective collaboration between academia and industry is necessary to create a sustainable and transformative win-win situation for all stakeholders. However, research conducted by African institutions addressing the unique challenges faced by the continent often ends up in academic libraries with little or no impact on society. To address this issue, the Africa International Conference on Clean Energy and Energy Storage (AICCEES) aims to bring together researchers and industry experts to share knowledge and discuss innovative solutions for the clean energy transition in Africa. The conference will feature industry leaders, experts, researchers, government agencies, regulators, multilateral organizations, industry bodies, and more in the field of clean energy and energy storage.
                    </p>
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