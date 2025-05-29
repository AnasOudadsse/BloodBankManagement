"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Droplet } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function StatsSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  // Sample blood stock data
  const bloodStocks = [
    { type: "A+", level: 75, color: "bg-red-500", demand: "Medium" },
    { type: "A-", level: 45, color: "bg-red-500", demand: "High" },
    { type: "B+", level: 60, color: "bg-red-500", demand: "Medium" },
    { type: "B-", level: 30, color: "bg-red-500", demand: "High" },
    { type: "AB+", level: 85, color: "bg-red-500", demand: "Low" },
    { type: "AB-", level: 20, color: "bg-red-500", demand: "High" },
    { type: "O+", level: 50, color: "bg-red-500", demand: "Medium" },
    { type: "O-", level: 15, color: "bg-red-500", demand: "High" },
  ]

  // Get status based on level
  const getStatus = (level) => {
    if (level < 30) return "Critical"
    if (level < 60) return "Low"
    return "Good"
  }

  // Get color based on level
  const getColorClass = (level) => {
    if (level < 30) return "text-red-500 dark:text-red-400"
    if (level < 60) return "text-amber-500 dark:text-amber-400"
    return "text-emerald-500 dark:text-emerald-400"
  }

  // Get background gradient based on level
  const getGradientClass = (level) => {
    if (level < 30) return "from-red-500 to-red-600"
    if (level < 60) return "from-amber-500 to-amber-600"
    return "from-emerald-500 to-emerald-600"
  }

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section ref={ref} className="relative bg-muted/30 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-50" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Droplet className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("stats.title")}</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">{t("stats.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {bloodStocks.map((stock, index) => (
              <motion.div
                key={stock.type}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-border/20"
              >
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5 opacity-70" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-primary/5 opacity-70" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-5 w-5 rounded-full bg-primary" />
                    </div>
                    <div className="text-2xl font-bold">{stock.type}</div>
                  </div>

                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${stock.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${getGradientClass(stock.level)}`}
                    />
                  </div>

                  <div className="flex w-full items-center justify-between text-sm">
                    <div className={`font-medium ${getColorClass(stock.level)}`}>{getStatus(stock.level)}</div>
                    <div className="font-medium text-muted-foreground">{stock.level}%</div>
                  </div>

                  <div className="mt-1 rounded-full bg-muted px-3 py-0.5 text-xs font-medium">
                    {stock.demand} Demand
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto mt-8 max-w-2xl rounded-xl border border-border/50 bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-center text-lg font-semibold">Blood Type Compatibility</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { recipient: "A+", canReceiveFrom: "A+, A-, O+, O-" },
                { recipient: "A-", canReceiveFrom: "A-, O-" },
                { recipient: "B+", canReceiveFrom: "B+, B-, O+, O-" },
                { recipient: "B-", canReceiveFrom: "B-, O-" },
                { recipient: "AB+", canReceiveFrom: "All Types" },
                { recipient: "AB-", canReceiveFrom: "AB-, A-, B-, O-" },
                { recipient: "O+", canReceiveFrom: "O+, O-" },
                { recipient: "O-", canReceiveFrom: "O-" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border/50 bg-background p-3 text-center">
                  <div className="mb-1 text-lg font-bold text-primary">{item.recipient}</div>
                  <div className="text-xs text-muted-foreground">Can receive from:</div>
                  <div className="text-sm">{item.canReceiveFrom}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
