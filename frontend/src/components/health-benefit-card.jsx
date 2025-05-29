"use client"

import { motion } from "framer-motion"

export function HealthBenefitCard({ icon, title, description, metric, category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="!group !relative"
    >
      {/* Professional card design */}
      <div className="!relative !bg-white !border !border-slate-200 hover:!border-slate-300 !transition-all !duration-300 !overflow-hidden !h-full">
        {/* Header section */}
        <div className="!p-6">
          <div className="!flex !items-center !justify-between !mb-4">
            <div className="!w-10 !h-10 !bg-red-600 !flex !items-center !justify-center">{icon}</div>
            <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
              {category || "Health Benefit"}
            </div>
          </div>

          <h3 className="!text-lg !font-bold !text-slate-900 !mb-3">{title}</h3>
          <p className="!text-sm !text-slate-600 !leading-relaxed">{description}</p>

          {metric && (
            <div className="!mt-4 !pt-4 !border-t !border-slate-100">
              <div className="!flex !items-center !justify-between">
                <div className="!text-xs !text-slate-500">Key Metric</div>
                <div className="!text-sm !font-semibold !text-slate-700">{metric}</div>
              </div>
            </div>
          )}
        </div>

        {/* Hover effect */}
        <div className="!absolute !inset-0 !bg-gradient-to-r !from-red-500/5 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !pointer-events-none" />
      </div>
    </motion.div>
  )
}
