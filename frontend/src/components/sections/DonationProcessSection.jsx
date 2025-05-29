"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Activity, Droplet, CheckCircle, ArrowRight, Clock, Shield } from "lucide-react"

const steps = [
  {
    id: "01",
    icon: <ClipboardCheck className="!h-6 !w-6 !text-white" strokeWidth={2} />,
    title: "Registration & Health Assessment",
    description:
      "Complete comprehensive health questionnaire and undergo professional medical screening by certified staff.",
    duration: "15 minutes",
    requirements: ["Valid ID", "Health History", "Age 17-65"],
    status: "Required",
    color: "!from-red-500 !to-red-600",
    bgPattern: "!bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1)_0%,transparent_50%)]",
  },
  {
    id: "03",
    icon: <Droplet className="!h-6 !w-6 !text-white" strokeWidth={2} />,
    title: "Blood Collection",
    description:
    "Sterile collection process extracting approximately 450ml of blood using single-use, FDA-approved equipment.",
    duration: "8-10 minutes",
    requirements: ["Sterile Equipment", "450ml Collection", "Monitoring"],
    status: "Active",
    color: "!from-red-700 !to-red-800",
    bgPattern: "!bg-[radial-gradient(circle_at_20%_70%,rgba(185,28,28,0.1)_0%,transparent_50%)]",
  },
  {
    id: "02",
    icon: <Activity className="!h-6 !w-6 !text-white" strokeWidth={2} />,
    title: "Medical Evaluation",
    description:
      "Professional assessment of vital signs including blood pressure, pulse rate, temperature, and hemoglobin levels.",
    duration: "10 minutes",
    requirements: ["Blood Pressure Check", "Hemoglobin Test", "Temperature"],
    status: "Screening",
    color: "!from-red-600 !to-red-700",
    bgPattern: "!bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.1)_0%,transparent_50%)]",
  },
  {
    id: "04",
    icon: <CheckCircle className="!h-6 !w-6 !text-white" strokeWidth={2} />,
    title: "Recovery & Monitoring",
    description:
      "Supervised recovery period with refreshments and health monitoring to ensure donor safety and well-being.",
    duration: "15 minutes",
    requirements: ["Observation", "Refreshments", "Health Check"],
    status: "Complete",
    color: "!from-red-800 !to-red-900",
    bgPattern: "!bg-[radial-gradient(circle_at_80%_80%,rgba(153,27,27,0.1)_0%,transparent_50%)]",
  },
]

