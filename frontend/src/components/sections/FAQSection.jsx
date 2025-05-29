"use client"

import { motion } from "framer-motion"
import { HelpCircle, ChevronDown, Clock, Shield, FileText, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "01",
    question: "What is the recommended donation frequency?",
    answer:
      "Whole blood donations are permitted every 56 days (8 weeks) to ensure complete physiological recovery. Platelet apheresis procedures can be performed up to 24 times annually with appropriate intervals.",
    category: "Donation Schedule",
    icon: <Clock className="!h-4 !w-4" />,
  },
  {
    id: "02",
    question: "What is the total time commitment for donation?",
    answer:
      "The complete donation protocol requires approximately 60 minutes, including registration (15 min), medical screening (10 min), blood collection (8-10 min), and supervised recovery (15 min).",
    category: "Process Duration",
    icon: <Clock className="!h-4 !w-4" />,
  },
  {
    id: "03",
    question: "What safety protocols are implemented?",
    answer:
      "All procedures utilize single-use, FDA-approved sterile equipment. Donations are supervised by certified medical professionals following strict safety protocols and regulatory compliance standards.",
    category: "Safety Standards",
    icon: <Shield className="!h-4 !w-4" />,
  },
  {
    id: "04",
    question: "What are the pre-donation preparation requirements?",
    answer:
      "Donors should consume a nutritious meal within 3 hours, maintain adequate hydration, ensure 7-8 hours of sleep, and avoid strenuous physical activity 24 hours before and after donation.",
    category: "Preparation Protocol",
    icon: <FileText className="!h-4 !w-4" />,
  },
  {
    id: "05",
    question: "How is donated blood processed and distributed?",
    answer:
      "Blood undergoes comprehensive testing for infectious diseases, then component separation into red cells, plasma, and platelets. Products are stored under controlled conditions and distributed to medical facilities based on clinical demand.",
    category: "Processing & Distribution",
    icon: <Users className="!h-4 !w-4" />,
  },
  {
    id: "06",
    question: "How do medications affect donation eligibility?",
    answer:
      "Medication compatibility varies by pharmaceutical class and dosage. Our medical staff conducts individual assessments during screening to determine eligibility based on current medication regimens and medical history.",
    category: "Medical Eligibility",
    icon: <HelpCircle className="!h-4 !w-4" />,
  },
]

