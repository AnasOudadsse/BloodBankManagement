"use client"

import { motion } from "framer-motion"
import { Clock, Calendar } from "lucide-react"

export function DonationTypeCard({ title, icon, description, time, frequency }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4 text-red-600" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-red-600" />
          <span>{frequency}</span>
        </div>
      </div>
    </motion.div>
  )
}
