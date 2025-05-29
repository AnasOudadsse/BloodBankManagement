"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle } from "lucide-react"

export function MythFactCard({ myth, fact }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
    >
      <div className="p-6 bg-red-50 border-b border-red-100">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Myth</h4>
            <p className="text-gray-700">{myth}</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-green-50">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Fact</h4>
            <p className="text-gray-700">{fact}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
