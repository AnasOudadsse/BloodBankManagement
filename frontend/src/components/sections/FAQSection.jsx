import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often can I donate blood?",
    answer:
      "You can donate whole blood every 56 days (8 weeks). This waiting period ensures your body has enough time to replenish the donated blood. Platelet donations can be made more frequently, up to 24 times per year.",
  },
  {
    question: "How long does the donation process take?",
    answer:
      "The entire process takes about an hour, including registration, screening, donation, and recovery. The actual blood donation takes only 8-10 minutes.",
  },
  {
    question: "Is blood donation safe?",
    answer:
      "Yes, blood donation is very safe. We use sterile, disposable equipment for each donation. The process is closely monitored by trained medical professionals.",
  },
  {
    question: "What should I do before donating?",
    answer:
      "Eat a healthy meal within 3 hours of donating, stay hydrated, and get a good night's sleep. Avoid strenuous exercise before and after donation.",
  },
  {
    question: "What happens to my blood after donation?",
    answer:
      "Your blood is tested for safety, then separated into components (red cells, plasma, platelets). These components are stored and distributed to hospitals based on need.",
  },
  {
    question: "Can I donate if I'm taking medication?",
    answer:
      "It depends on the medication. Some medications may temporarily defer you from donating. Please disclose all medications during screening, and our medical staff will determine your eligibility.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">
              FAQ
            </Badge>
            <h2 className="text-5xl font-bold  mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about blood donation and the
              donation process.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 py-4 hover:text-red-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
