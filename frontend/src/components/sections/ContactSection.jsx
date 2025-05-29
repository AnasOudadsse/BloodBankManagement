"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    id: "01",
    icon: <Phone className="!h-5 !w-5 !text-white" strokeWidth={2} />,
    title: "Emergency Hotline",
    content: "+1 (555) 123-4567",
    description: "24/7 medical emergency support",
    category: "Emergency Contact",
    status: "Active",
  },
  {
    id: "02",
    icon: <Mail className="!h-5 !w-5 !text-white" strokeWidth={2} />,
    title: "Professional Inquiries",
    content: "medical@bloodbank.com",
    description: "Response within 4 business hours",
    category: "Medical Support",
    status: "Monitored",
  },
  {
    id: "03",
    icon: <MapPin className="!h-5 !w-5 !text-white" strokeWidth={2} />,
    title: "Medical Facility",
    content: "123 Medical Center Drive",
    description: "Downtown Medical District, Suite 400",
    category: "Primary Location",
    status: "Operational",
  },
  {
    id: "04",
    icon: <Clock className="!h-5 !w-5 !text-white" strokeWidth={2} />,
    title: "Operating Hours",
    content: "Mon-Sat: 8AM - 8PM",
    description: "Sunday: 9AM - 5PM | Holidays: Emergency Only",
    category: "Schedule",
    status: "Current",
  },
]

