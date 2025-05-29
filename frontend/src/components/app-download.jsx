"use client"

import { motion } from "framer-motion"

export function AppDownload() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
      >
        <div className="text-3xl">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.71 19.5c-.83 1.2-1.71 2-2.71 2H8c-1 0-1.88-.8-2.71-2"></path>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M16.83 15.67a8 8 0 0 1-9.66 0"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Download on the</span>
          <span className="text-lg font-semibold leading-tight">App Store</span>
        </div>
      </motion.a>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
      >
        <div className="text-3xl">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs">GET IT ON</span>
          <span className="text-lg font-semibold leading-tight">Google Play</span>
        </div>
      </motion.a>
    </div>
  )
}
