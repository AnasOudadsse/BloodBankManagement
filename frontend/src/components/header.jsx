"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MapPin,
  Calendar,
  User,
  ChevronDown,
  Search,
  Bell,
  Activity,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`!fixed !top-0 !left-0 !right-0 !z-50 !transition-all !duration-300 ${
        scrolled
          ? "!bg-white/95 !backdrop-blur-sm !border-b !border-slate-200 !py-3"
          : "!bg-white !border-b !border-slate-100 !py-4"
      }`}
    >
      <div className="!container !mx-auto !px-6 lg:!px-8">
        <div className="!flex !items-center !justify-between">
          {/* Professional Logo */}
          <div className="!flex !items-center !gap-4">
            <div className="!flex !items-center !gap-3">
              <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center">
                <Activity className="!h-5 !w-5 !text-white" strokeWidth={2} />
              </div>
              <div>
                <span className="!text-lg !font-bold !text-slate-900">
                  BloodLife
                </span>
                <div className="!text-xs !text-slate-500 !uppercase !tracking-wider">
                  Healthcare Initiative
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="!hidden lg:!flex !items-center !gap-8">
            <NavLink href="/" label="Dashboard" />
            <NavDropdown label="Programs">
              <DropdownLink href="/programs/corporate">
                Corporate Programs
              </DropdownLink>
              <DropdownLink href="/programs/emergency">
                Emergency Response
              </DropdownLink>
              <DropdownLink href="/programs/community">
                Community Outreach
              </DropdownLink>
            </NavDropdown>
            <NavLink href="/donate" label="Donation Centers" />
            <NavLink href="/analytics" label="Analytics" />
            <NavLink href="/resources" label="Resources" />
            <NavLink href="/support" label="Support" />
          </nav>

          {/* Professional Action Bar */}
          <div className="!hidden lg:!flex !items-center !gap-3">
            {/* Status Indicator */}
            <div className="!flex !items-center !gap-2 !px-3 !py-1 !bg-slate-50 !border !border-slate-200 !text-xs">
              <div className="!w-2 !h-2 !bg-green-500 !rounded-full" />
              <span className="!text-slate-600 !font-medium">
                System Online
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="!text-slate-600 hover:!bg-slate-100"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="!h-4 !w-4" />
              <span className="!sr-only">Search</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="!text-slate-600 hover:!bg-slate-100 !relative"
            >
              <Bell className="!h-4 !w-4" />
              <div className="!absolute -!top-1 -!right-1 !w-2 !h-2 !bg-red-500 !rounded-full" />
              <span className="!sr-only">Notifications</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="!border-slate-200 !text-slate-700 hover:!bg-slate-50"
            >
              <MapPin className="!mr-2 !h-4 !w-4" />
              Find Locations
            </Button>

            <Button
              size="sm"
              className="!bg-red-600 hover:!bg-red-700 !text-white"
            >
              <Calendar className="!mr-2 !h-4 !w-4" />
              Schedule Appointment
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="!text-slate-600 hover:!bg-slate-100"
            >
              <User className="!h-4 !w-4" />
              <span className="!sr-only">Account</span>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:!hidden !text-slate-700"
              >
                <Menu className="!h-5 !w-5" />
                <span className="!sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="!w-[320px] !bg-white">
              <div className="!flex !flex-col !h-full">
                <div className="!flex !items-center !justify-between !py-4 !border-b !border-slate-200">
                  <div className="!flex !items-center !gap-3">
                    <div className="!w-6 !h-6 !bg-red-600 !flex !items-center !justify-center">
                      <Activity
                        className="!h-4 !w-4 !text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <span className="!text-base !font-bold !text-slate-900">
                        BloodLife
                      </span>
                      <div className="!text-xs !text-slate-500">
                        Healthcare Initiative
                      </div>
                    </div>
                  </div>
                </div>

                <div className="!py-4">
                  <div className="!relative">
                    <Search className="!absolute !left-3 !top-1/2 -!translate-y-1/2 !h-4 !w-4 !text-slate-400" />
                    <Input
                      placeholder="Search..."
                      className="!pl-10 !bg-slate-50 !border-slate-200"
                    />
                  </div>
                </div>

                <nav className="!flex !flex-col !py-4 !space-y-1">
                  <MobileNavLink href="/" label="Dashboard" />
                  <MobileNavLink href="/programs" label="Programs" />
                  <MobileNavLink href="/donate" label="Donation Centers" />
                  <MobileNavLink href="/analytics" label="Analytics" />
                  <MobileNavLink href="/resources" label="Resources" />
                  <MobileNavLink href="/support" label="Support" />
                </nav>

                <div className="!mt-auto !space-y-3 !py-6 !border-t !border-slate-200">
                  <div className="!flex !items-center !gap-2 !px-3 !py-2 !bg-slate-50 !text-xs">
                    <div className="!w-2 !h-2 !bg-green-500 !rounded-full" />
                    <span className="!text-slate-600">System Online</span>
                  </div>

                  <Button className="!w-full" variant="outline">
                    <MapPin className="!mr-2 !h-4 !w-4" />
                    Find Locations
                  </Button>

                  <Button className="!w-full !bg-red-600 hover:!bg-red-700 !text-white">
                    <Calendar className="!mr-2 !h-4 !w-4" />
                    Schedule Appointment
                  </Button>

                  <Button className="!w-full" variant="ghost">
                    <User className="!mr-2 !h-4 !w-4" />
                    Account Portal
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Professional Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="!absolute !top-full !left-0 !right-0 !bg-white !border-b !border-slate-200 !p-6"
          >
            <div className="!container !mx-auto !px-6 lg:!px-8">
              <div className="!max-w-2xl !mx-auto">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <div className="!w-1 !h-6 !bg-red-600" />
                  <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
                    Search Platform
                  </span>
                </div>
                <div className="!relative">
                  <Search className="!absolute !left-4 !top-1/2 -!translate-y-1/2 !h-5 !w-5 !text-slate-400" />
                  <Input
                    placeholder="Search donation centers, programs, or resources..."
                    className="!pl-12 !py-4 !text-base !border-slate-200 !bg-slate-50"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="!absolute !right-2 !top-1/2 -!translate-y-1/2 !text-slate-400 hover:!text-slate-600"
                    onClick={() => setSearchOpen(false)}
                  >
                    <X className="!h-4 !w-4" />
                    <span className="!sr-only">Close search</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="!text-sm !font-medium !text-slate-700 hover:!text-red-600 !transition-colors !duration-200"
    >
      {label}
    </a>
  );
}

function NavDropdown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="!relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="!flex !items-center !gap-1 !text-sm !font-medium !text-slate-700 hover:!text-red-600 !transition-colors !duration-200">
        {label}
        <ChevronDown className="!h-3 !w-3" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="!absolute !top-full !left-0 !mt-2 !w-56 !bg-white !border !border-slate-200 !shadow-lg !overflow-hidden !z-50"
          >
            <div className="!py-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownLink({ href, children }) {
  return (
    <a
      href={href}
      className="!block !px-4 !py-2 !text-sm !text-slate-700 hover:!bg-slate-50 hover:!text-red-600 !transition-colors !duration-200"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, label }) {
  return (
    <a
      href={href}
      className="!flex !items-center !py-3 !px-3 !text-base !font-medium !text-slate-700 hover:!text-red-600 hover:!bg-slate-50 !transition-colors !duration-200"
    >
      {label}
    </a>
  );
}
