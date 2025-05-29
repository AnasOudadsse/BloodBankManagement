"use client";

import { AlertTriangle, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UrgentAppealBanner() {
  return (
    <section className="!relative !bg-white !border-y !border-slate-100">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-50" />

      <div className="!container !mx-auto !px-6 lg:!px-8 !relative">
        <div className="!grid !grid-cols-1 lg:!grid-cols-12 !gap-6 !py-8">
          {/* Alert indicator */}
          <div className="lg:!col-span-1 !flex lg:!justify-center">
            <div className="!w-12 !h-12 !bg-red-50 !border !border-red-100 !flex !items-center !justify-center">
              <AlertTriangle
                className="!h-6 !w-6 !text-red-500"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Main content */}
          <div className="lg:!col-span-7 !space-y-4">
            <div className="!flex !items-center !gap-4">
              <div className="!flex !items-center !gap-3">
                <span className="!text-xs !font-semibold !text-red-600 !uppercase !tracking-wider">
                  Critical Alert
                </span>
                <div className="!w-1 !h-4 !bg-red-200" />
                <span className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                  Blood Shortage
                </span>
              </div>
              <div className="!flex !items-center !gap-1 !text-xs !font-semibold !text-amber-600">
                <TrendingUp className="!h-3 !w-3" />
                High Priority
              </div>
            </div>

            <h3 className="!text-xl lg:!text-2xl !font-bold !text-slate-800 !leading-tight">
              Critical Shortage: O-Negative and B-Positive Blood Types
            </h3>

            <div className="!flex !items-center !gap-6 !text-sm !text-slate-600">
              <div className="!flex !items-center !gap-2">
                <Clock className="!h-4 !w-4 !text-slate-500" />
                <span>Immediate need</span>
              </div>
              <div className="!w-1 !h-1 !bg-slate-200 !rounded-full" />
              <span>3 lives saved per donation</span>
              <div className="!w-1 !h-1 !bg-slate-200 !rounded-full" />
              <span>24/7 emergency response</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:!col-span-2 !space-y-3">
            <div className="!bg-slate-50 !border !border-slate-100 !p-4">
              <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider !mb-1">
                Current Stock
              </div>
              <div className="!text-lg !font-bold !text-red-600">18% Below</div>
              <div className="!text-xs !text-slate-400">Critical threshold</div>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:!col-span-2 !flex !items-center !justify-end">
            <div className="!space-y-3 !w-full">
              <Button
                size="lg"
                className="!w-full !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !transition-all !duration-200 !group"
              >
                <span className="!flex !items-center !gap-2">
                  Emergency Donation
                  <ArrowRight className="!h-4 !w-4 !transition-transform group-hover:!translate-x-1" />
                </span>
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="!w-full !border-slate-200 !text-slate-600 hover:!bg-slate-50 hover:!border-slate-300 !text-xs"
              >
                Schedule Later
              </Button>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="!border-t !border-slate-100 !pt-4 !pb-2">
          <div className="!flex !justify-between !items-center !text-xs !mb-2">
            <span className="!text-slate-500">Blood Bank Capacity</span>
            <span className="!font-semibold !text-slate-600">18% / 100%</span>
          </div>
          <div className="!w-full !bg-slate-100 !h-1">
            <div className="!h-1 !bg-gradient-to-r !from-red-500 !to-red-400 !w-[18%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
