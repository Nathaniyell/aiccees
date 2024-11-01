"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Calendar, Download, Circle, MapPin } from "lucide-react"
import AOS from "../layout/AOS"

const info = [
  {
    id: 1,
    status: "red",
    text: "Abstract/Full Paper Submission",
    date: "Feb. 1st 2024",
    description: "Submission portal opens for all participants",
    icon: Calendar,
  },
  {
    id: 2,
    status: "amber",
    text: "Abstract/Full Paper Submission Deadline",
    date: "Aug. 31st 2024",
    description: "Final deadline for all paper submissions",
    icon: Calendar,
  },
  {
    id: 3,
    status: "green",
    text: "Conference Date",
    date: "Sept. 26th & 27th 2024",
    description: "Two days of inspiring presentations and networking",
    icon: Calendar,
  },
  {
    id: 4,
    status: "black",
    text: "Conference Venue",
    date: "Institute of Petroleum and Energy Studies",
    description: "University of Port Harcourt, Rivers State, Nigeria",
    icon: MapPin,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Helper function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case 'red':
      return 'text-red-500'
    case 'amber':
      return 'text-amber-500'
    case 'green':
      return 'text-green-400'
    case 'black':
      return 'text-black'
    default:
      return 'text-gray-400'
  }
}

function Submissions() {
  return (
    <AOS>
    <section className="w-full bg-gradient-to-b from-green-900 to-green-800 py-16">
      <div className="container md:w-11/12 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <motion.p 
              variants={itemVariants}
              className="text-green-300 text-base tracking-wider uppercase"
            >
              AICCEES 2024
            </motion.p>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-header"
            >
              Call for Papers
            </motion.h2>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12"
          >
            {info.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Circle 
                      className={`w-6 h-6 ${getStatusColor(item.status)} animate-pulse`}
                      fill="currentColor"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold leading-tight">
                      {item.text}
                    </h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-300">
                    <item.icon className="w-4 h-4" />
                    <p className="text-sm">{item.date}</p>
                  </div>
                  {item.description && (
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <Link
              href="https://drive.google.com/uc?export=download&id=1ELqJouaYKzQEUku8cHR0K_rup48C5I0B"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-green-900 hover:bg-green-50 transition-colors group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Brochure
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </AOS>
  )
}

export default Submissions