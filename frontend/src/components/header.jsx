"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Heart, MapPin, Calendar, User, ChevronDown, Search, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Heart
                className={`h-8 w-8 ${scrolled ? "text-red-600" : "text-white"} transition-colors duration-300`}
                fill="currentColor"
              />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 rounded-full bg-blue-500 ring-1 ring-white"></span>
            </div>
            <span
              className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"} transition-colors duration-300`}
            >
              BloodLife
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/" label="Home" scrolled={scrolled} />
            <NavDropdown label="About" scrolled={scrolled}>
              <DropdownLink href="/about/mission">Our Mission</DropdownLink>
              <DropdownLink href="/about/team">Our Team</DropdownLink>
              <DropdownLink href="/about/impact">Our Impact</DropdownLink>
            </NavDropdown>
            <NavLink href="/donate" label="Donate" scrolled={scrolled} />
            <NavLink href="/events" label="Events" scrolled={scrolled} />
            <NavLink href="/education" label="Education" scrolled={scrolled} />
            <NavLink href="/contact" label="Contact" scrolled={scrolled} />
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
              } transition-colors duration-300`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
              } transition-colors duration-300`}
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className={`${
                scrolled
                  ? "border-gray-200 text-gray-700 hover:bg-gray-50"
                  : "border-white/30 text-white hover:bg-white/20"
              } transition-colors duration-300`}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Find Centers
            </Button>

            <Button
              size="sm"
              className={`${
                scrolled ? "bg-red-600 hover:bg-red-700 text-white" : "bg-white text-red-700 hover:bg-red-50"
              } transition-colors duration-300`}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Donation
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-red-600" fill="currentColor" />
                    <span className="text-lg font-bold text-gray-900">BloodLife</span>
                  </div>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-700">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>

                <div className="py-4 px-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search..." className="pl-10 bg-gray-50 border-gray-200" />
                  </div>
                </div>

                <nav className="flex flex-col py-6 space-y-4 px-4">
                  <MobileNavLink href="/" label="Home" />
                  <MobileNavLink href="/about" label="About" />
                  <MobileNavLink href="/donate" label="Donate" />
                  <MobileNavLink href="/events" label="Events" />
                  <MobileNavLink href="/education" label="Education" />
                  <MobileNavLink href="/contact" label="Contact" />
                </nav>

                <div className="mt-auto space-y-4 py-6 border-t px-4">
                  <Button className="w-full" variant="outline">
                    <MapPin className="mr-2 h-4 w-4" />
                    Find Centers
                  </Button>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Donation
                  </Button>

                  <Button className="w-full" variant="ghost">
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for blood drives, donation centers, or information..."
                  className="pl-10 py-6 text-lg"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, label, scrolled }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium ${
        scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"
      } transition-colors duration-300`}
    >
      {label}
    </Link>
  )
}

function NavDropdown({ label, children, scrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={`flex items-center gap-1 text-sm font-medium ${
          scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"
        } transition-colors duration-300`}
      >
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
          >
            <div className="py-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DropdownLink({ href, children }) {
  return (
    <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, label }) {
  return (
    <Link href={href} className="flex items-center py-2 text-base font-medium text-gray-900 hover:text-red-600">
      {label}
    </Link>
  )
}
