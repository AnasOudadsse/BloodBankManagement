"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function TestimonialCard({ content, name, title, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 relative border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="absolute top-6 right-6 text-red-100">
        <Quote className="h-10 w-10" />
      </div>

      <p className="text-gray-700 mb-8 relative z-10 text-lg">"{content}"</p>

      <div className="flex items-center">
        <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-red-100">
          <img
            src={image || "/placeholder.svg?height=56&width=56&query=person"}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-red-600">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}
