"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, Moon, Sun, User, Bell, Search } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { Link } from "react-router-dom"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  const pathname = location.pathname
  const isActive = (path) => pathname === path

  const navItems = [
    { href: "/", label: t("header.home") },
    { href: "/about", label: t("header.about") },
    { href: "/donate", label: t("header.donate") },
    { href: "/contact", label: t("header.contact") },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-md"
            >
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
                B+
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-xl font-bold text-transparent sm:inline-block"
            >
              Blood Nation
            </motion.span>
          </Link>

          <nav className="hidden md:flex md:gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-1/2 after:-translate-x-1/2 after:bg-primary after:content-['']"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </button>

          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </button>

          <div className="relative">
            <button
              onClick={() => document.getElementById("language-dropdown").classList.toggle("hidden")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </button>
            <div
              id="language-dropdown"
              className="absolute right-0 mt-2 hidden w-40 rounded-xl border border-border bg-card shadow-lg"
            >
              <div className="p-1">
                <button
                  onClick={() => {
                    setLanguage("en")
                    document.getElementById("language-dropdown").classList.add("hidden")
                  }}
                  className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  English {language === "en" && <span className="text-primary">✓</span>}
                </button>
                <button
                  onClick={() => {
                    setLanguage("fr")
                    document.getElementById("language-dropdown").classList.add("hidden")
                  }}
                  className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  Français {language === "fr" && <span className="text-primary">✓</span>}
                </button>
                <button
                  onClick={() => {
                    setLanguage("ar")
                    document.getElementById("language-dropdown").classList.add("hidden")
                  }}
                  className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  العربية {language === "ar" && <span className="text-primary">✓</span>}
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>

          <Link
            href="/auth"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <User className="h-4 w-4" />
            <span>{t("header.login")}</span>
          </Link>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="container overflow-hidden md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col space-y-1 pb-6"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`flex rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href) ? "bg-primary/10 text-primary" : "hover:bg-muted hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
