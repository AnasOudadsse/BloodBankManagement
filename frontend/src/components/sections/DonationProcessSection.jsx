import { motion } from "framer-motion";
import { ClipboardCheck, HeartPulse, Droplet, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-white" />,
    title: "Registration & Screening",
    description:
      "Complete a health questionnaire and undergo a mini physical examination.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-white" />,
    title: "Medical Check",
    description:
      "Quick check of your blood pressure, pulse, and hemoglobin levels.",
    color: "from-red-600 to-red-700",
  },
  {
    icon: <Droplet className="h-8 w-8 text-white" />,
    title: "Donation",
    description:
      "The actual donation takes about 8-10 minutes. You'll donate about 450ml of blood.",
    color: "from-red-700 to-red-800",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "Recovery",
    description:
      "Rest for 10-15 minutes and enjoy refreshments to help your body recover.",
    color: "from-red-800 to-red-900",
  },
];

export function DonationProcessSection() {
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
              Simple Process
            </Badge>
            <h2 className="text-5xl font-bold  mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
              The Donation Process
            </h2>
            <p className="text-xl text-gray-600">
              Donating blood is a simple and safe process that takes about an
              hour from start to finish.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-red-100/50">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-lg">
                  {step.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
