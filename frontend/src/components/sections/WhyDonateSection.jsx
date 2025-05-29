"use client"

import { motion } from "framer-motion"
import { Activity, TrendingUp, Shield } from "lucide-react"

export function WhyDonateSection() {
  return (
    <section className="!py-24 !bg-white !relative !overflow-hidden">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

      <div className="!container !mx-auto !px-6 lg:!px-8 !relative">
        {/* Professional header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="!mb-16"
        >
          <div className="!flex !items-center !gap-3 !mb-6">
            <div className="!w-1 !h-8 !bg-red-600" />
            <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
              Strategic Benefits
            </span>
          </div>
          <h2 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !max-w-4xl">
            Why Strategic Blood Donation Programs Matter
          </h2>
          <p className="!text-lg !text-slate-600 !max-w-2xl">
            Evidence-based benefits of participating in systematic blood donation initiatives for healthcare
            infrastructure and community resilience.
          </p>
        </motion.div>

        {/* Professional benefits grid */}
        <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8 !max-w-7xl !mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="!group !relative"
          >
            {/* Professional card design */}
            <div className="!relative !bg-white !border !border-slate-200 hover:!border-slate-300 !transition-all !duration-300 !overflow-hidden">
              {/* Header section */}
              <div className="!p-6 !border-b !border-slate-100">
                <div className="!flex !items-center !justify-between !mb-4">
                  <div className="!flex !items-center !gap-3">
                    <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center">
                      <Activity className="!h-5 !w-5 !text-white" strokeWidth={2} />
                    </div>
                    <span className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                      Healthcare Impact
                    </span>
                  </div>
                  <div className="!flex !items-center !gap-1 !text-xs !font-semibold !text-green-600">
                    <TrendingUp className="!h-3 !w-3" />
                    Critical
                  </div>
                </div>

                <h3 className="!text-xl !font-bold !text-slate-900 !mb-3">Patient Care Enhancement</h3>
                <p className="!text-sm !text-slate-600 !leading-relaxed">
                  Systematic donation programs ensure consistent blood supply for emergency procedures, surgical
                  operations, and ongoing medical treatments requiring transfusions.
                </p>
              </div>

              {/* Data section */}
              <div className="!p-6 !bg-slate-50/50">
                <div className="!flex !items-center !justify-between">
                  <div className="!text-xs !text-slate-500">Impact Level: High</div>
                  <div className="!text-xs !font-semibold !text-slate-700">3 Lives/Donation</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="!absolute !inset-0 !bg-gradient-to-r !from-red-500/5 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="!group !relative"
          >
            {/* Professional card design */}
            <div className="!relative !bg-white !border !border-slate-200 hover:!border-slate-300 !transition-all !duration-300 !overflow-hidden">
              {/* Header section */}
              <div className="!p-6 !border-b !border-slate-100">
                <div className="!flex !items-center !justify-between !mb-4">
                  <div className="!flex !items-center !gap-3">
                    <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center">
                      <TrendingUp className="!h-5 !w-5 !text-white" strokeWidth={2} />
                    </div>
                    <span className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                      Community Resilience
                    </span>
                  </div>
                  <div className="!flex !items-center !gap-1 !text-xs !font-semibold !text-blue-600">
                    <Shield className="!h-3 !w-3" />
                    Strategic
                  </div>
                </div>

                <h3 className="!text-xl !font-bold !text-slate-900 !mb-3">Infrastructure Strengthening</h3>
                <p className="!text-sm !text-slate-600 !leading-relaxed">
                  Regular donation participation builds robust healthcare infrastructure, ensuring emergency
                  preparedness and sustainable medical resource management for communities.
                </p>
              </div>

              {/* Data section */}
              <div className="!p-6 !bg-slate-50/50">
                <div className="!flex !items-center !justify-between">
                  <div className="!text-xs !text-slate-500">Network Coverage: 500+ Centers</div>
                  <div className="!text-xs !font-semibold !text-slate-700">24/7 Availability</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="!absolute !inset-0 !bg-gradient-to-r !from-red-500/5 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="!group !relative"
          >
            {/* Professional card design */}
            <div className="!relative !bg-white !border !border-slate-200 hover:!border-slate-300 !transition-all !duration-300 !overflow-hidden">
              {/* Header section */}
              <div className="!p-6 !border-b !border-slate-100">
                <div className="!flex !items-center !justify-between !mb-4">
                  <div className="!flex !items-center !gap-3">
                    <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center">
                      <Shield className="!h-5 !w-5 !text-white" strokeWidth={2} />
                    </div>
                    <span className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                      Corporate Responsibility
                    </span>
                  </div>
                  <div className="!flex !items-center !gap-1 !text-xs !font-semibold !text-purple-600">
                    <Activity className="!h-3 !w-3" />
                    Enterprise
                  </div>
                </div>

                <h3 className="!text-xl !font-bold !text-slate-900 !mb-3">Organizational Impact</h3>
                <p className="!text-sm !text-slate-600 !leading-relaxed">
                  Corporate blood donation programs demonstrate social responsibility, enhance employee engagement, and
                  contribute to measurable community health outcomes and organizational reputation.
                </p>
              </div>

              {/* Data section */}
              <div className="!p-6 !bg-slate-50/50">
                <div className="!flex !items-center !justify-between">
                  <div className="!text-xs !text-slate-500">CSR Compliance: 100%</div>
                  <div className="!text-xs !font-semibold !text-slate-700">ROI: Positive</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="!absolute !inset-0 !bg-gradient-to-r !from-red-500/5 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="!mt-16 !border-t !border-slate-200 !pt-12"
        >
          <div className="!flex !flex-col md:!flex-row md:!items-center !justify-between !gap-6">
            <div>
              <h3 className="!text-xl !font-bold !text-slate-900 !mb-2">Join Strategic Donation Network</h3>
              <p className="!text-slate-600">
                Participate in evidence-based donation programs with measurable community impact.
              </p>
            </div>
            <div className="!flex !flex-col sm:!flex-row !gap-4">
              <button className="!px-6 !py-3 !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !transition-colors !duration-200">
                Schedule Assessment
              </button>
              <button className="!px-6 !py-3 !border !border-slate-300 hover:!border-slate-400 !text-slate-700 !font-semibold !transition-colors !duration-200">
                Download Program Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
