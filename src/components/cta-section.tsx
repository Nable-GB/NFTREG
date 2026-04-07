"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";

export const CtaSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].cta;

  return (
    <section id="download" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="panel relative overflow-hidden rounded-[2.5rem] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,136,0.18),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(139,92,246,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
                section 04
              </p>
              <h2 className="mt-4 font-heading text-4xl text-white sm:text-5xl">
                {copy.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-[var(--text-soft)]">
                {copy.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#overview"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_0_40px_rgba(0,255,136,0.38)]"
              >
                {copy.primary}
              </a>
              <a
                href="#topography"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 font-mono text-xs uppercase tracking-[0.28em] text-white/84 transition hover:border-white/30 hover:text-white"
              >
                {copy.secondary}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};