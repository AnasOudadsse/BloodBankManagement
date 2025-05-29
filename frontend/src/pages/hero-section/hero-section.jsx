"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Heart, Droplet, Users } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-32 -left-20 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
          <motion.div style={{ y, opacity }} className="flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="mr-1 flex h-2 w-2 rounded-full bg-primary"></span>
                Every donation counts
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="gradient-text">{t("hero.title")}</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-[600px] text-lg text-muted-foreground md:text-xl"
              >
                {t("hero.subtitle")}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.cta")}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </button>
              <button className="rounded-full border border-primary/20 bg-transparent px-8 py-3 text-lg font-medium backdrop-blur-sm hover:bg-primary/10">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { icon: Droplet, label: "50,000+", desc: "Donations" },
                { icon: Users, label: "30,000+", desc: "Donors" },
                { icon: Heart, label: "20,000+", desc: "Lives Saved" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="flex flex-col items-center rounded-xl border border-border/50 bg-background/50 p-3 text-center backdrop-blur-sm"
                >
                  <div className="mb-2 rounded-full bg-primary/10 p-2 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-xl font-bold">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden sm:h-[450px] md:h-[500px]">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -right-16 -top-16 h-32 w-32 rounded-full border border-primary/20 bg-primary/5"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full border border-primary/20 bg-primary/5"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute bottom-20 right-10 h-24 w-24 rounded-full border border-primary/20 bg-primary/5"
              />

              {/* Main image with mask */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[90%] w-[90%] overflow-hidden rounded-2xl border border-primary/20 bg-background/80 shadow-xl backdrop-blur-sm">
                  <Image src="/hero-image.png" alt="Blood donation" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -left-5 top-1/4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
              >
                <div className="relative h-10 w-10">
                  <Image src="/blood-drop.png" alt="Blood drop" fill />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-5 bottom-1/4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
              >
                <div className="relative h-10 w-10">
                  <Image src="/heart-icon.png" alt="Heart" fill />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}
