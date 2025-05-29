"use client"

import { motion } from "framer-motion"
import { ImpactStoryCard } from "@/components/impact-story-card"

export function ImpactStoriesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Professional header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-red-600" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Patient Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight max-w-4xl">
            Lives Changed Through Strategic Donation Programs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Documented case studies of patients whose treatment was made possible through our blood donation
            initiatives.
          </p>
        </motion.div>

        {/* Professional case studies grid */}
        <div className="space-y-12">
          <ImpactStoryCard
            name="Sarah Johnson"
            age="28"
            image="/joyful-portrait.png"
            title="Car Accident Survivor"
            bloodType="O-"
            story="After a severe car accident, I needed multiple blood transfusions to survive. I lost over 40% of my blood volume and required emergency surgery. Thanks to blood donors, I'm alive today and able to watch my children grow up. I can never thank donors enough for their selfless gift."
          />

          <ImpactStoryCard
            name="Michael Chen"
            age="42"
            image="/thoughtful-gaze.png"
            title="Cancer Treatment Recipient"
            bloodType="A+"
            story="During my leukemia treatment, I received over 30 blood and platelet transfusions. Each donation gave me strength to continue fighting. Today I'm in remission and volunteer at blood drives to help others receive the same gift of life that was given to me."
          />
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-slate-200 pt-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Become Part of Our Impact Network</h3>
              <p className="text-slate-600">
                Your donation directly contributes to patient recovery and survival rates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-200">
                Schedule Appointment
              </button>
              <button className="px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold transition-colors duration-200">
                View Impact Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
