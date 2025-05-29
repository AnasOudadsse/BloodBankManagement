"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { UrgentAppealBanner } from "@/components/sections/UrgentAppealBanner";
import { StatsSection } from "@/components/sections/StatsSection";
import { ImpactStoriesSection } from "@/components/sections/ImpactStoriesSection";
import { WhyDonateSection } from "@/components/sections/WhyDonateSection";
import { HealthBenefitsSection } from "@/components/sections/HealthBenefitsSection";
import { DonationProcessSection } from "@/components/sections/DonationProcessSection";
import { EligibilitySection } from "@/components/sections/EligibilitySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <UrgentAppealBanner />
      <StatsSection />
      <ImpactStoriesSection />
      <WhyDonateSection />
      <HealthBenefitsSection />
      <DonationProcessSection />
      <EligibilitySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
