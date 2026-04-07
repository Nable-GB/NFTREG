"use client";

import { Activity, ArrowDown, ArrowUpRight, CheckCircle2, Cpu, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { ClusterVisualization } from "./cluster-visualization";
import { ProcessBars } from "./process-bars";
import { Reveal } from "./reveal";

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
    <section id="overview" className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pt-10 pb-20 sm:px-6 lg:px-8 lg:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <Reveal className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
            <Terminal className="h-3.5 w-3.5 text-[var(--accent)]" />
            {copy.eyebrow}
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl font-heading text-5xl leading-[0.95] tracking-[0.04em] text-white sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              {copy.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_0_40px_rgba(0,255,136,0.38)]"
            >
              {copy.primaryCta}
            </a>
            <a
              href="#topography"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-4 font-mono text-xs uppercase tracking-[0.28em] text-white/80 transition hover:border-[var(--accent)] hover:text-white"
            >
              <ArrowDown className="h-4 w-4" />
              {copy.secondaryCta}
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel rounded-[1.75rem] p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">
                  {copy.statusLabel}
                </p>
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
              </div>
              <p className="mt-4 font-heading text-2xl text-white">● {copy.statusValue}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">{copy.heroNote}</p>
            </div>

            <div className="panel rounded-[1.75rem] p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">
                  {copy.consoleLabel}
                </p>
                <Cpu className="h-4 w-4 text-[var(--violet)]" />
              </div>
              <p className="mt-4 font-heading text-2xl text-white">{copy.throughputLabel}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
                {copy.activeNodesLabel}: {copy.activeNodesValue}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="absolute -inset-x-10 -top-12 h-48 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.14),transparent_60%)] blur-3xl" />
          <div className="grid gap-5">
            <ClusterVisualization />
            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <ProcessBars />
              <div className="panel rounded-[2rem] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
                    hero dashboard data
                  </p>
                  <Activity className="h-4 w-4 text-[var(--accent)]" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
                      {copy.inboundLabel}
                    </p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="font-heading text-4xl text-white">
                        <Counter value={45447} />
                        <span className="ml-2 font-mono text-xs text-white/55">/s</span>
                      </p>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent)]">
                        <ArrowUpRight className="h-4 w-4" />
                        19.6%
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
                      {copy.outboundLabel}
                    </p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="font-heading text-4xl text-white">
                        <Counter value={12005} />
                        <span className="ml-2 font-mono text-xs text-white/55">/s</span>
                      </p>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#93a6cf]">
                        <ArrowDown className="h-4 w-4" />
                        2.5%
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
                      {copy.activeNodesLabel}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                      {copy.activeNodesValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};