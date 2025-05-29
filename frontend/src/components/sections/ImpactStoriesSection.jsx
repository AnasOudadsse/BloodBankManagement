import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ImpactStoryCard } from "@/components/impact-story-card";

export function ImpactStoriesSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-red-100 -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-100 translate-x-1/3 translate-y-1/3 opacity-70"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">
              Impact Stories
            </Badge>
            <h2 className="text-5xl font-bold  mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">
              Lives Changed Through Donation
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from people whose lives were saved thanks to generous
              blood donors like you.
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          <ImpactStoryCard
            name="Sarah Johnson"
            age="28"
            image="/joyful-portrait.png"
            title="Car Accident Survivor"
            bloodType="O-"
            story="After a severe car accident, I needed multiple blood transfusions to survive. I lost over 40% of my blood volume and required emergency surgery. Thanks to blood donors, I'm alive today and able to watch my children grow up. I can never thank donors enough for their selfless gift."
          />

          <ImpactStoryCard
            name="Michael Chen"
            age="42"
            image="/thoughtful-gaze.png"
            title="Cancer Treatment Recipient"
            bloodType="A+"
            story="During my leukemia treatment, I received over 30 blood and platelet transfusions. Each donation gave me strength to continue fighting. Today I'm in remission and volunteer at blood drives to help others receive the same gift of life that was given to me."
          />
        </div>
      </div>
    </section>
  );
}
