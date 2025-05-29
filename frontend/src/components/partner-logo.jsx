"use client"

import { motion } from "framer-motion"

export function PartnerLogo({ name, image }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <img
        src={image || `/placeholder.svg?height=60&width=120&query=${name}`}
        alt={name}
        className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
      />
    </motion.div>
  )
}
