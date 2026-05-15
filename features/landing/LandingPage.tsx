import { FeatureGrid } from "@/features/landing/FeatureGrid";
import { HowItWorks } from "@/features/landing/HowItWorks";
import { LandingCta } from "@/features/landing/LandingCta";
import { LandingFooter } from "@/features/landing/LandingFooter";
import { LandingHero } from "@/features/landing/LandingHero";
import { LandingNav } from "@/features/landing/LandingNav";
import { LandingTicker } from "@/features/landing/LandingTicker";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <LandingNav />
      <LandingHero />
      <LandingTicker />
      <FeatureGrid />
      <HowItWorks />
      <LandingCta />
      <LandingFooter />
    </main>
  );
}
