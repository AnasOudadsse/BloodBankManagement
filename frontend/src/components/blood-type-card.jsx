"use client"

import { motion } from "framer-motion"

export function BloodTypeCard({ type, percentage, urgency }) {
  const getUrgencyColor = () => {
    switch (urgency) {
      case "critical":
        return "bg-red-600 text-white"
      case "high":
        return "bg-orange-500 text-white"
      case "medium":
        return "bg-yellow-500 text-white"
      case "low":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getUrgencyLabel = () => {
    switch (urgency) {
      case "critical":
        return "Critical Need"
      case "high":
        return "High Need"
      case "medium":
        return "Medium Need"
      case "low":
        return "Low Need"
      default:
        return "Standard Need"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-3xl font-bold text-gray-900">{type}</h3>
          <div className="text-sm font-medium text-gray-500">{percentage}%</div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-red-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>

        <div className={`text-xs font-medium px-2 py-1 rounded-md inline-block ${getUrgencyColor()}`}>
          {getUrgencyLabel()}
        </div>
      </div>
    </motion.div>
  )
}
