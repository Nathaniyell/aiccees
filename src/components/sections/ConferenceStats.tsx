"use client"

import { motion } from "framer-motion"
import { Youtube, BookText, FileText } from "lucide-react"

import { ConferenceMaterials } from "./ConferenceMaterials"
import { containerVariants, itemVariants } from "../data_models/conferences"
import KeynoteHeader from "../keynote-speakers-header"
import { keynoteSpeakers2023 } from "../data_models/keynote-speakers"
import KeynoteSpeaker from "../keynote-speakers"





export default function ConferenceStats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-700 to-green-900">
      <div className="container md:w-11/12 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-white"
            >
              AICCEES 2023
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed text-center mb-6"
            >
              The 1st edition of the Africa International Conference on Clean Energy and Energy Storage (AICCEES) 2023 brought together researchers, industry experts, and innovators from around the world.
            </motion.p>
          </div>
          <KeynoteHeader title="Keynote speakers for the 2023 conference" />

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
          >
            {keynoteSpeakers2023.map((speaker) => (
              <KeynoteSpeaker key={speaker.name} {...speaker} />
            ))}

          </motion.div>
          <ConferenceMaterials
            year={2023}
            materials={materials}
          />

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-gray-100 italic">
              {/* Join us this year as we aim to make an even bigger impact! */}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 