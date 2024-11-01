"use client"
import { Card, CardHeader, CardTitle } from '../ui/card'
import { deets } from '../data_models/conferences'
import Image from 'next/image'

const ConferenceThemes = () => {
  return (
    <section id="themes" className="w-full py-12 md:py-24">
    <div className="w-11/12 mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">2024 AICCEES Conference</h2>
      <p className="text-center text-gray-500 mb-8"> The scope of the 2024 conference includes contemporary and original research, as well as innovative solutions for the clean energy sector and energy storage systems. Manuscripts which cut across the conference sub-themes should be between 6 to 12 pages, including references. Once submitted, papers are promptly forwarded to our reviewers, with decisions typically provided within 48 hours. The sub-themes are:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deets.map((theme) => (
          <Card key={theme.text} className={`border ${theme.color}`}>
            <CardHeader>
              <Image className={`w-8 h-8 mb-2`}  src={theme.image} alt={theme.text}/>
              <CardTitle className={`${theme.textColor}`} >{theme.text}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ConferenceThemes