export function DonationProcessSection() {
  return (
    <section className="!py-24 !bg-white !relative !overflow-hidden">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

      {/* Creative floating elements */}
      <div className="!absolute !top-20 !right-20 !w-2 !h-32 !bg-gradient-to-b !from-red-200 !to-transparent !transform !rotate-12" />
      <div className="!absolute !top-40 !right-40 !w-1 !h-24 !bg-red-100 !transform !-rotate-12" />
      <div className="!absolute !bottom-40 !left-20 !w-1 !h-28 !bg-red-100 !transform !rotate-45" />

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
              Donation Protocol
            </span>
          </div>
          <h2 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !max-w-4xl">
            Professional Blood Donation Process
          </h2>
          <p className="!text-lg !text-slate-600 !max-w-2xl">
            Standardized four-phase protocol ensuring donor safety, blood quality, and regulatory compliance throughout
            the donation experience.
          </p>
        </motion.div>

        {/* Creative zigzag process layout */}
        <div className="!relative !max-w-7xl !mx-auto">
          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-12 !items-center">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`!group !relative ${index % 2 === 1 ? "lg:!order-2" : ""}`}
              >
                {/* Creative card with angled design */}
                <div className="!relative !overflow-hidden">
                  {/* Main card */}
                  <div
                    className={`!relative !bg-white !border-2 !border-slate-200 hover:!border-red-300 !transition-all !duration-500 !transform hover:!scale-105 hover:!rotate-1 !overflow-hidden ${step.bgPattern}`}
                  >
                    {/* Angled top section */}
                    <div
                      className={`!relative !bg-gradient-to-r ${step.color} !p-6 !transform !-skew-y-2 !-mt-2 !mb-4`}
                    >
                      <div className="!transform !skew-y-2">
                        <div className="!flex !items-center !justify-between !mb-4">
                          <div className="!flex !items-center !gap-3">
                            <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                              {step.icon}
                            </div>
                            <div className="!text-2xl !font-bold !text-white !font-mono">{step.id}</div>
                          </div>
                          <div className="!flex !items-center !gap-1 !text-xs !font-semibold !text-white/80 !bg-white/10 !px-2 !py-1 !rounded-full">
                            <Clock className="!h-3 !w-3" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="!px-6 !pb-6">
                      <h3 className="!text-xl !font-bold !text-slate-900 !mb-3 !leading-tight">{step.title}</h3>
                      <p className="!text-sm !text-slate-600 !leading-relaxed !mb-6">{step.description}</p>

                      {/* Creative requirements display */}
                      <div className="!mb-6">
                        <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider !mb-3 !flex !items-center !gap-2">
                          <Shield className="!h-3 !w-3" />
                          Requirements
                        </div>
                        <div className="!grid !grid-cols-1 !gap-2">
                          {step.requirements.map((req, reqIndex) => (
                            <div
                              key={reqIndex}
                              className="!flex !items-center !gap-3 !text-xs !text-slate-600 !bg-slate-50 !px-3 !py-2 !border-l-2 !border-red-200"
                            >
                              <div className="!w-2 !h-2 !bg-red-400 !rounded-full !flex-shrink-0" />
                              {req}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Status and progress */}
                      <div className="!flex !items-center !justify-between !pt-4 !border-t !border-slate-100">
                        <div className="!flex !items-center !gap-2">
                          <div
                            className={`!px-3 !py-1 !bg-gradient-to-r ${step.color} !text-white !text-xs !font-semibold !uppercase !tracking-wider !rounded-full`}
                          >
                            {step.status}
                          </div>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="!flex !items-center !gap-1 !text-xs !text-slate-400">
                            <span>Next</span>
                            <ArrowRight className="!h-3 !w-3 group-hover:!translate-x-1 !transition-transform !duration-300" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Creative corner accent */}
                    <div
                      className={`!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br ${step.color} !opacity-10 !transform !rotate-45 !translate-x-8 !-translate-y-8`}
                    />
                  </div>

                  {/* Floating shadow effect */}
                  <div
                    className={`!absolute !inset-0 !bg-gradient-to-r ${step.color} !opacity-20 !blur-xl !transform !translate-x-2 !translate-y-2 !-z-10 group-hover:!translate-x-4 group-hover:!translate-y-4 !transition-transform !duration-500`}
                  />
                </div>

                {/* Creative connecting line for larger screens */}
                {index < steps.length - 1 && (
                  <div className="!hidden lg:!block !absolute !top-1/2 !right-0 !w-12 !h-0.5 !bg-gradient-to-r !from-red-300 !to-transparent !transform !translate-x-full !-translate-y-1/2 !z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced summary section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="!mt-20 !border-t !border-slate-200 !pt-12"
        >
          <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8">
            <div className="lg:!col-span-2">
              <h3 className="!text-xl !font-bold !text-slate-900 !mb-4">Process Overview & Safety Standards</h3>
              <p className="!text-slate-600 !mb-6">
                Our standardized donation protocol follows FDA guidelines and international best practices, ensuring
                maximum safety for donors while maintaining blood quality standards. The entire process typically takes
                45-60 minutes with professional medical supervision throughout.
              </p>

              <div className="!grid !grid-cols-3 !gap-4 !mb-6">
                <div className="!bg-gradient-to-br !from-slate-50 !to-slate-100 !border !border-slate-200 !p-4 !transform !hover:scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Total Duration</div>
                  <div className="!text-lg !font-bold !text-red-600">45-60 Min</div>
                </div>
                <div className="!bg-gradient-to-br !from-green-50 !to-green-100 !border !border-green-200 !p-4 !transform !hover:scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Safety Rating</div>
                  <div className="!text-lg !font-bold !text-green-600">99.9%</div>
                </div>
                <div className="!bg-gradient-to-br !from-blue-50 !to-blue-100 !border !border-blue-200 !p-4 !transform !hover:scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Blood Volume</div>
                  <div className="!text-lg !font-bold !text-blue-600">450ml</div>
                </div>
              </div>

              <div className="!flex !flex-wrap !gap-3">
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  FDA Approved
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Medical Supervision
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Sterile Equipment
                </div>
              </div>
            </div>

            <div className="!relative !overflow-hidden">
              <div className="!bg-gradient-to-br !from-red-50 !to-red-100 !border-2 !border-red-200 !p-6 !transform !hover:scale-105 !transition-all !duration-300">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <CheckCircle className="!h-5 !w-5 !text-red-600" />
                  <span className="!text-xs !font-semibold !text-red-600 !uppercase !tracking-wider">
                    Ready to Donate
                  </span>
                </div>
                <h4 className="!text-lg !font-semibold !text-slate-900 !mb-2">Schedule Your Appointment</h4>
                <p className="!text-sm !text-slate-600 !mb-4">
                  Book your donation appointment with our professional medical team.
                </p>
                <button className="!w-full !px-4 !py-3 !bg-gradient-to-r !from-red-600 !to-red-700 hover:!from-red-700 hover:!to-red-800 !text-white !font-semibold !transition-all !duration-300 !transform hover:!scale-105 !rounded-lg !shadow-lg hover:!shadow-xl">
                  Schedule Donation
                </button>
              </div>
              {/* Decorative corner */}
              <div className="!absolute !top-0 !right-0 !w-12 !h-12 !bg-gradient-to-br !from-red-300 !to-red-400 !opacity-20 !transform !rotate-45 !translate-x-6 !-translate-y-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
