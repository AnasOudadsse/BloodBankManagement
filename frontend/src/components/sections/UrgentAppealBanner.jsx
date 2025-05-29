import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UrgentAppealBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-700 to-gray-100 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center rotate-3 transform hover:rotate-6 transition-transform">
                <AlertCircle className="h-8 w-8 text-white animate-pulse" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-30 -z-10"></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                  Urgent Appeal
                </span>
                <div className="h-1 w-1 rounded-full bg-white/50"></div>
                <span className="text-white/70 text-sm">Blood Shortage</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Critical shortage of O-negative and B-positive blood types
              </h3>
              <p className="text-white/70 text-sm">
                Your donation can save up to 3 lives
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              size="lg"
              className="bg-white !text-red-700 !whitespace-nowrap !rounded-full !px-8 !transition-all hover:!scale-105 hover:!shadow-xl hover:!shadow-red-500/20 group"
            >
              <span className="flex items-center gap-2">
                Donate Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
