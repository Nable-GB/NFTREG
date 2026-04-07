"use client";

import { BarChart3, Globe2, Workflow } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";

const icons = [Globe2, Workflow, BarChart3];

export const AudienceSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].audience;

  return (
    <section id="audit-log" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="mb-8 max-w-3xl sm:mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
          section 03
        </p>
        <h2 className="mt-3 font-heading text-[2.35rem] leading-[0.95] text-white sm:mt-4 sm:text-5xl">{copy.title}</h2>
      </Reveal>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {copy.items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={item.title} delay={index * 0.12}>
              <article className="panel h-full rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--violet)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-[1.7rem] text-white sm:mt-6 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--text-soft)] sm:mt-4 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};