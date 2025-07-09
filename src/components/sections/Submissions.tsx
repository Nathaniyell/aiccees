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
    text: "Full Paper Submission",
    date: "Jan. 1st 2025",
    description: "Submission portal opens for all participants",
    icon: Calendar,
  },
  {
    id: 2,
    status: "amber",
    text: "Full Paper Submission Deadline",
    date: "July 31st 2025",
    description: "Final deadline for all research paper submissions",
    icon: Calendar,
  },
  {
    id: 3,
    status: "green",
    text: "Conference Date",
    date: "Sept. 25th & 26th 2025",
    description: "Two days of inspiring presentations, networking, and exhibitions",
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
                className="text-green-300 text-base tracking-wider uppercase "
              >
                AICCEES 2025 - <span className="normal-case">3rd Edition</span>
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
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-green-300">
                      <item.icon className="w-4 h-4" />
                      <p className="text-sm">{item.date}</p>
                    </div>
                    {item.description && (
                      item.id === 4 ? (
                        <>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                        <p className="text-gray-200 text-sm">
                          Virtual Attendance via Zoom
                        </p>
                        </>
                      ) : (
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-6 mt-10"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Conference Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                <div className="space-y-4">
                  <h4 className="text-white text-lg font-semibold">2024 Documents</h4>
                  <div className="flex flex-col gap-4">
                    <Link
                      target="_blank"
                      href="/Book_of_abstracts.pdf"
                      download="Book_of_abstracts.pdf"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors group border-emerald-400"
                      >
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        2024 Conference Brochure
                      </Button>
                    </Link>
                    <Link
                      href="/2024-Conference-Report.pdf"
                      download="2024-Conference-Report.pdf"
                      target="_blank"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-white/90 text-green-900 hover:bg-white transition-colors group border-green-400"
                      >
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        2024 Conference Report
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white text-lg font-semibold">Conference Proceedings</h4>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="https://www.scientific.net/AST.160?utm_source=AST160&utm_medium=email&utm_campaign=AST160_authors&utm_id=AST160"
                      target="_blank"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors group border-emerald-400"
                      >
                       
                        2nd Edition (2024) Proceedings
                      </Button>
                    </Link>
                    <Link
                      href="https://www.scientific.net/book/africa-international-conference-on-clean-energy-and-energy-storage/978-3-0357-3771-4"
                      target="_blank"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-white/90 text-green-900 hover:bg-white transition-colors group border-green-400"
                      >
                       
                        1st Edition (2023) Proceedings
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AOS>
  )
}

export default Submissions