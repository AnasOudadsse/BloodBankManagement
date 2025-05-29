"use client"

import { motion } from "framer-motion"
import {
  Activity,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Globe,
  ArrowRight,
  Shield,
  Clock,
  Users,
  FileText,
  Calendar,
  Building,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerSections = [
  {
    title: "Donation Services",
    links: [
      { label: "Schedule Appointment", href: "/schedule" },
      { label: "Donation Centers", href: "/centers" },
      { label: "Eligibility Assessment", href: "/eligibility" },
      { label: "Blood Drive Events", href: "/events" },
      { label: "Corporate Programs", href: "/corporate" },
      { label: "Emergency Donations", href: "/emergency" },
    ],
  },
  {
    title: "Medical Resources",
    links: [
      { label: "Health Guidelines", href: "/health" },
      { label: "Medical Consultation", href: "/consultation" },
      { label: "Safety Protocols", href: "/safety" },
      { label: "Research Library", href: "/research" },
      { label: "Clinical Studies", href: "/studies" },
      { label: "Professional Training", href: "/training" },
    ],
  },
  {
    title: "Support & Information",
    links: [
      { label: "FAQ Knowledge Base", href: "/faq" },
      { label: "Patient Stories", href: "/stories" },
      { label: "Impact Reports", href: "/impact" },
      { label: "Volunteer Opportunities", href: "/volunteer" },
      { label: "Community Outreach", href: "/community" },
      { label: "Media Resources", href: "/media" },
    ],
  },
]

const contactInfo = [
  {
    icon: <Phone className="!h-4 !w-4" />,
    label: "Emergency Hotline",
    value: "+1 (555) 123-4567",
    description: "24/7 Medical Support",
  },
  {
    icon: <Mail className="!h-4 !w-4" />,
    label: "Professional Inquiries",
    value: "medical@bloodlife.org",
    description: "Response within 4 hours",
  },
  {
    icon: <MapPin className="!h-4 !w-4" />,
    label: "Medical Facility",
    value: "123 Medical Center Drive",
    description: "Downtown Medical District",
  },
  {
    icon: <Globe className="!h-4 !w-4" />,
    label: "Professional Portal",
    value: "portal.bloodlife.org",
    description: "Healthcare Provider Access",
  },
]

const certifications = [
  { name: "FDA Approved", icon: <Shield className="!h-4 !w-4" /> },
  { name: "HIPAA Compliant", icon: <FileText className="!h-4 !w-4" /> },
  { name: "ISO 9001 Certified", icon: <Award className="!h-4 !w-4" /> },
  { name: "24/7 Operations", icon: <Clock className="!h-4 !w-4" /> },
]

export function Footer() {
  return (
    <footer className="!bg-white !relative !overflow-hidden">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

      {/* Creative geometric elements */}
      <div className="!absolute !top-0 !left-0 !w-1 !h-32 !bg-red-200" />
      <div className="!absolute !top-20 !right-20 !w-2 !h-24 !bg-slate-200 !transform !rotate-45" />
      <div className="!absolute !bottom-0 !right-0 !w-1 !h-28 !bg-red-100" />

      <div className="!container !mx-auto !px-6 lg:!px-8 !relative">
        {/* Professional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="!py-16 !border-b !border-slate-200"
        >
          <div className="!max-w-7xl !mx-auto">
            <div className="!grid !grid-cols-1 lg:!grid-cols-12 !gap-8 !items-center">
              <div className="lg:!col-span-8">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <div className="!w-1 !h-8 !bg-red-600" />
                  <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
                    Join Our Mission
                  </span>
                </div>
                <h3 className="!text-3xl lg:!text-4xl !font-bold !text-slate-900 !mb-4">
                  Ready to Make a Professional Impact?
                </h3>
                <p className="!text-lg !text-slate-600 !max-w-2xl">
                  Schedule your donation appointment with our certified medical team and become part of our life-saving
                  healthcare network.
                </p>
              </div>

              <div className="lg:!col-span-4">
                <div className="!flex !flex-col !gap-4">
                  <Button className="!w-full !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !py-3 !transition-all !duration-300 !transform hover:!scale-105">
                    <Calendar className="!mr-2 !h-4 !w-4" />
                    Schedule Professional Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="!w-full !border-slate-300 !text-slate-700 hover:!bg-slate-50 !py-3"
                  >
                    <MapPin className="!mr-2 !h-4 !w-4" />
                    Find Medical Centers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="!py-16">
          <div className="!max-w-7xl !mx-auto">
            {/* Professional Brand and Navigation Grid */}
            <div className="!grid !grid-cols-1 lg:!grid-cols-10 !gap-12 !mb-12">
              {/* Professional Brand Section */}
              <motion.div className="lg:!col-span-4">
                <div className="!mb-8">
                  <div className="!flex !items-center !gap-3 !mb-6">
                    <div className="!w-10 !h-10 !bg-red-600 !flex !items-center !justify-center">
                      <Activity className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="!text-xl !font-bold !text-slate-900">BloodLife</span>
                      <div className="!text-xs !text-slate-500 !uppercase !tracking-wider">Healthcare Initiative</div>
                    </div>
                  </div>

                  <p className="!text-slate-600 !mb-6 !leading-relaxed">
                    Professional blood donation services connecting certified medical facilities with qualified donors
                    through evidence-based healthcare protocols and regulatory compliance standards.
                  </p>

                  {/* Professional certifications */}
                  <div className="!mb-6">
                    <div className="!text-sm !font-semibold !text-slate-700 !mb-3">Professional Certifications</div>
                    <div className="!grid !grid-cols-2 !gap-2">
                      {certifications.map((cert, index) => (
                        <div key={index} className="!flex !items-center !gap-2 !text-xs !text-slate-600">
                          <div className="!w-6 !h-6 !bg-slate-100 !flex !items-center !justify-center">{cert.icon}</div>
                          {cert.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional social links */}
                  <div className="!flex !gap-3">
                    <SocialLink href="#" icon={<Facebook className="!h-4 !w-4" />} platform="Facebook" />
                    <SocialLink href="#" icon={<Twitter className="!h-4 !w-4" />} platform="Twitter" />
                    <SocialLink href="#" icon={<Instagram className="!h-4 !w-4" />} platform="Instagram" />
                    <SocialLink href="#" icon={<Youtube className="!h-4 !w-4" />} platform="YouTube" />
                  </div>
                </div>
              </motion.div>

              {/* Professional Navigation Sections */}
              <div className="lg:!col-span-6">
                <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8">
                  {footerSections.map((section, sectionIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="!text-lg !font-bold !text-slate-900 !mb-6">{section.title}</h3>
                      <ul className="!space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <FooterLink key={linkIndex} href={link.href} label={link.label} />
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Contact Section - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="!border-t !border-slate-200 !pt-12"
            >
              <h3 className="!text-lg !font-bold !text-slate-900 !mb-6">Professional Contact Information</h3>
              <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-6 !mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="!group">
                    <div className="!flex !items-start !gap-3 !p-4 !bg-slate-50 !border !border-slate-200 hover:!border-slate-300 !transition-colors !duration-200">
                      <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center !flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div className="!flex-1">
                        <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider !mb-1">
                          {contact.label}
                        </div>
                        <div className="!text-sm !font-medium !text-slate-900 !mb-1">{contact.value}</div>
                        <div className="!text-xs !text-slate-600">{contact.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Newsletter - Centered */}
              <div className="!max-w-md !mx-auto">
                <div className="!bg-slate-50 !border !border-slate-200 !p-6 !text-center">
                  <h4 className="!text-sm !font-bold !text-slate-900 !mb-2">Professional Updates</h4>
                  <p className="!text-xs !text-slate-600 !mb-4">
                    Subscribe to receive medical updates, research findings, and donation opportunities.
                  </p>
                  <div className="!flex !gap-2">
                    <Input
                      type="email"
                      placeholder="professional@email.com"
                      className="!flex-1 !bg-white !border-slate-200 !text-sm focus:!border-red-300"
                    />
                    <Button className="!bg-red-600 hover:!bg-red-700 !px-3">
                      <ArrowRight className="!h-4 !w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Professional Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="!border-t !border-slate-200 !py-8"
        >
          <div className="!flex !flex-col lg:!flex-row !justify-between !items-center !gap-6">
            <div className="!flex !flex-col sm:!flex-row !items-center !gap-6">
              <p className="!text-sm !text-slate-600">
                © {new Date().getFullYear()} BloodLife Healthcare Initiative. All rights reserved.
              </p>
              <div className="!flex !items-center !gap-4">
                <div className="!flex !items-center !gap-2 !text-xs !text-slate-500">
                  <Users className="!h-3 !w-3" />
                  <span>47,500+ Active Donors</span>
                </div>
                <div className="!w-1 !h-1 !bg-slate-300 !rounded-full" />
                <div className="!flex !items-center !gap-2 !text-xs !text-slate-500">
                  <Building className="!h-3 !w-3" />
                  <span>500+ Partner Facilities</span>
                </div>
              </div>
            </div>

            <div className="!flex !flex-wrap !gap-6">
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/terms" label="Terms of Service" />
              <FooterLink href="/compliance" label="Regulatory Compliance" />
              <FooterLink href="/accessibility" label="Accessibility" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }) {
  return (
    <li className="!list-none">
      <a
        href={href}
        className="!text-sm !text-slate-600 hover:!text-red-600 !transition-colors !duration-200 !font-medium"
      >
        {label}
      </a>
    </li>
  )
}

function SocialLink({ href, icon, platform }) {
  return (
    <a
      href={href}
      className="!w-10 !h-10 !bg-slate-100 !border !border-slate-200 !flex !items-center !justify-center !text-slate-600 hover:!bg-red-600 hover:!text-white hover:!border-red-600 !transition-all !duration-200"
      aria-label={`Follow us on ${platform}`}
    >
      {icon}
    </a>
  )
}