export function FAQSection() {
  return (
    <section className="!py-24 !bg-white !relative !overflow-hidden">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

      {/* Creative geometric elements */}
      <div className="!absolute !top-20 !right-20 !w-1 !h-32 !bg-slate-200 !transform !rotate-12" />
      <div className="!absolute !bottom-40 !left-20 !w-2 !h-28 !bg-red-100 !transform !-rotate-12" />

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
            <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">Knowledge Base</span>
          </div>
          <h2 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !max-w-4xl">
            Frequently Asked Questions
          </h2>
          <p className="!text-lg !text-slate-600 !max-w-2xl">
            Comprehensive answers to common inquiries about blood donation procedures, safety protocols, and eligibility
            requirements.
          </p>
        </motion.div>

        <div className="!grid !grid-cols-1 lg:!grid-cols-12 !gap-8 !max-w-7xl !mx-auto">
          {/* FAQ Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:!col-span-3"
          >
            <div className="!bg-white !border !border-slate-200 !p-6 !sticky !top-8">
              <h3 className="!text-lg !font-bold !text-slate-900 !mb-4">FAQ Categories</h3>
              <div className="!space-y-3">
                {[
                  "Donation Schedule",
                  "Process Duration",
                  "Safety Standards",
                  "Preparation Protocol",
                  "Processing & Distribution",
                  "Medical Eligibility",
                ].map((category, index) => (
                  <div
                    key={index}
                    className="!flex !items-center !gap-3 !text-sm !text-slate-600 !p-2 hover:!bg-slate-50 !transition-colors !duration-200"
                  >
                    <div className="!w-2 !h-2 !bg-red-400 !rounded-full" />
                    {category}
                  </div>
                ))}
              </div>

              <div className="!mt-6 !pt-6 !border-t !border-slate-200">
                <h4 className="!text-sm !font-semibold !text-slate-900 !mb-2">Need More Help?</h4>
                <p className="!text-xs !text-slate-600 !mb-4">Contact our medical team for personalized assistance.</p>
                <button className="!w-full !px-4 !py-2 !bg-red-600 hover:!bg-red-700 !text-white !text-sm !font-semibold !transition-colors !duration-200">
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:!col-span-9"
          >
            <Accordion type="single" collapsible className="!w-full !space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${index}`}
                  className="!border-0 !bg-white !border !border-slate-200 hover:!border-slate-300 !transition-all !duration-300 !overflow-hidden"
                >
                  <AccordionTrigger className="!text-left !py-6 !px-6 hover:!no-underline !group">
                    <div className="!flex !items-start !gap-4 !w-full">
                      <div className="!flex !items-center !gap-3 !flex-shrink-0">
                        <div className="!w-8 !h-8 !bg-slate-100 !flex !items-center !justify-center !text-xs !font-bold !text-slate-600">
                          {faq.id}
                        </div>
                        <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center !text-white">
                          {faq.icon}
                        </div>
                      </div>
                      <div className="!flex-1 !text-left">
                        <div className="!text-lg !font-bold !text-slate-900 !mb-1 group-hover:!text-red-600 !transition-colors !duration-200">
                          {faq.question}
                        </div>
                        <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                          {faq.category}
                        </div>
                      </div>
                      <ChevronDown className="!h-5 !w-5 !text-slate-400 group-hover:!text-red-600 !transition-all !duration-200 group-data-[state=open]:!rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="!px-6 !pb-6">
                    <div className="!pl-20">
                      <div className="!border-l-2 !border-slate-200 !pl-6">
                        <div className="!text-sm !font-semibold !text-slate-500 !uppercase !tracking-wider !mb-2">
                          Professional Answer
                        </div>
                        <p className="!text-slate-700 !leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              <h3 className="!text-xl !font-bold !text-slate-900 !mb-4">Additional Resources & Support</h3>
              <p className="!text-slate-600 !mb-6">
                Our medical team is available to provide personalized guidance and answer specific questions about
                donation eligibility, procedures, and safety protocols. All consultations are confidential and conducted
                by certified healthcare professionals.
              </p>

              <div className="!grid !grid-cols-2 !gap-4 !mb-6">
                <div className="!bg-gradient-to-br !from-slate-50 !to-slate-100 !border !border-slate-200 !p-4 !transform hover:!scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Response Time</div>
                  <div className="!text-lg !font-bold !text-blue-600">24 Hours</div>
                </div>
                <div className="!bg-gradient-to-br !from-green-50 !to-green-100 !border !border-green-200 !p-4 !transform hover:!scale-105 !transition-transform !duration-300">
                  <div className="!text-sm !font-semibold !text-slate-900 !mb-1">Satisfaction Rate</div>
                  <div className="!text-lg !font-bold !text-green-600">98.5%</div>
                </div>
              </div>

              <div className="!flex !flex-wrap !gap-3">
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Medical Support
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  24/7 Available
                </div>
                <div className="!px-4 !py-2 !bg-gradient-to-r !from-slate-100 !to-slate-200 !text-xs !font-semibold !text-slate-600 !uppercase !tracking-wider !rounded-full !border !border-slate-300">
                  Confidential
                </div>
              </div>
            </div>

            <div className="!relative !overflow-hidden">
              <div className="!bg-gradient-to-br !from-red-50 !to-red-100 !border-2 !border-red-200 !p-6 !transform hover:!scale-105 !transition-all !duration-300">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <HelpCircle className="!h-5 !w-5 !text-red-600" />
                  <span className="!text-xs !font-semibold !text-red-600 !uppercase !tracking-wider">
                    Expert Consultation
                  </span>
                </div>
                <h4 className="!text-lg !font-semibold !text-slate-900 !mb-2">Schedule Medical Consultation</h4>
                <p className="!text-sm !text-slate-600 !mb-4">
                  Speak with our certified medical professionals for personalized guidance.
                </p>
                <button className="!w-full !px-4 !py-3 !bg-gradient-to-r !from-red-600 !to-red-700 hover:!from-red-700 hover:!to-red-800 !text-white !font-semibold !transition-all !duration-300 !transform hover:!scale-105 !rounded-lg !shadow-lg hover:!shadow-xl">
                  Book Consultation
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
