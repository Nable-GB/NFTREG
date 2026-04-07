import { AudienceSection } from "../components/audience-section";
import { CtaSection } from "../components/cta-section";
import { DynamicMetadata } from "../components/dynamic-metadata";
import { FeaturesSection } from "../components/features-section";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { Navbar } from "../components/navbar";
import { ProcessSection } from "../components/process-section";
import { ProblemSection } from "../components/problem-section";
import { FloatingDocs, GridPattern } from "../components/svg-illustrations";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <DynamicMetadata />
      {/* SVG grid pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.6),transparent_70%)]">
        <GridPattern />
      </div>
      {/* Floating document shapes */}
      <FloatingDocs className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,176,106,0.12),transparent_28%),radial-gradient(circle_at_82%_0%,rgba(138,160,196,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(255,248,238,0.05),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(255,248,238,0.03),transparent)]" />
        <div className="scanlines absolute inset-0" />
      </div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <AudienceSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
