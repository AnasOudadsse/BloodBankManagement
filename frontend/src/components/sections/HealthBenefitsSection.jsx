"use client"

import { motion } from "framer-motion"
import { Activity, BarChart, TrendingUp, Shield } from "lucide-react"
import { HealthBenefitCard } from "@/components/health-benefit-card"

export function HealthBenefitsSection() {
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
              Donor Health Analytics
            </span>
          </div>
          <h2 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !max-w-4xl">
            Health Benefits of Strategic Blood Donation Programs
          </h2>
          <p className="!text-lg !text-slate-600 !max-w-2xl">
            Evidence-based health advantages for donors participating in systematic blood donation initiatives,
            supported by medical research and clinical data.
          </p>
        </motion.div>

        {/* Professional benefits grid */}
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-6 !max-w-7xl !mx-auto">
          <HealthBenefitCard
            icon={<Activity className="!h-6 !w-6 !text-white" strokeWidth={2} />}
            title="Cardiovascular Health"
            description="Regular donation reduces iron overload, lowering cardiovascular disease risk by 12-15% according to clinical studies."
            metric="15% Risk Reduction"
            category="Cardiac Health"
          />

          <HealthBenefitCard
            icon={<BarChart className="!h-6 !w-6 !text-white" strokeWidth={2} />}
            title="Comprehensive Health Screening"
            description="Each donation includes professional health assessment: blood pressure, hemoglobin, temperature, and infectious disease screening."
            metric="8 Health Markers"
            category="Preventive Care"
          />

          <HealthBenefitCard
            icon={<TrendingUp className="!h-6 !w-6 !text-white" strokeWidth={2} />}
            title="Hematopoietic Stimulation"
            description="Donation stimulates bone marrow to produce new blood cells, enhancing overall blood cell regeneration and immune function."
            metric="2-4 Week Cycle"
            category="Cell Regeneration"
          />

          <HealthBenefitCard
            icon={<Shield className="!h-6 !w-6 !text-white" strokeWidth={2} />}
            title="Metabolic Benefits"
            description="Blood donation burns approximately 650 calories and may improve insulin sensitivity and metabolic health markers."
            metric="650 Calories"
            category="Metabolic Health"
          />
        </div>

        {/* Professional research section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="!mt-16 !border-t !border-slate-200 !pt-12"
        >
          <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8">
            <div className="lg:!col-span-2">
              <h3 className="!text-xl !font-bold !text-slate-900 !mb-4">Clinical Research & Evidence</h3>
              <p className="!text-slate-600 !mb-4">
                Multiple peer-reviewed studies demonstrate significant health benefits for regular blood donors,
                including reduced risk of cardiovascular disease, improved iron metabolism, and enhanced immune
                function.
              </p>
              <div className="!flex !flex-wrap !gap-3">
                <div className="!px-3 !py-1 !bg-slate-100 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                  Peer Reviewed
                </div>
                <div className="!px-3 !py-1 !bg-slate-100 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                  Clinical Evidence
                </div>
                <div className="!px-3 !py-1 !bg-slate-100 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                  FDA Approved
                </div>
              </div>
            </div>

            <div className="!bg-red-50 !border !border-red-200 !p-6">
              <div className="!flex !items-center !gap-3 !mb-4">
                <Activity className="!h-5 !w-5 !text-red-600" />
                <span className="!text-xs !font-semibold !text-red-600 !uppercase !tracking-wider">
                  Health Monitoring
                </span>
              </div>
              <h4 className="!text-lg !font-semibold !text-slate-900 !mb-2">Professional Health Assessment</h4>
              <p className="!text-sm !text-slate-600 !mb-4">
                Every donation includes comprehensive health screening by certified medical professionals.
              </p>
              <button className="!w-full !px-4 !py-2 !border !border-red-200 !text-red-600 hover:!bg-red-100 hover:!border-red-300 !font-semibold !text-sm !transition-colors !duration-200">
                Schedule Health Assessment
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
