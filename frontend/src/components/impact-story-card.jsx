"use client";

import { motion } from "framer-motion";
import { Calendar, User, Activity, ArrowRight } from "lucide-react";

export function ImpactStoryCard({ name, age, image, title, bloodType, story }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="!group"
    >
      <div className="!grid !grid-cols-1 lg:!grid-cols-12 !gap-8 !border !border-slate-200 !bg-white">
        {/* Professional image container */}
        <div className="lg:!col-span-4 !relative !overflow-hidden">
          <div className="!absolute !inset-0 !bg-slate-100 !z-0" />
          <img
            src={image || "/placeholder.svg?height=400&width=300&query=person"}
            alt={name}
            className="!w-full !h-full !object-cover !relative !z-10"
          />
          <div className="!absolute !top-0 !left-0 !bg-red-600 !text-white !px-4 !py-2 !text-xs !font-semibold !uppercase !tracking-wider">
            Case Study
          </div>
        </div>

        {/* Professional content */}
        <div className="lg:!col-span-8 !p-8">
          <div className="!flex !flex-col !h-full">
            {/* Header */}
            <div className="!mb-6">
              <div className="!flex !items-center !justify-between !mb-4">
                <div className="!flex !items-center !gap-3">
                  <div className="!w-8 !h-8 !bg-slate-100 !flex !items-center !justify-center !text-xs !font-bold !text-slate-600">
                    {bloodType}
                  </div>
                  <span className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                    {title}
                  </span>
                </div>
                <div className="!flex !items-center !gap-1 !text-xs !font-semibold !text-green-600">
                  <Activity className="!h-3 !w-3" />
                  <span>Recovery: 100%</span>
                </div>
              </div>

              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-1">
                {name}
              </h3>
              <div className="!flex !items-center !gap-4 !text-sm !text-slate-500">
                <div className="!flex !items-center !gap-1">
                  <User className="!h-4 !w-4" />
                  <span>Age: {age}</span>
                </div>
                <div className="!w-1 !h-1 !bg-slate-300 !rounded-full" />
                <div className="!flex !items-center !gap-1">
                  <Calendar className="!h-4 !w-4" />
                  <span>Treatment: Complete</span>
                </div>
              </div>
            </div>

            {/* Professional story presentation */}
            <div className="!mb-6 !flex-1">
              <div className="!border-l-2 !border-slate-200 !pl-6">
                <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider !mb-2">
                  Patient Statement
                </div>
                <p className="!text-slate-700 !leading-relaxed">{story}</p>
              </div>
            </div>

            {/* Professional footer */}
            <div className="!pt-6 !border-t !border-slate-100">
              <div className="!flex !items-center !justify-between">
                <div className="!flex !items-center !gap-3">
                  <div className="!px-3 !py-1 !bg-slate-100 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                    Blood Recipient
                  </div>
                  <span className="!text-xs !text-slate-500">
                    Documented: 2023
                  </span>
                </div>
                <button className="!flex !items-center !gap-2 !text-sm !font-semibold !text-red-600 hover:!text-red-700 !transition-colors !duration-200 !group">
                  Read Full Case Study
                  <ArrowRight className="!h-4 !w-4 !transition-transform group-hover:!translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
