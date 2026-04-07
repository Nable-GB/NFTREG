"use client";

import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";
import { IconConsultation, IconStrategy, IconFiling, IconCertificate, SectionDivider } from "./svg-illustrations";

const icons = [IconConsultation, IconStrategy, IconFiling, IconCertificate];

export const ProcessSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].process;

  return (
    <section id="process" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="mb-8 max-w-3xl sm:mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
          section 04
        </p>
        <h2 className="mt-3 font-heading text-[2.35rem] leading-[0.95] text-white sm:mt-4 sm:text-5xl">{copy.title}</h2>
      </Reveal>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {copy.steps.map((step, index) => {
          const Icon = icons[index % icons.length];

          return (
            <Reveal key={step.index} delay={index * 0.1}>
              <article className="panel rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="font-heading text-3xl text-white/25 sm:text-4xl">{step.index}</span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--accent)]">
                    <Icon className="h-7 w-7" />
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-[1.7rem] text-white sm:mt-6 sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--text-soft)] sm:mt-4 sm:text-base sm:leading-8">{step.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
        {copy.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={0.4 + index * 0.08}>
            <article className="panel rounded-[1.5rem] p-5 text-center sm:rounded-[1.75rem] sm:p-6">
              <p className="font-heading text-4xl text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/65 sm:mt-3 sm:text-[11px] sm:tracking-[0.22em]">
                {stat.label}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <SectionDivider className="mt-8 w-full sm:mt-10" />
    </section>
  );
};