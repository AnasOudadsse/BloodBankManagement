"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Droplet,
  Activity,
  CheckCircle,
  ArrowDown,
  HeartPulse,
  Award,
  BarChart,
  Zap,
  Leaf,
  Phone,
  AlertCircle,
  User,
  Globe,
  Gift,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialCard } from "@/components/testimonial-card"
import { DonationStepCard } from "@/components/donation-step-card"
import { BloodTypeCard } from "@/components/blood-type-card"
import { CounterAnimation } from "@/components/counter-animation"
import { MythFactCard } from "@/components/myth-fact-card"
import { ImpactStoryCard } from "@/components/impact-story-card"
import { BloodCompatibilityChart } from "@/components/blood-compatibility-chart"
import { NewsletterForm } from "@/components/newsletter-form"
import { HealthBenefitCard } from "@/components/health-benefit-card"

export  function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    setMounted(true)

    // Auto-rotate hero slides
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const heroSlides = [
    {
      title: "Your donation saves lives",
      subtitle: "Every drop counts in the journey to save lives",
      image: "/giving-lifeblood.png",
      gradient: "from-red-200/90 via-red-300/80 to-red-400/70",
    },
    {
      title: "Be someone's hero today",
      subtitle: "One donation can save up to three lives",
      image: "/community-blood-drive.jpg",
      gradient: "from-red-200/90 via-red-300/80 to-red-400/70",
    },
    {
      title: "Join our community of lifesavers",
      subtitle: "Together we can make a difference",
      image: "/blood-donation-drive.png",
      gradient: "from-red-200/90 via-red-300/80 to-red-400/70",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Modern Hero Section with Animated Slides */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={heroSlides[activeSlide].image || "/placeholder.svg"}
              alt="Blood donation hero"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[activeSlide].gradient} opacity-70 z-[5]`} />
          </motion.div>
        </AnimatePresence>

        {/* Creative Blood Drop Animation */}
        <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [0.5, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              times: [0, 0.5, 1],
            }}
            className="absolute left-[10%] top-full"
          >
            <div className="w-16 h-24 rounded-t-full bg-red-500/20 rotate-12" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -1200],
              opacity: [0, 1, 0],
              scale: [0.3, 0.8],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              delay: 5,
              times: [0, 0.5, 1],
            }}
            className="absolute left-[25%] top-full"
          >
            <div className="w-12 h-20 rounded-t-full bg-red-500/20 -rotate-6" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -1100],
              opacity: [0, 1, 0],
              scale: [0.4, 0.9],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              delay: 2,
              times: [0, 0.5, 1],
            }}
            className="absolute left-[70%] top-full"
          >
            <div className="w-14 h-22 rounded-t-full bg-red-500/20 rotate-3" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -900],
              opacity: [0, 1, 0],
              scale: [0.6, 1.1],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              delay: 7,
              times: [0, 0.5, 1],
            }}
            className="absolute left-[85%] top-full"
          >
            <div className="w-10 h-16 rounded-t-full bg-red-500/20 -rotate-9" />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-none">
                <Clock className="mr-1 h-3 w-3" /> Urgent need for O- and AB+ blood types
              </Badge>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {heroSlides[activeSlide].title.split(" ").map((word, i, arr) => (
                    <span key={i}>
                      {i === arr.length - 1 ? <span className="text-red-200">{word}</span> : <span>{word} </span>}
                    </span>
                  ))}
                </h1>

                <p className="text-xl text-white/90 mb-8 max-w-2xl">{heroSlides[activeSlide].subtitle}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-red-700 hover:bg-red-50 border-none rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:px-10"
              >
                Become a donor
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 rounded-full px-8"
              >
                Find donation centers
                <MapPin className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-3 mt-12">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-12 h-1.5 rounded-full transition-all ${
                    activeSlide === index ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white animate-bounce"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Urgent Appeal Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-red-200" />
              <p className="font-medium">
                <span className="font-bold">Urgent Appeal:</span> Critical shortage of O-negative and B-positive blood
                types
              </p>
            </div>
            <Button
              size="sm"
              className="bg-white text-red-700 hover:bg-red-50 whitespace-nowrap rounded-full px-6 transition-all hover:shadow-md"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Stats Section with Animated Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100/50"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-md">
                <Droplet className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                <CounterAnimation end={3} />
              </h3>
              <p className="text-gray-700 font-medium">Lives saved with each donation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100/50"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-md">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                <CounterAnimation end={10000} suffix="+" />
              </h3>
              <p className="text-gray-700 font-medium">Active donors nationwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100/50"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-md">
                <Activity className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                <CounterAnimation end={2} suffix="s" />
              </h3>
              <p className="text-gray-700 font-medium">Someone needs blood every 2 seconds</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section - Redesigned */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-red-100 -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-100 translate-x-1/3 translate-y-1/3 opacity-70"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">Impact Stories</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                Lives Changed Through Donation
              </h2>
              <p className="text-xl text-gray-600">
                Real stories from people whose lives were saved thanks to generous blood donors like you.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
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
        </div>
      </section>

      {/* Why Donate Section - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZWYyZjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">Why Donate Blood?</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                The Importance of Blood Donation
              </h2>
              <p className="text-xl text-gray-600">
                Blood donation is a simple way to save lives. Every donation can help up to three people in need.
                Donating blood is safe, easy, and can make a huge difference.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-md transform -rotate-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Help Patients in Need</h3>
              <p className="text-gray-600">
                Your donation can help patients undergoing surgery, cancer treatment, and other medical procedures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-md transform rotate-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Support Your Community</h3>
              <p className="text-gray-600">
                Blood donation is a simple way to make a positive impact in your local community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-md transform -rotate-3">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Be a Hero</h3>
              <p className="text-gray-600">
                By donating blood, you can become a hero to those in need and make a lasting difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-red-200/50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-red-200/50 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-200 text-red-700 hover:bg-red-300 border-none">Health Benefits</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                Benefits of Donating Blood
              </h2>
              <p className="text-xl text-gray-700">
                Beyond saving lives, donating blood offers several health benefits for donors themselves.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <HealthBenefitCard
              icon={<HeartPulse className="h-7 w-7 text-white" />}
              title="Heart Health"
              description="Regular blood donation can reduce the risk of heart attacks and lower cholesterol levels."
            />

            <HealthBenefitCard
              icon={<BarChart className="h-7 w-7 text-white" />}
              title="Free Health Screening"
              description="Each donation includes a mini health check-up, including blood pressure and hemoglobin levels."
            />

            <HealthBenefitCard
              icon={<Zap className="h-7 w-7 text-white" />}
              title="Stimulates Blood Cell Production"
              description="After donating, your body works to replenish blood cells, stimulating the production of new blood cells."
            />

            <HealthBenefitCard
              icon={<Leaf className="h-7 w-7 text-white" />}
              title="Burns Calories"
              description="Donating blood burns approximately 650 calories as your body works to replace the donated blood."
            />
          </div>
        </div>
      </section>

      {/* Blood Types Section with Enhanced Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">Blood Types</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                Understanding Blood Types
              </h2>
              <p className="text-xl text-gray-600">
                Different blood types are needed for different patients. Learn about the various blood types and their
                compatibility.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <BloodTypeCard type="A+" percentage={36} urgency="medium" />
            <BloodTypeCard type="A-" percentage={6} urgency="high" />
            <BloodTypeCard type="B+" percentage={8} urgency="medium" />
            <BloodTypeCard type="B-" percentage={2} urgency="high" />
            <BloodTypeCard type="AB+" percentage={3} urgency="low" />
            <BloodTypeCard type="AB-" percentage={1} urgency="high" />
            <BloodTypeCard type="O+" percentage={38} urgency="medium" />
            <BloodTypeCard type="O-" percentage={6} urgency="critical" />
          </div>

          <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Blood Type Compatibility Chart</h3>
            <BloodCompatibilityChart />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Droplet className="h-5 w-5 text-red-600 mr-2" />
                  Universal Donors
                </h4>
                <p className="text-gray-600 mb-4">
                  O-negative blood type is known as the universal donor because it can be given to anyone regardless of
                  their blood type. This makes it extremely valuable in emergency situations.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="font-bold text-red-600">O-</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="flex gap-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">A+</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">A-</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">B+</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">B-</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">AB+</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">AB-</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">O+</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">O-</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Droplet className="h-5 w-5 text-red-600 mr-2" />
                  Universal Recipients
                </h4>
                <p className="text-gray-600 mb-4">
                  AB-positive blood type is known as the universal recipient because people with this blood type can
                  receive blood from any donor type. However, they can only donate to other AB+ individuals.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">A+</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">A-</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">B+</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">B-</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">O+</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">O-</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="font-bold text-red-600">AB+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Process Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">
                  The Donation Process
                </Badge>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                  What to Expect When Donating Blood
                </h2>
                <p className="text-xl text-gray-600 mb-10">
                  The blood donation process is safe, simple, and takes less than an hour. Our experienced staff will
                  guide you through each step to ensure a comfortable experience.
                </p>
              </motion.div>

              <div className="space-y-8">
                <DonationStepCard
                  number="01"
                  title="Registration"
                  description="Fill out a brief questionnaire to ensure you're eligible to donate."
                />

                <DonationStepCard
                  number="02"
                  title="Mini-Physical"
                  description="Our staff will check your vital signs and ensure you're healthy to donate."
                />

                <DonationStepCard
                  number="03"
                  title="Donation"
                  description="The actual blood donation process takes about 8-10 minutes."
                />

                <DonationStepCard
                  number="04"
                  title="Refreshments"
                  description="Enjoy a snack and drink to replenish fluids after your donation."
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/blood-donation-steps.png"
                  alt="Blood donation process"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Quick Process</h4>
                    <p className="text-sm text-gray-600">Less than an hour</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Donate Again</h4>
                    <p className="text-sm text-gray-600">Every 56 days</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Myths & Facts Section - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZWYyZjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">Myths & Facts</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                Common Blood Donation Myths
              </h2>
              <p className="text-xl text-gray-600">Let's address some common misconceptions about blood donation.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MythFactCard
              myth="Donating blood is painful and time-consuming."
              fact="Most donors report only a brief pinch when the needle is inserted. The actual donation takes only 8-10 minutes, with the entire process typically completed within an hour."
            />

            <MythFactCard
              myth="I can't donate if I'm taking medication."
              fact="Most medications don't prevent you from donating blood. Each case is evaluated individually during the pre-donation screening."
            />

            <MythFactCard
              myth="I'll get sick or feel weak after donating blood."
              fact="Most donors feel fine after donating. The body replaces the fluid lost within 24 hours and red blood cells within a few weeks."
            />

            <MythFactCard
              myth="I don't have a common blood type, so my donation isn't needed."
              fact="All blood types are needed. In fact, rare blood types are especially valuable for patients with matching rare types."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-red-200/50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-red-200/50 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-200 text-red-700 hover:bg-red-300 border-none">Donor Testimonials</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                Hear from Our Donors
              </h2>
              <p className="text-xl text-gray-700">
                Our donors share their experiences and the impact their donations have made.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              content="The donation process was quick and easy. The staff were very supportive and made sure I was comfortable throughout my visit."
              name="John Doe"
              title="Regular Donor"
              image="/thoughtful-gaze.png"
            />

            <TestimonialCard
              content="Every visit is well-organized, from the moment I arrive to when I leave. It's great to see such professionalism in action."
              name="Michael Lee"
              title="First-time Donor"
              image="/thoughtful-gaze.png"
            />

            <TestimonialCard
              content="I never knew donating blood could feel so rewarding until I visited your center. Thank you for making it a seamless experience!"
              name="Emily R."
              title="Regular Donor"
              image="/serene-gaze.png"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">FAQ</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Find answers to common questions about blood donation.</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="hover:text-red-600 py-6 text-lg font-medium">
                  Who can donate blood?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Most people who are healthy and at least 17 years old (16 with parental consent in some states) and
                  weigh at least 110 pounds can donate blood. However, eligibility requirements may vary depending on
                  the donation center and specific health conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="hover:text-red-600 py-6 text-lg font-medium">
                  How often can I donate blood?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  You can donate whole blood every 56 days (about 8 weeks). If you're donating platelets, you can donate
                  every 7 days, up to 24 times a year. For plasma, you can donate every 28 days, and for double red
                  cells, every 112 days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="hover:text-red-600 py-6 text-lg font-medium">
                  Is donating blood safe?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Yes, donating blood is very safe. All equipment used during the donation process is sterile and used
                  only once. The actual donation process typically takes about 8-10 minutes, and the entire visit
                  usually takes less than an hour.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="hover:text-red-600 py-6 text-lg font-medium">
                  How should I prepare for blood donation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Get a good night's sleep, eat a healthy meal, and drink plenty of fluids before donating. Wear
                  comfortable clothing with sleeves that can be rolled up. Bring your ID and a list of medications
                  you're taking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="hover:text-red-600 py-6 text-lg font-medium">
                  What happens to my blood after donation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  After donation, your blood is processed and tested for infectious diseases. It's then separated into
                  components (red cells, platelets, and plasma) that can be used for different medical needs. These
                  components are distributed to hospitals for patients who need them.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Redesigned */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-red-500/30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-500/30 translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-red-500/20 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-white/90 mb-6">
                    Subscribe to our newsletter to receive updates on blood drives, donation opportunities, and stories
                    about lives saved through blood donation.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-red-200" />
                      <p className="text-sm text-white/90">Join over 10,000 subscribers</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5 text-red-200" />
                      <p className="text-sm text-white/90">Exclusive donor rewards and recognition</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-red-200" />
                      <p className="text-sm text-white/90">Stay informed about blood supply needs</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
              >
                <NewsletterForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZWYyZjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">Take Action</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Your donation can save up to three lives. Schedule an appointment today or find a donation center near
                you.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:px-10"
              >
                Schedule an appointment
                <Calendar className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50 rounded-full px-8"
              >
                Find donation centers
                <MapPin className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Call to Schedule</p>
                  <p className="text-red-600 font-medium">(800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Online Scheduling</p>
                  <p className="text-red-600 font-medium">bloodlife.org/schedule</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Walk-ins Welcome</p>
                  <p className="text-red-600 font-medium">At all locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
