"use client"

import { motion } from "framer-motion"

export function DonationImpactCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">{icon}</div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
