import { AudienceSection } from "../components/audience-section";
import { CtaSection } from "../components/cta-section";
import { DynamicMetadata } from "../components/dynamic-metadata";
import { FeaturesSection } from "../components/features-section";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { Navbar } from "../components/navbar";
import { ProblemSection } from "../components/problem-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <DynamicMetadata />
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(0,255,136,0.1),transparent_36%)]" />
        <div className="scanlines absolute inset-0" />
      </div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <AudienceSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
