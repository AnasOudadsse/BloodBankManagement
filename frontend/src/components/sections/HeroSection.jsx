import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Clock, ArrowRight, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroSlides = [
  {
    title: "Your donation saves lives",
    subtitle: "Every drop counts in the journey to save lives",
    image: "/giving-lifeblood.png",
    gradient: "from-red-200/90 via-red-300/80 to-red-400/70",
    badgeBg: "bg-red-600/90",
    badgeHover: "hover:bg-red-700/90",
    primaryBtn: "!bg-red-600 !text-white !hover:bg-red-700",
    secondaryBtn: "!border-white !text-white !bg-white/10 hover:!bg-white/20",
  },
  {
    title: "Be someone's hero today",
    subtitle: "One donation can save up to three lives",
    image: "/community-blood-drive.jpg",
    gradient: "from-red-200/90 via-red-300/80 to-red-400/70",
    badgeBg: "bg-white/20",
    badgeHover: "hover:bg-white/30",
    primaryBtn: "!bg-white !text-red-700 !hover:bg-red-50",
    secondaryBtn: "!border-white !text-white !bg-white/10 hover:!bg-white/20",
  },
  {
    title: "Join our community of lifesavers",
    subtitle: "Together we can make a difference",
    image: "/blood-donation-drive.png",
    gradient: "from-red-200/90 via-red-300/80 to-red-400/70",
    badgeBg: "bg-red-600/90",
    badgeHover: "hover:bg-red-700/90",
    primaryBtn: "!bg-red-600 !text-white !hover:bg-red-700",
    secondaryBtn: "!border-white !text-white !bg-white/10 hover:!bg-white/20",
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
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    setMounted(true);

    // Auto-rotate hero slides
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={heroSlides[activeSlide].image || "/placeholder.svg"}
            alt="Blood donation hero"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${heroSlides[activeSlide].gradient} opacity-60 z-[5]`}
          />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              className={`mb-6 ${heroSlides[activeSlide].badgeBg} ${heroSlides[activeSlide].badgeHover} backdrop-blur-sm border-none text-white`}
            >
              <Clock className="mr-1 h-3 w-3" /> Urgent need for O- and AB+
              blood types
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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {heroSlides[activeSlide].title
                  .split(" ")
                  .map((word, i, arr) => (
                    <span key={i}>
                      {i === arr.length - 1 ? (
                        <span className="text-red-200">{word}</span>
                      ) : (
                        <span>{word} </span>
                      )}
                    </span>
                  ))}
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
                {heroSlides[activeSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex my-5 flex-wrap gap-4">
            <Button
              size="lg"
              className="!bg-white !text-red-700 !whitespace-nowrap !rounded-full !px-8 !transition-all hover:!scale-105 hover:!shadow-xl hover:!shadow-red-500/20 group"
            >
              <span className="flex items-center gap-2">
                Become a donor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="!border-white !text-white !bg-white/10 hover:!bg-white/20 !rounded-full !px-8 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Find donation centers
                <MapPin className="h-4 w-4" />
              </span>
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
  );
}
