"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  MapPin,
  ArrowDown,
  Calendar,
  Users,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    id: "01",
    title: "Strategic Blood Donation Programs",
    subtitle:
      "Data-driven approach to saving lives through systematic donation management",
    image: "/giving-lifeblood.png",
    metric: "3 Lives Saved",
    metricDesc: "Per donation",
    urgency: "Critical Need",
    urgencyDesc: "O- and AB+ blood types",
  },
  {
    id: "02",
    title: "Professional Healthcare Partnership",
    subtitle:
      "Connecting donors with medical facilities through verified networks",
    image: "/community-blood-drive.jpg",
    metric: "47,500+ Donors",
    metricDesc: "Active network",
    urgency: "24/7 Operations",
    urgencyDesc: "Emergency response ready",
  },
  {
    id: "03",
    title: "Corporate Social Responsibility",
    subtitle:
      "Enterprise-level blood donation programs for organizational impact",
    image: "/blood-donation-drive.png",
    metric: "2 Second Interval",
    metricDesc: "Blood needed every",
    urgency: "Nationwide Coverage",
    urgencyDesc: "500+ partner locations",
  },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section
      ref={heroRef}
      className="!relative !h-screen !overflow-hidden !bg-white"
    >
      {/* Professional Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="!absolute !inset-0 !z-0"
        >
          <div className="!absolute !inset-0 !bg-white/60 !z-10" />
          <img
            src={heroSlides[activeSlide].image || "/placeholder.svg"}
            alt="Professional blood donation program"
            className="!w-full !h-full !object-cover"
          />
          <div className="!absolute !inset-0 !bg-gradient-to-r !from-white/90 !via-white/70 !to-white/50 !z-[5]" />
        </motion.div>
      </AnimatePresence>

      {/* Minimal geometric elements */}
      <div className="!absolute !inset-0 !z-[15] !pointer-events-none">
        <div className="!absolute !top-20 !right-20 !w-1 !h-32 !bg-red-200" />
        <div className="!absolute !top-40 !right-40 !w-1 !h-24 !bg-red-100" />
        <div className="!absolute !bottom-40 !left-20 !w-1 !h-28 !bg-red-100" />
      </div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="!relative !z-20 !container !mx-auto !h-full !flex !items-center !px-6 lg:!px-8"
      >
        <div className="!grid !grid-cols-1 lg:!grid-cols-12 !gap-8 !w-full !max-w-7xl !mx-auto">
          {/* Main content */}
          <div className="lg:!col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="!mb-6"
            >
              <div className="!flex !items-center !gap-4 !mb-6">
                <div className="!w-1 !h-8 !bg-red-600" />
                <div className="!flex !items-center !gap-3">
                  <span className="!text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                    Healthcare Initiative
                  </span>
                  <div className="!w-8 !h-8 !bg-slate-100 !border !border-slate-200 !flex !items-center !justify-center !text-xs !font-bold !text-slate-600">
                    {heroSlides[activeSlide].id}
                  </div>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="!text-4xl lg:!text-6xl !font-bold !text-slate-900 !mb-6 !leading-tight">
                  {heroSlides[activeSlide].title}
                </h1>

                <p className="!text-xl !text-slate-600 !mb-8 !max-w-2xl !leading-relaxed">
                  {heroSlides[activeSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="!flex !flex-col sm:!flex-row !gap-4 !mb-12">
              <Button
                size="lg"
                className="!bg-red-600 hover:!bg-red-700 !text-white !font-semibold !px-8 !py-4 !transition-all !duration-200 !group"
              >
                <span className="!flex !items-center !gap-2">
                  Schedule Appointment
                  <ArrowRight className="!h-4 !w-4 !transition-transform group-hover:!translate-x-1" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="!border-slate-300 !text-slate-700 hover:!bg-slate-50 hover:!border-slate-400 !px-8 !py-4 !transition-all !duration-200"
              >
                <span className="!flex !items-center !gap-2">
                  Find Locations
                  <MapPin className="!h-4 !w-4" />
                </span>
              </Button>
            </div>

            {/* Professional slide indicators */}
            <div className="!flex !gap-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`!flex !items-center !gap-3 !px-4 !py-2 !border !transition-all !duration-200 ${
                    activeSlide === index
                      ? "!border-red-300 !bg-red-50"
                      : "!border-slate-200 hover:!border-slate-300"
                  }`}
                >
                  <div
                    className={`!w-2 !h-2 ${
                      activeSlide === index ? "!bg-red-600" : "!bg-slate-300"
                    }`}
                  />
                  <span
                    className={`!text-xs !font-semibold ${
                      activeSlide === index
                        ? "!text-red-600"
                        : "!text-slate-500"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Professional metrics sidebar */}
          <div className="lg:!col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="!space-y-6"
              >
                {/* Key metric */}
                <div className="!bg-white/80 !backdrop-blur-sm !border !border-slate-200 !p-6">
                  <div className="!flex !items-center !gap-3 !mb-4">
                    <Activity className="!h-5 !w-5 !text-red-500" />
                    <span className="!text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                      Key Metric
                    </span>
                  </div>
                  <h3 className="!text-2xl !font-bold !text-slate-900 !mb-1">
                    {heroSlides[activeSlide].metric}
                  </h3>
                  <p className="!text-sm !text-slate-500">
                    {heroSlides[activeSlide].metricDesc}
                  </p>
                </div>

                {/* Urgency indicator */}
                <div className="!bg-white/80 !backdrop-blur-sm !border !border-slate-200 !p-6">
                  <div className="!flex !items-center !gap-3 !mb-4">
                    <Users className="!h-5 !w-5 !text-red-500" />
                    <span className="!text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider">
                      Current Status
                    </span>
                  </div>
                  <h3 className="!text-lg !font-semibold !text-slate-900 !mb-1">
                    {heroSlides[activeSlide].urgency}
                  </h3>
                  <p className="!text-sm !text-slate-500">
                    {heroSlides[activeSlide].urgencyDesc}
                  </p>
                </div>

                {/* Quick action */}
                <div className="!bg-red-50 !border !border-red-200 !p-6">
                  <div className="!flex !items-center !gap-3 !mb-4">
                    <Calendar className="!h-5 !w-5 !text-red-600" />
                    <span className="!text-xs !font-semibold !text-red-600 !uppercase !tracking-wider">
                      Quick Access
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="!w-full !border-red-200 !text-red-600 hover:!bg-red-100 hover:!border-red-300"
                  >
                    Emergency Donation
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="!absolute !bottom-8 !left-1/2 !transform -!translate-x-1/2 !z-20"
      >
        <Button
          variant="ghost"
          size="icon"
          className="!bg-white/80 !backdrop-blur-sm !text-slate-600 hover:!bg-slate-50 hover:!text-slate-900 !border !border-slate-200"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <ArrowDown className="!h-4 !w-4" />
        </Button>
      </motion.div>
    </section>
  );
}
