"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { CounterAnimation } from "@/components/counter-animation";

export function StatsSection() {
  const stats = [
    {
      id: "01",
      value: 3,
      suffix: "",
      label: "Lives Saved",
      description: "Per single donation",
      metric: "Impact Ratio",
      trend: "+12%",
      progress: 85,
    },
    {
      id: "02",
      value: 47500,
      suffix: "+",
      label: "Active Donors",
      description: "Registered nationwide",
      metric: "Network Size",
      trend: "+8%",
      progress: 92,
    },
    {
      id: "03",
      value: 2,
      suffix: "s",
      label: "Critical Need",
      description: "Blood required every",
      metric: "Urgency Rate",
      trend: "24/7",
      progress: 100,
    },
  ];

  return (
    <section className="!py-24 !bg-white !relative !overflow-hidden">
      {/* Minimal background elements */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

      <div className="!container !mx-auto !px-6 lg:!px-8 !relative">
        {/* Clean header */}
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
              Performance Metrics
            </span>
          </div>
          <h2 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !max-w-4xl">
            Measurable Impact Through Strategic Blood Donation Programs
          </h2>
          <p className="!text-lg !text-slate-600 !max-w-2xl">
            Key performance indicators demonstrating the effectiveness and reach
            of our life-saving initiatives.
          </p>
        </motion.div>

        {/* Professional stats grid */}
        <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8 !max-w-7xl !mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="!group !relative"
            >
              {/* Modern card design */}
              <div className="!relative !bg-white !border !border-slate-200 hover:!border-slate-300 !transition-all !duration-300 !overflow-hidden">
                {/* Header section */}
                <div className="!p-6 !border-b !border-slate-100">
                  <div className="!flex !items-center !justify-between !mb-4">
                    <div className="!flex !items-center !gap-3">
                      <div className="!w-8 !h-8 !bg-slate-100 !flex !items-center !justify-center !text-xs !font-bold !text-slate-600">
                        {stat.id}
                      </div>
                      <span className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                        {stat.metric}
                      </span>
                    </div>
                    <div className="!flex !items-center !gap-1 !text-xs !font-semibold !text-green-600">
                      {stat.trend.includes("%") && (
                        <TrendingUp className="!h-3 !w-3" />
                      )}
                      {stat.trend}
                    </div>
                  </div>

                  {/* Main metric */}
                  <div className="!mb-4">
                    <h3 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !leading-none !mb-2">
                      <CounterAnimation end={stat.value} suffix={stat.suffix} />
                    </h3>
                    <h4 className="!text-lg !font-semibold !text-slate-900">
                      {stat.label}
                    </h4>
                    <p className="!text-sm !text-slate-600">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="!space-y-2">
                    <div className="!flex !justify-between !text-xs">
                      <span className="!text-slate-500">Performance</span>
                      <span className="!font-semibold !text-slate-700">
                        {stat.progress}%
                      </span>
                    </div>
                    <div className="!w-full !bg-slate-100 !h-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.progress}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="!h-1 !bg-gradient-to-r !from-red-500 !to-red-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Data visualization section */}
                <div className="!p-6 !bg-slate-50/50">
                  <div className="!flex !items-center !justify-between">
                    <div className="!text-xs !text-slate-500">
                      Last updated: Today
                    </div>
                    <ArrowUpRight className="!h-4 !w-4 !text-slate-400 group-hover:!text-red-600 !transition-colors !duration-300" />
                  </div>
                </div>

                {/* Hover effect */}
                <div className="!absolute !inset-0 !bg-gradient-to-r !from-red-500/5 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="!mt-20 !text-center"
        >
          <div className="!max-w-4xl !mx-auto">
            <div className="!border !border-slate-200 !bg-white !p-8 lg:!p-12">
              <h3 className="!text-2xl lg:!text-3xl !font-bold !text-slate-900 !mb-4">
                Join Our Impact Network
              </h3>
              <p className="!text-lg !text-slate-600 !mb-8 !max-w-2xl !mx-auto">
                Become part of a data-driven approach to saving lives. Your
                contribution directly impacts these metrics.
              </p>

              <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="!inline-flex !items-center !px-8 !py-4 !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !transition-colors !duration-200"
                >
                  Schedule Appointment
                  <ArrowUpRight className="!h-4 !w-4 !ml-2" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="!inline-flex !items-center !px-8 !py-4 !border !border-slate-300 hover:!border-slate-400 !text-slate-700 !font-semibold !transition-colors !duration-200"
                >
                  View Full Report
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
