"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Heart, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  const hospitals = [
    { name: "City General Hospital", href: "#" },
    { name: "Memorial Medical Center", href: "#" },
    { name: "University Health System", href: "#" },
    { name: "Children's Hospital", href: "#" },
  ]

  const emergencyContacts = [
    { icon: Phone, contact: "+1 (800) 123-4567", href: "tel:+18001234567" },
    { icon: Mail, contact: "emergency@bloodnation.org", href: "mailto:emergency@bloodnation.org" },
    { icon: MapPin, contact: "Find Donation Centers", href: "#" },
  ]

  return (
    <footer className="relative border-t bg-muted/30">
      {/* Wave divider at the top */}
      <div className="absolute inset-x-0 -top-16 h-16 overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute block h-16 w-full"
          style={{ transform: "rotateY(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-muted/30"
          ></path>
        </svg>
      </div>

      {/* Newsletter section */}
      <div className="container py-12">
        <div className="mx-auto mb-16 max-w-4xl rounded-2xl border border-border/50 bg-card/80 p-8 shadow-lg backdrop-blur-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Join Our Community</h3>
              <p className="mt-2 text-muted-foreground">
                Stay updated with the latest news, blood donation drives, and opportunities to save lives.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="h-10 w-full rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm shadow-sm backdrop-blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
                <button className="group flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-md">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
                  B+
                </div>
              </div>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-xl font-bold text-transparent">
                Blood Nation
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting donors with those in need since 2010. Our mission is to ensure that everyone has access to safe
              blood when they need it most.
            </p>
            <div className="mt-2 flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="sr-only">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.partners")}</h3>
            <ul className="space-y-3">
              {hospitals.map((hospital) => (
                <li key={hospital.name}>
                  <Link
                    href={hospital.href}
                    className="animated-underline text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {hospital.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.emergency")}</h3>
            <ul className="space-y-3">
              {emergencyContacts.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <Link
                    href={item.href}
                    className="animated-underline text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.contact}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Eligibility", href: "#" },
                { label: "Donation Process", href: "#" },
                { label: "Blood Types", href: "#" },
                { label: "FAQs", href: "#" },
                { label: "Volunteer", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Research", href: "#" },
                { label: "Education", href: "#" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="animated-underline text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <div className="flex items-center gap-2 text-center text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-primary" />
            <p>
              &copy; {new Date().getFullYear()} Blood Nation. {t("footer.rights")}
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="animated-underline hover:text-primary">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="animated-underline hover:text-primary">
              {t("footer.terms")}
            </Link>
            <Link href="#" className="animated-underline hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
