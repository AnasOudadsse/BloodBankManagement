"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/joyful-woman.png",
      quote:
        "Donating blood has become a regular part of my life. It's a simple way to make a huge impact on someone else's life. The staff at Blood Nation make the process so comfortable.",
      bloodType: "O+",
      donationCount: 12,
      location: "New York, NY",
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/thoughtful-gaze.png",
      quote:
        "After my sister needed blood during surgery, I realized how important donors are. Now I donate every chance I get. It's a small sacrifice that can save someone's life.",
      bloodType: "A-",
      donationCount: 8,
      location: "San Francisco, CA",
    },
    {
      id: 3,
      name: "Aisha Patel",
      image: "/serene-indian-woman.png",
      quote:
        "The staff at Blood Nation make the donation process so easy and comfortable. I'm proud to be a regular donor and know that my contributions are helping people in need.",
      bloodType: "B+",
      donationCount: 15,
      location: "Chicago, IL",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [isInView])

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section ref={ref} className="relative bg-muted/30 py-24">
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
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("testimonials.title")}</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">{t("testimonials.subtitle")}</p>
          </motion.div>

          <div className="relative mt-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card p-8 shadow-lg"
            >
              <Quote className="absolute left-6 top-6 h-10 w-10 text-primary/10" />
              <Quote className="absolute bottom-6 right-6 h-10 w-10 rotate-180 text-primary/10" />

              <div className="relative mx-auto max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6 text-center"
                  >
                    <div className="relative">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary shadow-lg">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -right-2 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {testimonials[currentIndex].bloodType}
                      </div>
                    </div>

                    <blockquote className="text-lg italic text-card-foreground md:text-xl">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="flex flex-col items-center">
                      <div className="text-xl font-semibold">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                      <div className="mt-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                        {testimonials[currentIndex].donationCount} Donations
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress indicators */}
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary" : "bg-primary/20"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>

          {/* Additional testimonial cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                quote: "The donation process was quick and painless. I'm glad I could help!",
                name: "David Wilson",
                role: "First-time donor",
              },
              {
                quote: "I donate because my son needed blood after an accident. Now I give back.",
                name: "Maria Rodriguez",
                role: "Regular donor",
              },
              {
                quote: "The staff is always friendly and professional. Great experience every time.",
                name: "James Thompson",
                role: "10+ donations",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="hover-lift rounded-xl border border-border/50 bg-card p-6 shadow-sm"
              >
                <Quote className="mb-4 h-6 w-6 text-primary/40" />
                <p className="mb-4 text-sm">{item.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
