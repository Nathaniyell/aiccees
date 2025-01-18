'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Upload, CheckCircle2, Users, MessageSquare } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: JSX.Element
  color: 'green' | 'red'
  templateUrl?: string
}

const steps: Step[] = [
  {
    id: 1,
    title: "Prepare Paper",
    description: "Prepare your research paper following the conference template (Download the template attached). \nPlease note that research papers sent in for the conference must be an original research that has neither been published or submitted for publication in any other conference or journal. Additionally it must adhere to our ethical standards outlined in the guidelines attached.",
    icon: <FileText className="h-6 w-6" />,
    color: 'green',
    templateUrl: "/Research_Paper_Template.pdf"
  },
  {
    id: 2,
    title: "Email Submission",
    description: "Send your full research paper by email (aiccees@uniport.edu.ng) to the conference chairs for initial review.",
    icon: <Upload className="h-6 w-6" />,
    color: 'red'
  },
  {
    id: 3,
    title: "Preliminary Review",
    description: "The decision to accept or reject the paper will be shared by email within 3 to 7 working days. Upon acceptance of your paper for further review, an invoice will be sent to you for payment",
    icon: <Users className="h-6 w-6" />,
    color: 'green'
  },
  {
    id: 4,
    title: "Revision Phase",
    description: "Make necessary revisions based on reviewer comments and suggestions.",
    icon: <MessageSquare className="h-6 w-6" />,
    color: 'red'
  },
  {
    id: 5,
    title: "Scientific.net Upload",
    description: "The login details to scientific.net will be shared with you by email. Upload your updated research paper to the scientific.net platform for a comprehensive review by two independent reviewers",
    icon: <Upload className="h-6 w-6" />,
    color: 'green'
  },
  {
    id: 6,
    title: "Reviewer Feedback",
    description: "Comments from the independent reviewers will be communicated through the scientific.net platform for updates",
    icon: <MessageSquare className="h-6 w-6" />,
    color: 'red'
  },
  {
    id: 7,
    title: "Final Submission",
    description: "Updated paper is re-uploaded to the scientific.net platform for final decision",
    icon: <CheckCircle2 className="h-6 w-6" />,
    color: 'green'
  }
]

export default function AnimatedFlowchart() {
  const observer = useRef<IntersectionObserver | null>(null)
  const progressLine = useRef<HTMLDivElement>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')

          // Update progress line height when card becomes visible
          if (progressLine.current) {
            const cards = document.querySelectorAll('.step-card')
            let visibleCards = 0
            cards.forEach(card => {
              if (card.classList.contains('show')) visibleCards++
            })
            const progress = (visibleCards / cards.length) * 100
            progressLine.current.style.height = `${progress}%`
          }
        }
      })
    }, {
      threshold: 0.5
    })

    const cards = document.querySelectorAll('.step-card')
    cards.forEach((card) => {
      observer.current?.observe(card)
    })

    return () => {
      observer.current?.disconnect()
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full max-w-5xl mx-auto px-4 py-20 bg-[#fafafa]">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100">
        <div
          ref={progressLine}
          className="absolute top-0 w-[1.5px] rounded-full bg-gradient-to-b from-emerald-700 to-rose-700 transition-all duration-700 ease-in-out"
          style={{ height: '0%' }}
        />
      </div>

      {/* Steps */}
      <div className="relative space-y-24 overflow-x-hidden">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step-card opacity-0 transition-all duration-700 ease-in-out
              ${index % 2 === 0 ?
                'translate-x-[-50%] md:translate-x-[-20%]' :
                'translate-x-[50%] md:translate-x-[20%]'
              }
              ${index % 2 === 0 ?
                'md:mr-auto md:ml-0' :
                'md:ml-auto md:mr-0'
              }
              max-w-md relative`}
          >
            <Card className="border-2 border-transparent hover:border-2 hover:border-opacity-50 transition-colors duration-300
              hover:shadow-lg
              ${step.color === 'green' ? 'hover:border-emerald-500' : 'hover:border-rose-500'}">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`rounded-full p-2 
                  ${step.color === 'green' ?
                    'bg-emerald-50 text-emerald-500' :
                    'bg-rose-50 text-rose-500'
                  }`}>
                  {step.icon}
                </div>
                <CardTitle className={
                  step.color === 'green' ? 'text-emerald-700' : 'text-rose-700'
                }>
                  Step {step.id}: {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
                {step.id === 1 && (
                  <a
                    href={step.templateUrl}
                    target="_blank"
                    download={step.templateUrl}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    Download Template
                  </a>
                )}
              </CardContent>
            </Card>

            {/* Connection dot */}
            <div className={`absolute top-1/2 h-4 w-4 rounded-full
              ${step.color === 'green' ? 'bg-emerald-500' : 'bg-rose-500'}
              ${index % 2 === 0 ?
                'right-0 translate-x-1/2' :
                'left-0 -translate-x-1/2'
              }
              -translate-y-1/2 md:block hidden`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

