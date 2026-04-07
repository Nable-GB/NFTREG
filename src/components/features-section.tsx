"use client";

import { ActivitySquare, Layers3, Radar } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";

const icons = [Layers3, ActivitySquare, Radar];

export const FeaturesSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].features;

  return (
    <section id="topography" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="mb-8 max-w-3xl sm:mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
          section 02
        </p>
        <h2 className="mt-3 font-heading text-[2.35rem] leading-[0.95] text-white sm:mt-4 sm:text-5xl">{copy.title}</h2>
      </Reveal>

      <div className="grid gap-4 sm:gap-5">
        {copy.items.map((feature, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={feature.index} delay={index * 0.12}>
              <article className="panel grid gap-5 rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-6 lg:grid-cols-[120px_1fr_220px] lg:items-center lg:gap-6 lg:p-8">
                <div className="flex items-center gap-4 lg:block">
                  <p className="font-heading text-4xl text-white/25 sm:text-5xl">{feature.index}</p>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--accent)] lg:mt-5">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-[1.7rem] text-white sm:text-2xl">{feature.title}</h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--text-soft)] sm:mt-4 sm:text-base sm:leading-8">
                    {feature.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:block lg:space-y-3">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="block rounded-full border border-white/10 bg-white/[0.04] px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/72 sm:px-4 sm:py-3 sm:text-[11px] sm:tracking-[0.22em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};