"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle, Shield, AlertTriangle, FileCheck } from "lucide-react"

const requirements = {
  eligible: [
    { text: "Age between 18-65 years", category: "Demographics" },
    { text: "Weight at least 50kg", category: "Physical" },
    { text: "Good general health", category: "Medical" },
    { text: "No recent major surgery", category: "Medical History" },
    { text: "No recent tattoos or piercings", category: "Risk Assessment" },
    { text: "No recent travel to high-risk areas", category: "Travel History" },
  ],
  ineligible: [
    { text: "Active infection or illness", category: "Current Health" },
    { text: "Certain chronic conditions", category: "Medical History" },
    { text: "Recent blood donation (within 56 days)", category: "Donation History" },
    { text: "Pregnancy or recent childbirth", category: "Reproductive Health" },
    { text: "Certain medications", category: "Pharmaceutical" },
    { text: "Low iron levels", category: "Blood Chemistry" },
  ],
}

export function EligibilitySection() {
  return (
    <section className="!py-24 !bg-white !relative !overflow-hidden">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

      {/* Creative geometric elements */}
      <div className="!absolute !top-20 !left-20 !w-1 !h-32 !bg-green-200 !transform !rotate-12" />
      <div className="!absolute !top-40 !right-40 !w-1 !h-24 !bg-red-200 !transform !-rotate-12" />
      <div className="!absolute !bottom-40 !right-20 !w-2 !h-28 !bg-slate-200 !transform !rotate-45" />

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
              Eligibility Assessment
            </span>
          </div>
          <h2 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !max-w-4xl">
            Professional Donation Eligibility Criteria
          </h2>
          <p className="!text-lg !text-slate-600 !max-w-2xl">
            Comprehensive eligibility requirements based on FDA guidelines and international safety standards to ensure
            donor and recipient safety.
          </p>
        </motion.div>

        {/* Creative dual-panel layout */}
        <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-12 !max-w-7xl !mx-auto">
          {/* Eligible criteria */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="!group !relative"
          >
            {/* Creative card design */}
            <div className="!relative !bg-white !border-2 !border-green-200 hover:!border-green-300 !transition-all !duration-500 !overflow-hidden">
              {/* Angled header */}
              <div className="!relative !bg-gradient-to-r !from-green-500 !to-green-600 !p-6 !transform !-skew-y-1 !-mt-1 !mb-4">
                <div className="!transform !skew-y-1">
                  <div className="!flex !items-center !gap-4 !mb-2">
                    <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                      <CheckCircle2 className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="!text-xl !font-bold !text-white">Eligible Criteria</h3>
                      <div className="!text-xs !text-white/80 !uppercase !tracking-wider">Requirements Met</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="!px-6 !pb-6">
                <div className="!space-y-4">
                  {requirements.eligible.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="!group/item !relative"
                    >
                      <div className="!flex !items-start !gap-4 !p-4 !bg-green-50 !border-l-4 !border-green-400 hover:!bg-green-100 !transition-colors !duration-300">
                        <CheckCircle2 className="!h-5 !w-5 !text-green-500 !mt-0.5 !flex-shrink-0" strokeWidth={2} />
                        <div className="!flex-1">
                          <div className="!text-sm !font-medium !text-slate-900 !mb-1">{item.text}</div>
                          <div className="!text-xs !text-slate-500 !uppercase !tracking-wider">{item.category}</div>
                        </div>
                        <div className="!w-2 !h-2 !bg-green-400 !rounded-full !opacity-0 group-hover/item:!opacity-100 !transition-opacity !duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status footer */}
                <div className="!mt-6 !pt-6 !border-t !border-green-100">
                  <div className="!flex !items-center !justify-between">
                    <div className="!flex !items-center !gap-2">
                      <Shield className="!h-4 !w-4 !text-green-600" />
                      <span className="!text-xs !font-semibold !text-green-600 !uppercase !tracking-wider">
                        Safety Approved
                      </span>
                    </div>
                    <div className="!text-xs !text-slate-500">6 Requirements</div>
                  </div>
                </div>
              </div>

              {/* Creative corner accent */}
              <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-green-300 !to-green-400 !opacity-20 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
            </div>

            {/* Floating shadow */}
            <div className="!absolute !inset-0 !bg-gradient-to-r !from-green-400 !to-green-500 !opacity-20 !blur-xl !transform !translate-x-2 !translate-y-2 !-z-10 group-hover:!translate-x-4 group-hover:!translate-y-4 !transition-transform !duration-500" />
          </motion.div>

          {/* Ineligible criteria */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="!group !relative"
          >
            {/* Creative card design */}
            <div className="!relative !bg-white !border-2 !border-red-200 hover:!border-red-300 !transition-all !duration-500 !overflow-hidden">
              {/* Angled header */}
              <div className="!relative !bg-gradient-to-r !from-red-500 !to-red-600 !p-6 !transform !skew-y-1 !-mt-1 !mb-4">
                <div className="!transform !-skew-y-1">
                  <div className="!flex !items-center !gap-4 !mb-2">
                    <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                      <XCircle className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="!text-xl !font-bold !text-white">Ineligible Criteria</h3>
                      <div className="!text-xs !text-white/80 !uppercase !tracking-wider">Disqualifying Factors</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="!px-6 !pb-6">
                <div className="!space-y-4">
                  {requirements.ineligible.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="!group/item !relative"
                    >
                      <div className="!flex !items-start !gap-4 !p-4 !bg-red-50 !border-l-4 !border-red-400 hover:!bg-red-100 !transition-colors !duration-300">
                        <XCircle className="!h-5 !w-5 !text-red-500 !mt-0.5 !flex-shrink-0" strokeWidth={2} />
                        <div className="!flex-1">
                          <div className="!text-sm !font-medium !text-slate-900 !mb-1">{item.text}</div>
                          <div className="!text-xs !text-slate-500 !uppercase !tracking-wider">{item.category}</div>
                        </div>
                        <div className="!w-2 !h-2 !bg-red-400 !rounded-full !opacity-0 group-hover/item:!opacity-100 !transition-opacity !duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status footer */}
                <div className="!mt-6 !pt-6 !border-t !border-red-100">
                  <div className="!flex !items-center !justify-between">
                    <div className="!flex !items-center !gap-2">
                      <AlertTriangle className="!h-4 !w-4 !text-red-600" />
                      <span className="!text-xs !font-semibold !text-red-600 !uppercase !tracking-wider">
                        Safety Restrictions
                      </span>
                    </div>
                    <div className="!text-xs !text-slate-500">6 Restrictions</div>
                  </div>
                </div>
              </div>

              {/* Creative corner accent */}
              <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-red-300 !to-red-400 !opacity-20 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
            </div>

            {/* Floating shadow */}
            <div className="!absolute !inset-0 !bg-gradient-to-r !from-red-400 !to-red-500 !opacity-20 !blur-xl !transform !translate-x-2 !translate-y-2 !-z-10 group-hover:!translate-x-4 group-hover:!translate-y-4 !transition-transform !duration-500" />
          </motion.div>
        </div>

        {/* Professional assessment section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="!mt-16 !border-t !border-slate-200 !pt-12"
        >
          <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8">
            <div className="lg:!col-span-2">
              <h3 className="!text-xl !font-bold !text-slate-900 !mb-4">Professional Eligibility Assessment</h3>
              <p className="!text-slate-600 !mb-6">
                Our comprehensive eligibility screening follows FDA guidelines and international safety protocols. All
                criteria are designed to protect both donor and recipient safety while maintaining blood quality
                standards.
              </p>

              <div className="!grid !grid-cols-2 !gap-4 !mb-6">
                <div className="!bg-gradient-to-br !from-green-50 !to-green-100 !border !border-green-200 !p-4 !transform hover:!scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Eligible Donors</div>
                  <div className="!text-lg !font-bold !text-green-600">85% Pass Rate</div>
                </div>
                <div className="!bg-gradient-to-br !from-blue-50 !to-blue-100 !border !border-blue-200 !p-4 !transform hover:!scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Assessment Time</div>
                  <div className="!text-lg !font-bold !text-blue-600">5-10 Minutes</div>
                </div>
              </div>

              <div className="!flex !flex-wrap !gap-3">
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  FDA Guidelines
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Safety First
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Professional Review
                </div>
              </div>
            </div>

            <div className="!relative !overflow-hidden">
              <div className="!bg-gradient-to-br !from-slate-50 !to-slate-100 !border-2 !border-slate-200 !p-6 !transform hover:!scale-105 !transition-all !duration-300">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <FileCheck className="!h-5 !w-5 !text-slate-600" />
                  <span className="!text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                    Quick Assessment
                  </span>
                </div>
                <h4 className="!text-lg !font-semibold !text-slate-900 !mb-2">Check Your Eligibility</h4>
                <p className="!text-sm !text-slate-600 !mb-4">
                  Complete our professional eligibility assessment to determine your donation status.
                </p>
                <button className="!w-full !px-4 !py-3 !bg-gradient-to-r !from-slate-600 !to-slate-700 hover:!from-slate-700 hover:!to-slate-800 !text-white !font-semibold !transition-all !duration-300 !transform hover:!scale-105 !rounded-lg !shadow-lg hover:!shadow-xl">
                  Start Assessment
                </button>
              </div>
              {/* Decorative corner */}
              <div className="!absolute !top-0 !right-0 !w-12 !h-12 !bg-gradient-to-br !from-slate-300 !to-slate-400 !opacity-20 !transform !rotate-45 !translate-x-6 !-translate-y-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
