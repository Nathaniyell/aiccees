"use client"
import { motion } from 'framer-motion'
const AOS = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className=""
  >
    {children}
  </motion.div>
  )
}

export default AOS