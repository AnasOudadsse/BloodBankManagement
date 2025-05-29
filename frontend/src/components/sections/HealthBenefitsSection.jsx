import { motion } from "framer-motion";
import { HeartPulse, BarChart, Zap, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HealthBenefitCard } from "@/components/health-benefit-card";

export function HealthBenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-red-200/50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-red-200/50 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-3 bg-red-200 text-red-700 hover:bg-red-300 border-none">
              Health Benefits
            </Badge>
            <h2 className="text-5xl font-bold  mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
              Benefits of Donating Blood
            </h2>
            <p className="text-xl text-gray-700">
              Beyond saving lives, donating blood offers several health benefits
              for donors themselves.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HealthBenefitCard
            icon={<HeartPulse className="h-7 w-7 text-white" />}
            title="Heart Health"
            description="Regular blood donation can reduce the risk of heart attacks and lower cholesterol levels."
          />

          <HealthBenefitCard
            icon={<BarChart className="h-7 w-7 text-white" />}
            title="Free Health Screening"
            description="Each donation includes a mini health check-up, including blood pressure and hemoglobin levels."
          />

          <HealthBenefitCard
            icon={<Zap className="h-7 w-7 text-white" />}
            title="Stimulates Blood Cell Production"
            description="After donating, your body works to replenish blood cells, stimulating the production of new blood cells."
          />

          <HealthBenefitCard
            icon={<Leaf className="h-7 w-7 text-white" />}
            title="Burns Calories"
            description="Donating blood burns approximately 650 calories as your body works to replace the donated blood."
          />
        </div>
      </div>
    </section>
  );
}
