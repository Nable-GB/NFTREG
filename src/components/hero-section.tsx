"use client";

import { Activity, ArrowDown, CheckCircle2, Cpu, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { ClusterVisualization } from "./cluster-visualization";
import { ProcessBars } from "./process-bars";
import { Reveal } from "./reveal";
import { HeroAccent, SectionDivider } from "./svg-illustrations";

const Counter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return displayValue.toLocaleString();
};

export const HeroSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].hero;

  return (
    <section id="overview" className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-20 lg:px-8 lg:pt-16">
      {/* SVG accent behind hero */}
      <HeroAccent className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] opacity-40 sm:h-[500px] sm:w-[500px]" />
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
        <Reveal className="space-y-6 sm:space-y-8">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.26em] text-[var(--muted)] sm:px-4 sm:text-[10px] sm:tracking-[0.38em]">
            <Terminal className="h-3.5 w-3.5 text-[var(--accent)]" />
            <span className="truncate">{copy.eyebrow}</span>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h1 className="max-w-3xl font-heading text-[2.75rem] leading-[0.92] tracking-[0.02em] text-white sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="max-w-2xl text-[15px] leading-7 text-[var(--text-soft)] sm:text-lg sm:leading-8">
              {copy.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#download"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3.5 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_0_40px_rgba(0,255,136,0.38)] sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
            >
              {copy.primaryCta}
            </a>
            <a
              href="#process"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3.5 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/80 transition hover:border-[var(--accent)] hover:text-white sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
            >
              <ArrowDown className="h-4 w-4" />
              {copy.secondaryCta}
            </a>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            <div className="panel rounded-[1.5rem] p-4 sm:rounded-[1.75rem] sm:p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">
                  {copy.statusLabel}
                </p>
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
              </div>
              <p className="mt-3 font-heading text-[1.7rem] leading-none text-white sm:mt-4 sm:text-2xl">● {copy.statusValue}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">{copy.heroNote}</p>
            </div>

            <div className="panel rounded-[1.5rem] p-4 sm:rounded-[1.75rem] sm:p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">
                  {copy.consoleLabel}
                </p>
                <Cpu className="h-4 w-4 text-[var(--violet)]" />
              </div>
              <p className="mt-3 font-heading text-[1.7rem] leading-none text-white sm:mt-4 sm:text-2xl">{copy.throughputLabel}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
                {copy.consoleNote}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="absolute -inset-x-4 -top-8 h-32 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.14),transparent_60%)] blur-3xl sm:-inset-x-10 sm:-top-12 sm:h-48" />
          <div className="grid gap-5">
            <ClusterVisualization />
            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <ProcessBars />
              <div className="panel rounded-[1.6rem] p-4 sm:rounded-[2rem] sm:p-6">
                <div className="mb-4 flex items-center justify-between sm:mb-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.38em]">
                    {copy.dashboardLabel}
                  </p>
                  <Activity className="h-4 w-4 text-[var(--accent)]" />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-3 sm:rounded-[1.25rem] sm:p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
                      {copy.inboundLabel}
                    </p>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                      <p className="font-heading text-3xl text-white sm:text-4xl">
                        <Counter value={copy.inboundValue} />
                        <span className="ml-2 font-mono text-xs text-white/55">{copy.inboundUnit}</span>
                      </p>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                        {copy.inboundBadge}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">{copy.inboundMeta}</p>
                  </div>

                  <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-3 sm:rounded-[1.25rem] sm:p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
                      {copy.outboundLabel}
                    </p>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                      <p className="font-heading text-3xl text-white sm:text-4xl">
                        <Counter value={copy.outboundValue} />
                        <span className="ml-2 font-mono text-xs text-white/55">{copy.outboundUnit}</span>
                      </p>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#93a6cf]">
                        {copy.outboundBadge}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">{copy.outboundMeta}</p>
                  </div>

                  <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-3 sm:rounded-[1.25rem] sm:p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
                      {copy.activeStatsLabel}
                    </p>
                    <p className="mt-3 font-heading text-3xl text-white sm:text-4xl">
                      <Counter value={copy.activeStatsValue} />
                      <span className="ml-2 font-mono text-xs text-white/55">{copy.activeStatsUnit}</span>
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{copy.activeStatsMeta}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Section divider */}
      <SectionDivider className="mt-4 w-full" />
    </section>
  );
};