export function ContactSection() {
  return (
    <section className="!py-24 !bg-white !relative !overflow-hidden">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

      {/* Creative geometric elements */}
      <div className="!absolute !top-20 !left-20 !w-1 !h-32 !bg-blue-200 !transform !rotate-12" />
      <div className="!absolute !top-40 !right-40 !w-2 !h-24 !bg-red-100 !transform !-rotate-12" />
      <div className="!absolute !bottom-40 !right-20 !w-1 !h-28 !bg-slate-200 !transform !rotate-45" />

      <div className="!container !mx-auto !px-6 lg:!px-8 !relative">
        {/* Professional header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="!mb-16"
        >
          <div className="!flex !items-center !gap-3 !mb-6">
            <div className="!w-1 !h-8 !bg-red-600" />
            <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
              Professional Support
            </span>
          </div>
          <h2 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !max-w-4xl">
            Medical Support & Professional Consultation
          </h2>
          <p className="!text-lg !text-slate-600 !max-w-2xl">
            Connect with our certified medical professionals for donation inquiries, health assessments, and emergency
            support through multiple communication channels.
          </p>
        </motion.div>

        <div className="!grid !grid-cols-1 lg:!grid-cols-12 !gap-12 !max-w-7xl !mx-auto">
          {/* Professional contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:!col-span-5 !space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="!group !relative"
              >
                {/* Professional contact card */}
                <div className="!relative !bg-white !border !border-slate-200 hover:!border-slate-300 !transition-all !duration-300 !overflow-hidden">
                  {/* Header section */}
                  <div className="!p-6 !border-b !border-slate-100">
                    <div className="!flex !items-center !justify-between !mb-4">
                      <div className="!flex !items-center !gap-3">
                        <div className="!w-8 !h-8 !bg-slate-100 !flex !items-center !justify-center !text-xs !font-bold !text-slate-600">
                          {info.id}
                        </div>
                        <div className="!w-10 !h-10 !bg-red-600 !flex !items-center !justify-center">{info.icon}</div>
                      </div>
                      <div className="!px-2 !py-1 !bg-green-100 !text-xs !font-semibold !text-green-600 !uppercase !tracking-wider">
                        {info.status}
                      </div>
                    </div>

                    <h3 className="!text-lg !font-bold !text-slate-900 !mb-1">{info.title}</h3>
                    <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider !mb-3">
                      {info.category}
                    </div>
                    <p className="!text-sm !font-medium !text-slate-900 !mb-2">{info.content}</p>
                    <p className="!text-xs !text-slate-600">{info.description}</p>
                  </div>

                  {/* Action section */}
                  <div className="!p-4 !bg-slate-50/50">
                    <div className="!flex !items-center !justify-between">
                      <div className="!text-xs !text-slate-500">Professional Service</div>
                      <button className="!text-xs !font-semibold !text-red-600 hover:!text-red-700 !transition-colors !duration-200">
                        Contact Now
                      </button>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="!absolute !inset-0 !bg-gradient-to-r !from-red-500/5 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:!col-span-7"
          >
            <div className="!relative !bg-white !border-2 !border-slate-200 !overflow-hidden">
              {/* Form header */}
              <div className="!relative !bg-gradient-to-r !from-slate-600 !to-slate-700 !p-6 !transform !-skew-y-1 !-mt-1 !mb-6">
                <div className="!transform !skew-y-1">
                  <div className="!flex !items-center !gap-4 !mb-2">
                    <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                      <MessageSquare className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="!text-xl !font-bold !text-white">Professional Inquiry Form</h3>
                      <div className="!text-xs !text-white/80 !uppercase !tracking-wider">Secure Communication</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form content */}
              <div className="!px-6 !pb-6">
                <form className="!space-y-6">
                  <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-6">
                    <div>
                      <label htmlFor="name" className="!block !text-sm !font-semibold !text-slate-700 !mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="!w-full !border-slate-200 !bg-slate-50 focus:!border-red-300 focus:!bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="!block !text-sm !font-semibold !text-slate-700 !mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@domain.com"
                        className="!w-full !border-slate-200 !bg-slate-50 focus:!border-red-300 focus:!bg-white"
                      />
                    </div>
                  </div>

                  <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-6">
                    <div>
                      <label htmlFor="phone" className="!block !text-sm !font-semibold !text-slate-700 !mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="!w-full !border-slate-200 !bg-slate-50 focus:!border-red-300 focus:!bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="!block !text-sm !font-semibold !text-slate-700 !mb-2">
                        Inquiry Type
                      </label>
                      <select className="!w-full !px-3 !py-2 !border !border-slate-200 !bg-slate-50 focus:!border-red-300 focus:!bg-white !text-sm !rounded-md">
                        <option>General Inquiry</option>
                        <option>Medical Consultation</option>
                        <option>Donation Scheduling</option>
                        <option>Emergency Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="!block !text-sm !font-semibold !text-slate-700 !mb-2">
                      Professional Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide detailed information about your inquiry..."
                      className="!w-full !min-h-[120px] !border-slate-200 !bg-slate-50 focus:!border-red-300 focus:!bg-white"
                    />
                  </div>

                  {/* Professional consent */}
                  <div className="!bg-slate-50 !border !border-slate-200 !p-4">
                    <div className="!flex !items-start !gap-3">
                      <Shield className="!h-4 !w-4 !text-slate-500 !mt-0.5 !flex-shrink-0" />
                      <div className="!text-xs !text-slate-600">
                        <p className="!mb-2">
                          <strong>Privacy Notice:</strong> All communications are confidential and protected under HIPAA
                          regulations.
                        </p>
                        <label className="!flex !items-center !gap-2">
                          <input type="checkbox" className="!text-red-600" />
                          <span>I consent to secure communication for medical consultation purposes.</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="!flex !flex-col sm:!flex-row !gap-4">
                    <Button
                      type="submit"
                      className="!flex-1 !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !py-3 !transition-all !duration-300 !transform hover:!scale-105"
                    >
                      <Send className="!mr-2 !h-4 !w-4" />
                      Send Professional Inquiry
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="!flex-1 !border-slate-300 !text-slate-700 hover:!bg-slate-50 !py-3"
                    >
                      <Calendar className="!mr-2 !h-4 !w-4" />
                      Schedule Consultation
                    </Button>
                  </div>
                </form>
              </div>

              {/* Creative corner accent */}
              <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-slate-300 !to-slate-400 !opacity-20 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
            </div>
          </motion.div>
        </div>

        {/* Professional support section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="!mt-16 !border-t !border-slate-200 !pt-12"
        >
          <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8">
            <div className="lg:!col-span-2">
              <h3 className="!text-xl !font-bold !text-slate-900 !mb-4">Professional Medical Support</h3>
              <p className="!text-slate-600 !mb-6">
                Our certified medical team provides comprehensive support for all donation-related inquiries. All
                communications are secure, confidential, and compliant with healthcare privacy regulations.
              </p>

              <div className="!grid !grid-cols-3 !gap-4 !mb-6">
                <div className="!bg-gradient-to-br !from-blue-50 !to-blue-100 !border !border-blue-200 !p-4 !transform hover:!scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Response Time</div>
                  <div className="!text-lg !font-bold !text-blue-600">4 Hours</div>
                </div>
                <div className="!bg-gradient-to-br !from-green-50 !to-green-100 !border !border-green-200 !p-4 !transform hover:!scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Availability</div>
                  <div className="!text-lg !font-bold !text-green-600">24/7</div>
                </div>
                <div className="!bg-gradient-to-br !from-purple-50 !to-purple-100 !border !border-purple-200 !p-4 !transform hover:!scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Satisfaction</div>
                  <div className="!text-lg !font-bold !text-purple-600">99.2%</div>
                </div>
              </div>

              <div className="!flex !flex-wrap !gap-3">
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  HIPAA Compliant
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Certified Medical Staff
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Secure Communication
                </div>
              </div>
            </div>

            <div className="!relative !overflow-hidden">
              <div className="!bg-gradient-to-br !from-red-50 !to-red-100 !border-2 !border-red-200 !p-6 !transform hover:!scale-105 !transition-all !duration-300">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <Phone className="!h-5 !w-5 !text-red-600" />
                  <span className="!text-xs !font-semibold !text-red-600 !uppercase !tracking-wider">
                    Emergency Support
                  </span>
                </div>
                <h4 className="!text-lg !font-semibold !text-slate-900 !mb-2">24/7 Emergency Hotline</h4>
                <p className="!text-sm !text-slate-600 !mb-4">
                  Immediate medical support for donation-related emergencies and urgent inquiries.
                </p>
                <button className="!w-full !px-4 !py-3 !bg-gradient-to-r !from-red-600 !to-red-700 hover:!from-red-700 hover:!to-red-800 !text-white !font-semibold !transition-all !duration-300 !transform hover:!scale-105 !rounded-lg !shadow-lg hover:!shadow-xl">
                  Call Emergency Line
                </button>
              </div>
              {/* Decorative corner */}
              <div className="!absolute !top-0 !right-0 !w-12 !h-12 !bg-gradient-to-br !from-red-300 !to-red-400 !opacity-20 !transform !rotate-45 !translate-x-6 !-translate-y-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
