import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube, Globe, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with CTA */}
        <div className="py-12 border-b border-gray-800">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to save lives?</h3>
              <p className="text-gray-400">Schedule your donation appointment today.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Schedule Donation</Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Find Centers
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative">
                  <Heart className="h-8 w-8 text-red-500" fill="currentColor" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3 rounded-full bg-blue-500 ring-1 ring-gray-900"></span>
                </div>
                <span className="text-xl font-bold">BloodLife</span>
              </div>

              <p className="text-gray-400 mb-6">
                BloodLife is dedicated to saving lives through blood donation. Join us in our mission to ensure blood is
                available for those in need.
              </p>

              <div className="flex space-x-4">
                <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/donate" label="Donate Blood" />
                <FooterLink href="/events" label="Blood Drives" />
                <FooterLink href="/education" label="Blood Education" />
                <FooterLink href="/volunteer" label="Volunteer" />
                <FooterLink href="/contact" label="Contact Us" />
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <span className="text-gray-400">
                    123 Blood Center Drive
                    <br />
                    Anytown, ST 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-400">(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-400">contact@bloodlife.org</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-400">www.bloodlife.org</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates on blood drives and donation opportunities.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-red-500"
                />
                <Button className="bg-red-600 hover:bg-red-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BloodLife. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-gray-400 hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {label}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors"
    >
      {icon}
    </a>
  )
}
