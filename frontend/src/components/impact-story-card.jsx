"use client"

import { motion } from "framer-motion"
import { Droplet } from "lucide-react"

export function ImpactStoryCard({ name, age, image, title, story, bloodType }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="md:col-span-1 h-full">
        <div className="relative h-full min-h-[300px] md:min-h-full">
          <img
            src={image || "/placeholder.svg?height=400&width=300&query=person"}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center gap-2">
              <Droplet className="h-5 w-5 text-red-500" fill="currentColor" />
              <span className="text-white font-bold">{bloodType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {name}, {age}
          </h3>
          <p className="text-red-600 font-medium mb-4">{title}</p>

          <blockquote className="border-l-4 border-red-200 pl-4 italic text-gray-700 mb-6">{story}</blockquote>

          <div className="flex justify-end">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
              <span className="text-sm text-red-700 font-medium">Blood recipient</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
